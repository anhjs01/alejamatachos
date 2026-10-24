# ALEJA — 365 días, una historia

Aplicación web en desarrollo para el calendario sorpresa de ALEJA.

## Funciones presentes

- Portada con identidad urbana en negro, blanco y azul cielo.
- Calendario visual de 365 puertas con formas geométricas variadas; cada botón muestra solo su número.
- Apertura de puerta con contenido disponible y palabra clave fuera del botón.
- Registro local de puertas visitadas mediante `localStorage`; persiste en el mismo navegador, pero no se sincroniza entre dispositivos.
- Reproductor musical integrado con la API oficial de YouTube. La reproducción depende de una acción del usuario, de la disponibilidad del video y de las restricciones del navegador.
- **Lienzo de dibujo funcional:** entrada táctil y ratón, paleta de colores, tamaño de pincel, borrador, deshacer, limpiar, guardar en el navegador y exportar PNG.
- Preparación PWA mediante `manifest.webmanifest`, `icon.svg` y `service-worker.js`.
- Diseño adaptable a móvil y escritorio, con animaciones y respeto por `prefers-reduced-motion`.

## Archivos principales

- `index.html`: interfaz, estilos y lógica del calendario y del lienzo.
- `contenido-calendario.js`: contenido personalizado disponible para los días documentados.
- `catalogo-canciones.js`: catálogo musical por categoría.
- `reproductor.js`: integración del reproductor.
- `manifest.webmanifest`: metadatos para instalación como aplicación.
- `service-worker.js`: caché básica del shell de la aplicación.
- `icon.svg`: icono vectorial.
- `AUDITORIA-CATALOGO.md`: revisión estructural del catálogo musical.

## Límites y pruebas pendientes

La auditoría del catálogo comprueba estructura, duplicados y formato de los identificadores; no demuestra que cada video siga disponible ni que coincida con la grabación correcta. Se detectaron cinco canciones sin `youtubeId`, detalladas en `AUDITORIA-CATALOGO.md`; no se les asignaron IDs inventados.

El dibujo guardado vive en el almacenamiento local del navegador. No es una copia en la nube ni se sincroniza entre dispositivos; conviene exportar un PNG si se quiere conservar una copia fuera del navegador.

La PWA y el lienzo deben probarse en navegadores reales: instalación en iPhone y escritorio, uso sin conexión, actualización de caché, accesibilidad, dibujo táctil, memoria disponible y reproducción/pausa/siguiente canción de YouTube. No se afirma que estas pruebas estén aprobadas.

## Repositorios de referencia

- [mismatachos](https://github.com/anhjs01/mismatachos)
- [protectovl](https://github.com/anhjs01/protectovl)

Estos repositorios se consultan como fuentes; no se modifican desde este proyecto.
