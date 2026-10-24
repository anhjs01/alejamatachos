/* =======================================================================
   REPRODUCTOR.JS — reproductor oficial de YouTube.
   La API puede prepararse al cargar la página, pero no se solicita ni
   se carga una canción hasta que la persona elige reproducir.
   ======================================================================= */

(function () {
  "use strict";

  let player = null;
  let apiLista = false;
  let pendiente = null; // videoId en espera si se pidió reproducir antes de tiempo
  let cancionActual = null;
  let sonando = false;
  let errorReproduccion = false;

  /* -----------------------------------------------------------------
     1) CARGAR LA API DE YOUTUBE (una sola vez, lo antes posible)
     ----------------------------------------------------------------- */
  function cargarAPI() {
    if (window.__ytApiCargando) return;
    window.__ytApiCargando = true;

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);

    window.onYouTubeIframeAPIReady = function () {
      crearPlayer();
    };
  }

  function crearPlayer() {
    const host = document.createElement("div");
    host.id = "yt-reproductor-host";
    host.style.position = "fixed";
    host.style.width = "1px";
    host.style.height = "1px";
    host.style.opacity = "0";
    host.style.pointerEvents = "none";
    host.style.bottom = "0";
    host.style.left = "0";
    document.body.appendChild(host);

    player = new YT.Player(host.id, {
      height: "1",
      width: "1",
      playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
      events: {
        onReady: function () {
          apiLista = true;
          player.mute();
          if (pendiente) {
            const solicitud = pendiente;
            pendiente = null;
            reproducirId(solicitud.videoId, solicitud.silencioso);
          }
        },
        onStateChange: function (e) {
          if (!cancionActual) return; // ignora eventos de la precarga silenciosa

          // Cuando termina una canción, continúa con otra de la misma categoría.
          // Así la música no se queda detenida al acabar la canción del día.
          if (e.data === YT.PlayerState.ENDED) {
            sonando = false;
            actualizarUI();
            siguienteDeLaMisma();
            return;
          }

          sonando = e.data === YT.PlayerState.PLAYING;
          if (sonando) errorReproduccion = false;
          actualizarUI();
        },
        onError: function () {
          sonando = false;
          errorReproduccion = true;
          actualizarUI();
        },
      },
    });
  }

  /* -----------------------------------------------------------------
     2) REPRODUCIR
     ----------------------------------------------------------------- */
  function reproducirId(videoId, silencioso) {
    if (!videoId || !player) return;
    if (!apiLista || !player.loadVideoById) {
      pendiente = { videoId: videoId, silencioso: !!silencioso };
      return;
    }
    player.loadVideoById(videoId);
    if (!silencioso) player.unMute();
    player.playVideo();
  }

  function reproducirCategoria(categoria) {
    if (typeof CATALOGO_CANCIONES === "undefined") return;
    const lista = (CATALOGO_CANCIONES[categoria] || []).filter((c) => c.youtubeId);
    if (lista.length === 0) return;

    // evita repetir la misma si hay más de una opción
    let opciones = lista;
    if (cancionActual) {
      const otras = lista.filter((c) => c.youtubeId !== cancionActual.youtubeId);
      if (otras.length > 0) opciones = otras;
    }

    const elegida = opciones[Math.floor(Math.random() * opciones.length)];
    cancionActual = elegida;
    cancionActual.categoria = categoria;
    sonando = false;
    errorReproduccion = false;

    reproducirId(elegida.youtubeId, false);
    actualizarUI();
  }

  function reproducirDia(dia) {
    if (!dia) return;
    if (!dia.youtubeId) { console.warn("Este día no tiene youtubeId; no se cambiará a una canción aleatoria."); return; }
    let encontrada = null;
    let categoriaEncontrada = null;
    if (typeof CATALOGO_CANCIONES !== "undefined") {
      for (const categoria of Object.keys(CATALOGO_CANCIONES)) {
        encontrada = (CATALOGO_CANCIONES[categoria] || []).find(c => c.youtubeId === dia.youtubeId);
        if (encontrada) {
          categoriaEncontrada = categoria;
          break;
        }
      }
    }
    cancionActual = encontrada ? { ...encontrada } : { titulo: dia.cancionTitulo || "Canción del día", artista: dia.cancionArtista || "", youtubeId: dia.youtubeId };
    // La categoría real del catálogo permite que el botón "siguiente" y el
    // avance automático sigan funcionando aunque el tono del día sea distinto.
    cancionActual.categoria = categoriaEncontrada ||
      (typeof CATALOGO_CANCIONES !== "undefined" && CATALOGO_CANCIONES[dia.tono] ? dia.tono : "amor");
    sonando = false;
    errorReproduccion = false;
    reproducirId(dia.youtubeId, false);
    actualizarUI();
  }
  function pausarOReanudar() {
    if (!player) return;
    if (sonando) {
      player.pauseVideo();
    } else if (cancionActual) {
      player.playVideo();
    }
  }

  function siguienteDeLaMisma() {
    if (cancionActual && cancionActual.categoria) {
      reproducirCategoria(cancionActual.categoria);
    }
  }

  /* -----------------------------------------------------------------
     3) UI MÍNIMA — barra flotante "sonando ahora"
     ----------------------------------------------------------------- */
  let elBarra = null;

  function crearUI() {
    if (elBarra) return;
    elBarra = document.createElement("div");
    elBarra.className = "reproductor-barra";
    elBarra.innerHTML =
      '<button type="button" class="reproductor-btn" id="reproductorPlayPausa" aria-label="Pausar o reanudar">⏸</button>' +
      '<span class="reproductor-info" id="reproductorInfo" role="status" aria-live="polite" aria-atomic="true">Eligiendo música…</span>' +
      '<button type="button" class="reproductor-btn" id="reproductorSiguiente" aria-label="Cambiar canción">⟳</button>';
    document.body.appendChild(elBarra);

    elBarra.querySelector("#reproductorPlayPausa").addEventListener("click", pausarOReanudar);
    elBarra.querySelector("#reproductorSiguiente").addEventListener("click", siguienteDeLaMisma);
  }

  function actualizarUI() {
    if (!elBarra) crearUI();
    if (!cancionActual) return;
    elBarra.classList.add("is-visible");
    const info = elBarra.querySelector("#reproductorInfo");
    const nombre = cancionActual.artista
      ? cancionActual.titulo + " · " + cancionActual.artista
      : cancionActual.titulo;
    info.textContent = errorReproduccion ? "No se pudo reproducir este video. Prueba con otra canción." : "🎵 " + nombre;
    elBarra.querySelector("#reproductorPlayPausa").textContent = sonando ? "⏸" : "▶";
  }

  /* -----------------------------------------------------------------
     4) INICIO
     ----------------------------------------------------------------- */
  cargarAPI();

  window.SorpresaReproductor = {
    reproducirCategoria: reproducirCategoria,
    reproducirDia: reproducirDia,
    estaSonando: function () { return sonando; },
    haIniciado: function () { return !!cancionActual; },
  };
})();
