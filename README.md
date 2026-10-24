# ALEJA — 365 días, una historia

Aplicación web en desarrollo para el calendario sorpresa de ALEJA.

## Funciones presentes

- Portada con identidad urbana en negro, blanco y azul cielo.
- Calendario visual de 365 puertas con formas geométricas variadas; cada botón muestra solo su número.
- Apertura de puerta con contenido disponible y palabra clave fuera del botón.
- Registro local de puertas visitadas mediante `localStorage`; persiste en el mismo navegador, pero no se sincroniza entre dispositivos.
- Reproductor musical integrado con la API oficial de YouTube. La reproducción depende de una acción del usuario, la disponibilidad del video y las restricciones del navegador.
- **Lienzo de dibujo:** entrada táctil y ratón, paleta de colores, tamaño de pincel, borrador, deshacer, limpiar, guardar en el navegador y exportar PNG.
- **Minijuego musical:** preguntas de selección múltiple, retroalimentación inmediata, puntuación y reinicio. No reproduce audio ni necesita permisos.
- Preparación PWA mediante `manifest.webmanifest`, `icon.svg` y `service-worker.js`.
- Diseño adaptable a móvil y escritorio, con animaciones y respeto por `prefers-reduced-motion`.

## Auditoría local del catálogo

Con Node.js instalado, ejecuta desde la raíz del repositorio:

```bash
node scripts/auditar-catalogo.js
```

El script informa las cantidades por categoría, IDs con formato inválido o duplicados, títulos duplicados y canciones sin ID. Devuelve un código de error para IDs inválidos o duplicados de ID/título. Las canciones sin ID se muestran como pendientes, porque no se deben rellenar con identificadores adivinados.

**Límite:** es una auditoría estática local. No comprueba que los videos existan, sean insertables o correspondan a la canción. Para esa validación hace falta consultar fuentes de YouTube y revisar los resultados individualmente.

## Archivos principales

- `index.html`: interfaz, estilos, calendario, lienzo y minijuego.
- `contenido-calendario.js`: contenido personalizado disponible para los días documentados.
- `catalogo-canciones.js`: catálogo musical por categoría (`amor`, `filosofica` y `ambiente`). La antigua categoría `hot` se integró en `amor`; sus canciones e IDs de YouTube se conservaron.
- `reproductor.js`: integración del reproductor.
- `manifest.webmanifest`: metadatos para instalación como aplicación.
- `service-worker.js`: caché básica del shell de la aplicación.
- `icon.svg`: icono vectorial.
- `AUDITORIA-CATALOGO.md`: revisión estructural del catálogo musical.

## Límites y pruebas pendientes

La auditoría del catálogo comprueba estructura, duplicados y formato de los identificadores; no demuestra que cada video siga disponible ni que coincida con la grabación correcta. Se detectaron cinco canciones sin `youtubeId`, detalladas en `AUDITORIA-CATALOGO.md`; no se les asignaron IDs inventados.

El dibujo guardado vive en el almacenamiento local del navegador. No es una copia en la nube ni se sincroniza entre dispositivos; conviene exportar un PNG si se quiere conservar una copia fuera del navegador.

El minijuego usa preguntas basadas en metadatos del catálogo; no evalúa reconocimiento de audio. La PWA, el lienzo y el juego deben probarse en navegadores reales: instalación en iPhone y escritorio, uso sin conexión, actualización de caché, accesibilidad, dibujo táctil y reproducción/pausa/siguiente canción de YouTube. No se afirma que esas pruebas estén aprobadas.

## Repositorios de referencia

- [mismatachos](https://github.com/anhjs01/mismatachos)
- [protectovl](https://github.com/anhjs01/protectovl)

Estos repositorios se consultan como fuentes; no se modifican desde este proyecto.
