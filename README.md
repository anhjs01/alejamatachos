# ALEJA — 365 días, una historia

Primera base visual del proyecto web de ALEJA.

## Estado de esta entrega

- Portada con identidad urbana en negro, blanco y azul cielo.
- Fotografía de Aleja referenciada desde el repositorio original `mismatachos` (sin copiar ni modificar ese repositorio).
- Calendario visual de 365 puertas con formas geométricas variadas; cada puerta muestra únicamente el número.
- Apertura de puerta con panel de contenido y palabra clave fuera de la puerta.
- Contador de puertas visitadas durante la sesión.
- Diseño adaptable a móvil y escritorio.
- Animaciones con soporte para `prefers-reduced-motion`.

## Importante

Esta es la base visual inicial, no la implementación final. El contenido de las puertas aún es de demostración; las visitas no se guardan entre sesiones; el reproductor musical, el lienzo y los minijuegos todavía no están integrados. Los siguientes pasos son auditar e integrar con cuidado el catálogo y el contenido original desde los repositorios de referencia, y después probar funcionamiento y accesibilidad.

## Fuentes de referencia

- [mismatachos](https://github.com/anhjs01/mismatachos)
- [protectovl](https://github.com/anhjs01/protectovl)

Estos repositorios se consultan como fuentes y no se modifican en esta implementación.


## Reproductor musical — primera integración

- Se incorporó `reproductor.js` desde el proyecto fuente y se enlazó con el catálogo local.
- Cada puerta con un `youtubeId` incluye un botón para solicitar la canción asignada a ese día.
- La barra del reproductor aparece cuando el reproductor tiene una canción activa.
- La reproducción con sonido depende de una acción explícita del usuario y de las restricciones del navegador/YouTube.
- Las puertas sin una canción asignada muestran que la canción aún no está disponible; no se selecciona una canción aleatoria como sustituto.

Pendiente de prueba en navegador real: confirmar carga de la API de YouTube, reproducción, pausa, siguiente canción, fallos de red, controles móviles y persistencia al cambiar de dispositivo. La persistencia de puertas usa almacenamiento local del navegador; no sincroniza entre dispositivos.
