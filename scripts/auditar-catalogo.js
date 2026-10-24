#!/usr/bin/env node
"use strict";

// Auditoría estática del catálogo. No consulta YouTube ni valida la disponibilidad
// o correspondencia de los videos; solo revisa la estructura local del archivo.
const fs = require("node:fs");
const path = require("node:path");

const catalogPath = path.join(__dirname, "..", "catalogo-canciones.js");
const source = fs.readFileSync(catalogPath, "utf8");
const match = source.match(/^\s*const\s+CATALOGO_CANCIONES\s*=\s*([\s\S]*?)\s*;?\s*$/);

if (!match) {
  console.error("ERROR: no se pudo localizar la declaración CATALOGO_CANCIONES.");
  process.exit(2);
}

let catalog;
try {
  catalog = JSON.parse(match[1]);
} catch (error) {
  console.error("ERROR: el catálogo no es JSON válido:", error.message);
  process.exit(2);
}

const idMap = new Map();
const titleMap = new Map();
const invalidIds = [];
const missingIds = [];
let total = 0;

for (const [category, songs] of Object.entries(catalog)) {
  if (!Array.isArray(songs)) {
    console.error(`ERROR: la categoría "${category}" no contiene una lista.`);
    process.exitCode = 1;
    continue;
  }

  console.log(`${category}: ${songs.length} canciones`);
  for (const song of songs) {
    total++;
    const title = String(song.titulo || "").trim();
    const artist = String(song.artista || "").trim();
    const id = String(song.youtubeId || "").trim();
    const label = `${title || "(sin título)"} — ${artist || "(sin artista)"} [${category}]`;

    if (title) {
      const key = title.toLocaleLowerCase("es");
      if (!titleMap.has(key)) titleMap.set(key, []);
      titleMap.get(key).push(label);
    }

    if (!id) {
      missingIds.push(label);
      continue;
    }
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
      invalidIds.push(`${label}: "${id}"`);
    }
    if (!idMap.has(id)) idMap.set(id, []);
    idMap.get(id).push(label);
  }
}

const duplicateIds = [...idMap.entries()].filter(([, items]) => items.length > 1);
const duplicateTitles = [...titleMap.entries()].filter(([, items]) => items.length > 1);
const withId = total - missingIds.length;

console.log("\nResumen");
console.log("-------");
console.log(`Total: ${total}`);
console.log(`Con youtubeId: ${withId}`);
console.log(`IDs únicos: ${idMap.size}`);
console.log(`IDs con formato inválido: ${invalidIds.length}`);
console.log(`IDs duplicados: ${duplicateIds.length}`);
console.log(`Títulos duplicados: ${duplicateTitles.length}`);
console.log(`Sin youtubeId: ${missingIds.length}`);

function printGroup(title, groups) {
  if (!groups.length) return;
  console.log(`\n${title}`);
  for (const item of groups) {
    console.log(Array.isArray(item) ? `- ${item[0]}: ${item[1].join(" | ")}` : `- ${item}`);
  }
}

printGroup("IDs con formato inválido", invalidIds);
printGroup("IDs duplicados", duplicateIds);
printGroup("Títulos duplicados", duplicateTitles);
printGroup("Canciones sin youtubeId (pendientes, no necesariamente error)", missingIds);

if (invalidIds.length || duplicateIds.length || duplicateTitles.length) {
  process.exitCode = 1;
}
