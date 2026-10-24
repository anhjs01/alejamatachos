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

## Verificación externa de las cinco entradas pendientes

Se contrastaron los títulos y el artista con el listado del álbum *Shyheim a/k/a The Rugged Child* (1994). AllMusic incluye las cinco pistas en su listado del álbum y MusicBrainz también registra el lanzamiento y sus pistas. Esto confirma que las entradas pertenecen al repertorio publicado, pero **no confirma qué video de YouTube corresponde a cada grabación**.

Fuentes consultadas:
- [AllMusic — Shyheim a/k/a the Rugged Child](https://www.allmusic.com/album/shyheim-a-k-a-the-rugged-child-mw0000109753)
- [MusicBrainz — lanzamiento A.K.A. The Rugged Child](https://musicbrainz.org/release/7c84a7d6-0329-449a-84c1-841d6c812fb1)

| Entrada del catálogo | Resultado de la comprobación |
|---|---|
| Never Say Never (Interlude) | Figura en el álbum; falta verificar un video exacto |
| Here I Am | Figura en el álbum; falta verificar un video exacto |
| Napsack | Figura en el álbum; falta verificar un video exacto |
| 4 The Headpiece (Interlude) | Figura en el álbum; falta verificar un video exacto |
| Shouts On The Outs (Interlude) | Figura en el álbum; falta verificar un video exacto |

No se añadieron identificadores de YouTube porque las búsquedas realizadas no proporcionaron enlaces de video verificables para estas grabaciones concretas. Es preferible mantener el campo vacío antes que enlazar una versión equivocada.

## Qué significa y qué no significa esta revisión

La revisión confirma la consistencia básica de los datos presentes en el archivo. Un ID con formato válido puede apuntar a un video eliminado, privado, bloqueado por región o a una versión distinta de la canción esperada. Por tanto, queda pendiente una comprobación canción por canción de la correspondencia título/artista/video, así como pruebas de reproducción en un navegador real.
