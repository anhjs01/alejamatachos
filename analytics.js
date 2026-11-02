/* ALEJA · analítica respetuosa y anónima
   No se activa hasta configurar la Project API Key y recibir consentimiento.
   No recopila nombres, correos, texto de cartas ni contenido del lienzo. */
(function () {
  "use strict";
  const config = window.ALEJA_ANALYTICS || {};
  const key = typeof config.projectKey === "string" ? config.projectKey.trim() : "";
  const host = (config.apiHost || "https://us.i.posthog.com").replace(/\/$/, "");
  if (!key || key.length < 10) return;

  const CONSENT_KEY = "aleja-analytics-consent-v1";
  const VISITOR_KEY = "aleja-analytics-visitor-v1";
  const SESSION_KEY = "aleja-analytics-session-v1";
  let consent = "";
  try { consent = localStorage.getItem(CONSENT_KEY) || ""; } catch (_) {}
  if (consent !== "yes" && consent !== "no") {
    showConsent();
    return;
  }
  if (consent !== "yes") return;

  function id(store, keyName) {
    try {
      let value = store.getItem(keyName);
      if (!value) {
        value = (crypto && crypto.randomUUID) ? crypto.randomUUID() :
          "v-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
        store.setItem(keyName, value);
      }
      return value;
    } catch (_) { return "ephemeral-" + Math.random().toString(36).slice(2); }
  }
  const visitorId = id(localStorage, VISITOR_KEY);
  const sessionId = id(sessionStorage, SESSION_KEY);
  const startedAt = Date.now();

  function send(eventName, properties) {
    const payload = {
      api_key: key,
      event: eventName,
      distinct_id: visitorId,
      timestamp: new Date().toISOString(),
      properties: Object.assign({
        distinct_id: visitorId,
        $session_id: sessionId,
        $current_url: location.href,
        $pathname: location.pathname,
        $referrer: document.referrer || "",
        app_name: "ALEJA"
      }, properties || {})
    };
    try {
      fetch(host + "/capture/", {
        method: "POST",
        mode: "cors",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (_) {}
  }

  function showConsent() {
    if (document.getElementById("aleja-analytics-consent")) return;
    const panel = document.createElement("aside");
    panel.id = "aleja-analytics-consent";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Preferencias de privacidad");
    panel.style.cssText = "position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:620px;margin:auto;padding:18px 20px;background:#0b1518;border:1px solid #53dfff;border-radius:14px;box-shadow:0 12px 44px #000b;color:#f3f3ed;font:14px/1.55 system-ui,sans-serif";
    panel.innerHTML =
      '<strong style="display:block;color:#53dfff;margin-bottom:6px">Una nota sobre tu privacidad</strong>' +
      '<p style="margin:0 0 12px">ALEJA puede recopilar estadísticas anónimas de visitas y uso (por ejemplo, secciones y días abiertos) para entender cómo se utiliza la página. No se recopilan nombres, correos, mensajes ni dibujos. Puedes aceptar o rechazar este seguimiento.</p>' +
      '<div style="display:flex;gap:9px;flex-wrap:wrap">' +
      '<button type="button" data-choice="yes" style="border:0;border-radius:8px;padding:10px 14px;background:#53dfff;color:#071014;font-weight:700">Aceptar estadísticas</button>' +
      '<button type="button" data-choice="no" style="border:1px solid #64777c;border-radius:8px;padding:10px 14px;background:transparent;color:#f3f3ed">No aceptar</button>' +
      '</div>';
    panel.addEventListener("click", function (event) {
      const button = event.target.closest("button[data-choice]");
      if (!button) return;
      try { localStorage.setItem(CONSENT_KEY, button.dataset.choice); } catch (_) {}
      panel.remove();
      if (button.dataset.choice === "yes") location.reload();
    });
    document.body.appendChild(panel);
  }

  send("$pageview", { page_title: document.title });
  send("aleja_session_started", { landing_path: location.pathname });
  const seenSections = new Set();
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const section = entry.target;
        const sectionId = section.id || section.getAttribute("aria-label") || "seccion";
        if (seenSections.has(sectionId)) return;
        seenSections.add(sectionId);
        send("aleja_section_viewed", { section: sectionId });
      });
    }, { threshold: 0.35 });
    document.querySelectorAll("main section[id]").forEach(function (section) { observer.observe(section); });
  }

  document.addEventListener("click", function (event) {
    const door = event.target.closest("#grid .door");
    if (door) {
      send("aleja_calendar_day_opened", {
        day: Number((door.textContent || "").trim()),
        section: "calendario"
      });
      return;
    }
    if (event.target.closest("#play-day-song")) {
      send("aleja_day_song_play_clicked", { section: "calendario" });
      return;
    }
    const playlistSong = event.target.closest("#playlist-list button");
    if (playlistSong) {
      send("aleja_playlist_song_play_clicked", { section: "musica" });
      return;
    }
    if (event.target.closest(".game-option")) {
      send("aleja_music_quiz_answer_selected", { section: "juegos" });
      return;
    }
    if (event.target.closest("#canvas-save")) {
      send("aleja_canvas_saved", { section: "lienzo" });
      return;
    }
    if (event.target.closest("#canvas-export")) {
      send("aleja_canvas_export_clicked", { section: "lienzo", format: "png" });
      return;
    }
    if (event.target.closest("#canvas-undo")) {
      send("aleja_canvas_undo_clicked", { section: "lienzo" });
      return;
    }
    if (event.target.closest("#canvas-clear")) {
      send("aleja_canvas_clear_clicked", { section: "lienzo" });
    }
  }, true);

  const canvas = document.getElementById("lienzo-canvas");
  if (canvas) {
    let drawingTracked = false;
    canvas.addEventListener("pointerdown", function () {
      if (drawingTracked) return;
      drawingTracked = true;
      send("aleja_canvas_drawing_started", { section: "lienzo" });
    }, { passive: true });
  }

  let ended = false;
  function endSession() {
    if (ended) return;
    ended = true;
    send("aleja_session_ended", {
      duration_seconds: Math.max(0, Math.round((Date.now() - startedAt) / 1000))
    });
  }
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") endSession();
  });
  window.addEventListener("pagehide", endSession);
})();
