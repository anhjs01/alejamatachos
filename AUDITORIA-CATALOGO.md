# Auditoría estructural del catálogo musical

**Archivo revisado:** `catalogo-canciones.js`  
**Alcance:** validación estática de la estructura del catálogo. Esta revisión no consulta YouTube y no certifica la disponibilidad o correspondencia de los videos.

## Resumen

- Canciones registradas: **360**.
- Canciones con `youtubeId`: **355**.
- Identificadores presentes únicos: **355**.
- Identificadores presentes con formato de 11 caracteres admitido por YouTube: **355**.
- Identificadores duplicados: **0**.
- Títulos duplicados exactos (ignorando mayúsculas/minúsculas): **0**.
- Canciones sin `youtubeId`: **5**.

## Distribución por categoría

| Categoría | Registros |
|---|---:|
| `amor` | 46 |
| `filosofica` | 210 |
| `hot` | 58 |
| `ambiente` | 46 |
| **Total** | **360** |

## Canciones pendientes de verificación

Las siguientes entradas no tienen el campo `youtubeId`:

| Categoría | Título | Artista |
|---|---|---|
| `filosofica` | Never Say Never (Interlude) | Shyheim |
| `filosofica` | Here I Am | Shyheim |
| `filosofica` | Napsack | Shyheim |
| `filosofica` | 4 The Headpiece (Interlude) | Shyheim |
| `filosofica` | Shouts On The Outs (Interlude) | Shyheim |

No se completaron estos campos con IDs adivinados. Deben verificarse contra una fuente fiable y la grabación exacta antes de incorporarlos.

## Qué significa y qué no significa esta revisión

La revisión confirma la consistencia básica de los datos presentes en el archivo. Un ID con formato válido puede apuntar a un video eliminado, privado, bloqueado por región o a una versión distinta de la canción esperada. Por tanto, queda pendiente una comprobación canción por canción de la correspondencia título/artista/video, así como pruebas de reproducción en un navegador real.
