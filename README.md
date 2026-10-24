# ALEJA — 365 días, una historia

Aplicación web en desarrollo para el calendario sorpresa de ALEJA.

## Funciones presentes

- Portada con identidad urbana en negro, blanco y azul cielo.
- Calendario visual de 365 puertas con formas geométricas variadas; cada botón muestra solo su número.
- Apertura de puerta con contenido disponible y palabra clave fuera del botón.
- Registro local de puertas visitadas mediante `localStorage`; las visitas persisten en el mismo navegador, pero no se sincronizan entre dispositivos.
- Reproductor musical integrado con la API oficial de YouTube. La reproducción requiere una acción explícita del usuario y depende de la disponibilidad del video y las restricciones del navegador.
- Preparación PWA mediante `manifest.webmanifest`, `icon.svg` y `service-worker.js`.
- Diseño adaptable a móvil y escritorio, con animaciones y respeto por `prefers-reduced-motion`.

## Archivos principales

- `index.html`: interfaz, estilos y lógica del calendario.
- `contenido-calendario.js`: contenido personalizado disponible para los días documentados.
- `catalogo-canciones.js`: catálogo de canciones por categoría.
- `reproductor.js`: integración del reproductor.
- `manifest.webmanifest`: metadatos para instalación como aplicación.
- `service-worker.js`: caché básica para el shell de la aplicación.
- `icon.svg`: icono vectorial de la aplicación.
- `AUDITORIA-CATALOGO.md`: revisión estructural del catálogo musical.

## Límites y pruebas pendientes

La auditoría del catálogo comprueba estructura, duplicados y presencia/formato de identificadores; no demuestra por sí sola que cada video siga disponible ni que coincida con la grabación correcta. La auditoría detectó cinco canciones sin `youtubeId`; están listadas en `AUDITORIA-CATALOGO.md` y no se les asignaron identificadores inventados.

La PWA está preparada de forma inicial, pero todavía debe probarse en navegadores reales: instalación en iPhone y escritorio, funcionamiento sin conexión, actualización de caché, accesibilidad, y reproducción/pausa/siguiente canción con la API de YouTube. No se afirma que esas pruebas estén aprobadas.

## Repositorios de referencia

- [mismatachos](https://github.com/anhjs01/mismatachos)
- [protectovl](https://github.com/anhjs01/protectovl)

Estos repositorios se consultan como fuentes; no se modifican desde este proyecto.
