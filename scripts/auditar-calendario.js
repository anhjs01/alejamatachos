#!/usr/bin/env node
"use strict";

// Auditoría estática de coherencia entre el calendario y el catálogo.
// No consulta YouTube ni puede confirmar disponibilidad, inserción o identidad del video.

const fs = require("node:fs");
const path = require("node:path");

function readDeclaredJson(file, declaration, closing) {
  const fullPath = path.join(process.cwd(), file);
  const source = fs.readFileSync(fullPath, "utf8");
  const start = source.indexOf(declaration);
  if (start < 0) throw new Error(`No se encontró ${declaration} en ${file}`);
  const equals = source.indexOf("=", start + declaration.length);
  if (equals < 0) throw new Error(`Declaración inválida en ${file}`);
  const end = source.lastIndexOf(closing);
  if (end <= equals) throw new Error(`No se encontró el cierre ${closing} en ${file}`);
  return JSON.parse(source.slice(equals + 1, end).trim());
}

const calendario = readDeclaredJson("contenido-calendario.js", "const CALENDARIO", ";");
const catalogo = readDeclaredJson("catalogo-canciones.js", "const CATALOGO_CANCIONES", ";");

const errores = [];
const avisos = [];
const diasVistos = new Set();
const idsCatalogo = new Set();
const canciones = Object.values(catalogo).flat();
for (const cancion of canciones) {
  if (typeof cancion.youtubeId === "string" && cancion.youtubeId.trim()) {
    idsCatalogo.add(cancion.youtubeId.trim());
  }
}

for (const entrada of calendario) {
  const etiqueta = `Día ${entrada.dia ?? "sin número"}`;
  if (!Number.isInteger(entrada.dia)) errores.push(`${etiqueta}: número de día ausente o inválido.`);
  else if (diasVistos.has(entrada.dia)) errores.push(`${etiqueta}: número de día duplicado.`);
  else diasVistos.add(entrada.dia);

  const id = typeof entrada.youtubeId === "string" ? entrada.youtubeId.trim() : "";
  if (!id) {
    errores.push(`${etiqueta}: falta youtubeId.`);
    continue;
  }
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
    errores.push(`${etiqueta}: youtubeId no tiene el formato esperado de 11 caracteres (${id}).`);
  }
  if (!idsCatalogo.has(id)) errores.push(`${etiqueta}: el ID ${id} no aparece en el catálogo.`);

  const url = typeof entrada.cancionUrl === "string" ? entrada.cancionUrl.trim() : "";
  if (!url) {
    errores.push(`${etiqueta}: falta cancionUrl.`);
  } else {
    try {
      const parsed = new URL(url);
      const hostValido = ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(parsed.hostname);
      if (!hostValido || parsed.pathname !== "/watch" || parsed.searchParams.get("v") !== id) {
        errores.push(`${etiqueta}: cancionUrl no corresponde al youtubeId (${url}).`);
      }
    } catch {
      errores.push(`${etiqueta}: cancionUrl no es una URL válida (${url}).`);
    }
  }
}

const idsCalendario = calendario.map(e => e.youtubeId).filter(Boolean);
const repetidos = [...new Set(idsCalendario.filter((id, i) => idsCalendario.indexOf(id) !== i))];
if (repetidos.length) avisos.push(`Hay ${repetidos.length} ID(s) repetidos en el calendario; se muestran como aviso porque una canción podría repetirse intencionalmente.`);

console.log("AUDITORÍA ESTÁTICA DEL CALENDARIO");
console.log(`Entradas del calendario: ${calendario.length}`);
console.log(`Días únicos: ${diasVistos.size}`);
console.log(`Canciones en el catálogo: ${canciones.length}`);
console.log(`IDs de YouTube presentes en el catálogo: ${idsCatalogo.size}`);
console.log(`Errores: ${errores.length}`);
console.log(`Avisos: ${avisos.length}`);
for (const aviso of avisos) console.warn(`AVISO: ${aviso}`);
for (const error of errores) console.error(`ERROR: ${error}`);
if (errores.length) process.exitCode = 1;
else console.log("OK: la estructura local del calendario coincide con las reglas comprobadas.");
