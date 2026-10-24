# Auditoría estructural del catálogo musical

**Archivo revisado:** `catalogo-canciones.js`  
**Revisión:** comprobación estática reproducible del contenido del archivo. No consulta YouTube ni certifica que los videos existan, sean públicos, se puedan insertar o correspondan a la grabación correcta.

## Resumen

- Canciones registradas: **360**.
- Canciones con `youtubeId`: **355**.
- Identificadores únicos presentes: **355**.
- Identificadores con formato de 11 caracteres: **355**.
- Identificadores con formato inválido: **0**.
- Identificadores duplicados: **0**.
- Títulos duplicados ignorando mayúsculas/minúsculas y espacios externos: **0**.
- Canciones sin `youtubeId`: **5**.

## Distribución por categoría

| Categoría | Registros |
|---|---:|
| `amor` | 104 |
| `filosofica` | 210 |
| `ambiente` | 46 |
| **Total** | **360** |

La antigua categoría `hot` se eliminó como clasificación y sus 58 canciones se incorporaron a `amor`. Se conservaron los objetos de cada canción, incluidos sus títulos, artistas e identificadores de YouTube; no se eliminaron canciones. Esta reorganización no cambia el total del catálogo.

## Canciones sin identificador

| Categoría | Título | Artista |
|---|---|---|
| `filosofica` | Never Say Never (Interlude) | Shyheim |
| `filosofica` | Here I Am | Shyheim |
| `filosofica` | Napsack | Shyheim |
| `filosofica` | 4 The Headpiece (Interlude) | Shyheim |
| `filosofica` | Shouts On The Outs (Interlude) | Shyheim |

No se completaron estos campos con IDs adivinados. Deben verificarse contra una fuente fiable y la grabación exacta antes de incorporarlos.

## IDs duplicados

No se detectaron IDs duplicados.

## Títulos duplicados

No se detectaron títulos duplicados tras normalizar mayúsculas/minúsculas y espacios externos.

## Qué significa y qué no significa esta revisión

La revisión confirma la consistencia estructural de los datos presentes. Un ID con formato válido puede apuntar a un video eliminado, privado, bloqueado por región o a una versión distinta de la canción esperada. La API oficial de YouTube documenta los recursos de video y campos como título, duración y restricciones regionales, pero comprobar esos datos de forma automatizada requiere acceso a la API o revisar los videos individualmente: [documentación oficial de videos](https://developers.google.com/youtube/data/reference/rest/v3/videos). La disponibilidad para reproducción insertada también puede variar.

Queda pendiente la verificación canción por canción de la correspondencia título/artista/video, así como pruebas de reproducción en un navegador real.
