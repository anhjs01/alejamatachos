/* ALEJA® · Calendario editorial
 * Primer bloque reconstruido con cuatro cartas completas por jornada.
 * Mantener los IDs musicales existentes; no generar canciones ficticias.
 */
const CALENDARIO = [
  {
    dia: 1, categoria: "UN COMIENZO CON SONRISA",
    youtubeId: "Jv17JsayCSI", cancionTitulo: "Moment Of Your Life (feat. Coco Jones)", cancionArtista: "Brent Faiyaz; Coco Jones",
    inspiracionCancion: "Una invitación a disfrutar el momento sin tener que convertirlo todo en una promesa.",
    palabraNueva: { palabra: "Complicidad", significado: "Esa forma de entenderse con una mirada, una broma o un silencio cómodo." },
    cartas: {
      buenosDias: { titulo: "Hoy no hace falta correr", contenido: "Buenos días. Ojalá hoy te encuentre con esa energía tuya que convierte cualquier conversación en una anécdota. Tómate tu café tinto sin azúcar si se te antoja, ponte una canción que te suba el ánimo y guarda un poquito de tiempo para algo que te haga reír. No hay misión complicada para empezar: solamente regalarte un buen comienzo." },
      mensajePrincipal: { titulo: "La misión: fabricar una buena anécdota", contenido: "Hoy cada uno propone una actividad pequeña que normalmente dejaría para después. Puede ser preparar algo rico, salir a caminar por un sitio nuevo o inventar un reto absurdo en casa. El otro elige cuál se hace. La regla es sencilla: no buscar que salga perfecto; buscar que al final tengan una historia que contar. Si el plan cambia sobre la marcha, mejor: la improvisación también cuenta." },
      palabraNueva: { titulo: "Complicidad", contenido: "No es solamente estar de acuerdo. Es poder bromear, improvisar y sentirse en el mismo equipo incluso cuando cada uno propone una locura distinta. Hoy la palabra se demuestra haciendo algo juntos." },
      buenasNoches: { titulo: "Que te quede una sonrisa", contenido: "Se acaba el día, pero ojalá no se acabe tan rápido esa sensación bonita de haber hecho algo distinto. Si hoy hubo una risa inesperada, una canción repetida o un momento tranquilo, ya hay algo que vale la pena guardar. Descansa; mañana puede traer otra historia." }
    }
  },
  {
    dia: 2, categoria: "EL CAMPEONATO IMPROVISADO",
    youtubeId: "WDaNJW_jEBo", cancionTitulo: "I Know What You Want (feat. Flipmode Squad)", cancionArtista: "Busta Rhymes; Mariah Carey; Flipmode Squad",
    inspiracionCancion: "Energía urbana para una jornada competitiva y juguetona.",
    palabraNueva: { palabra: "Revancha", significado: "Una segunda oportunidad para cambiar el resultado… o para reírse del primero." },
    cartas: {
      buenosDias: { titulo: "Se solicita rival de alto nivel", contenido: "Buenos días. Hoy queda oficialmente abierta una competencia amistosa. Se acepta talento, estrategia, suerte y, sobre todo, saber perder con dignidad. Que no te falte música con ritmo ni motivos para reírte de cualquier resultado." },
      mensajePrincipal: { titulo: "Operación: campeonato de consola", contenido: "Elijan entre los videojuegos que ya tengan disponibles y que permitan jugar de a dos. No hay un título obligatorio: pueden mezclar carreras, deportes, peleas, plataformas o cooperación. Cada uno propone una categoría y el otro escoge el juego dentro de esa categoría. Jueguen una ronda por título; sumen un punto por victoria y dos si completan un reto especial que inventen antes de empezar. Si no hay modo competitivo, conviertan la ronda en una misión cooperativa con objetivo y tiempo límite. Al final, quien pierda elige una penitencia amable: preparar la siguiente bebida, escoger la película o hacer una imitación. Nada que incomode al otro." },
      palabraNueva: { titulo: "Revancha", contenido: "La revancha no es discutir por quién ganó: es tener una excusa para volver a jugar. Cambien de género en la siguiente ronda para que nadie se adueñe del campeonato." },
      buenasNoches: { titulo: "Marcador cerrado, risas abiertas", contenido: "No importa quién quedó arriba en la tabla. Lo importante es que el marcador no mida las carcajadas, porque ahí seguramente hubo empate. Descansa, campeona; la próxima jornada puede traer una revancha con reglas todavía más extrañas." }
    }
  },
  {
    dia: 3, categoria: "UN ANTOJO CON CONTRASTE",
    youtubeId: "YpQ_RO5zbvE", cancionTitulo: "Teenage Fantasy", cancionArtista: "Jorja Smith",
    inspiracionCancion: "Un ambiente suave para disfrutar los detalles y probar algo nuevo.",
    palabraNueva: { palabra: "Contraste", significado: "La gracia de combinar sabores distintos que se hacen mejores juntos." },
    cartas: {
      buenosDias: { titulo: "Hoy se vale tener antojos", contenido: "Buenos días. Que el día tenga algo dulce, algo rico y un momento para disfrutar sin afán. Si aparece el antojo de helado de mora, no lo ignores: hoy puede convertirse en el comienzo de un pequeño experimento." },
      mensajePrincipal: { titulo: "Laboratorio de mora y chocolate", contenido: "Consigan helado de mora y chocolate amargo. Sirvan porciones pequeñas y prueben tres versiones: helado solo; helado con virutas de chocolate; y helado con chocolate ligeramente fundido por encima. Si quieren, añadan unas moras frescas o un toque de ralladura de naranja. Puntúen textura, dulzor y equilibrio del 1 al 5. Elijan un nombre para la combinación ganadora y guarden la receta. Revisen etiquetas y posibles trazas: esta propuesta debe ser completamente libre de maní y de contaminación cruzada." },
      palabraNueva: { titulo: "Contraste", contenido: "La mora aporta acidez y frescura; el chocolate amargo, profundidad. La idea no es tapar un sabor con otro, sino descubrir qué pasa cuando los dos tienen su espacio." },
      buenasNoches: { titulo: "El sabor que se queda", contenido: "Hay días que se recuerdan por una conversación y otros por un sabor inesperado. Ojalá hoy hayan encontrado una combinación digna de repetirse. Que descanses con algo dulce en la memoria y sin ninguna prisa por mañana." }
    }
  },
  {
    dia: 4, categoria: "UNA NOCHE PARA DESCUBRIR",
    youtubeId: "UlIgAGotomM", cancionTitulo: "Stuck On You", cancionArtista: "GIVĒON",
    inspiracionCancion: "Una atmósfera tranquila para conversar y descubrir preferencias.",
    palabraNueva: { palabra: "Matiz", significado: "Una diferencia pequeña que cambia la experiencia completa." },
    cartas: {
      buenosDias: { titulo: "Un día para afinar los sentidos", contenido: "Buenos días. Hoy la propuesta es bajar un poquito el ruido y prestar atención a los detalles: aromas, sabores, música y conversaciones que se alargan porque sí. Que el día te trate bonito." },
      mensajePrincipal: { titulo: "Cata a ciegas, cero solemnidad", contenido: "Preparen tres muestras pequeñas de bebidas sin alcohol: por ejemplo, soda con frutos rojos, limonada con hierbabuena y té frío de frutas sin azúcar añadida. Si ambos son adultos y desean incluir alcohol, pueden sustituir una muestra por una porción pequeña de vino servida aparte; no mezclen alcohol con bebidas energéticas ni conduzcan después. Una persona organiza las muestras y la otra intenta reconocer ingredientes y aromas; luego cambian. Puntúen creatividad, aroma y sabor. La versión sin alcohol debe ser igual de protagonista." },
      palabraNueva: { titulo: "Matiz", contenido: "A veces una hoja de hierbabuena, una fruta o la temperatura cambia por completo una bebida. Hoy se trata de descubrir esos pequeños detalles, no de acertar todas las respuestas." },
      buenasNoches: { titulo: "Un brindis por lo sencillo", contenido: "Que la noche cierre despacio, con una conversación agradable y la tranquilidad de no tener que impresionar a nadie. Lo sencillo también puede sentirse especial cuando se comparte con ganas." }
    }
  },
  {
    dia: 5, categoria: "COCINAR EN EQUIPO",
    youtubeId: "9PBZy9j3H3I", cancionTitulo: "Love", cancionArtista: "Keyshia Cole",
    inspiracionCancion: "Una jornada de colaboración: repartir tareas y disfrutar el resultado.",
    palabraNueva: { palabra: "Sazón", significado: "El equilibrio de sabores que hace que una preparación tenga identidad." },
    cartas: {
      buenosDias: { titulo: "Hoy la cocina tiene dos directores", contenido: "Buenos días. Hoy no se busca una cocina perfecta ni una receta de concurso. Se busca trabajar en equipo, poner música y ver qué tan bien se entienden cuando uno corta, otro mezcla y ambos prueban." },
      mensajePrincipal: { titulo: "Pollo con salsa suave de vino", contenido: "Para dos: dos filetes de pechuga, media taza de champiñones, un cuarto de cebolla, un diente de ajo, media taza de caldo bajo en sodio, un cuarto de taza de vino blanco seco (o más caldo para una versión sin alcohol), una cucharadita de aceite, pimienta y tomillo. Doren el pollo por ambos lados y resérvenlo. Sofrían cebolla, ajo y champiñones; agreguen el vino y dejen reducir unos minutos. Añadan el caldo y tomillo, devuelvan el pollo y cocinen hasta que alcance 74 °C en el centro. Ajusten con pimienta y hierbas, sin añadir sal o usando una cantidad mínima si así lo prefieren. El vino no garantiza que desaparezca todo el alcohol durante la cocción; si desean evitarlo, usen caldo y un toque de limón. Acompañen con verduras o papas. Comprueben etiquetas y contaminación cruzada por la alergia al maní." },
      palabraNueva: { titulo: "Sazón", contenido: "No depende de llenar todo de sal. Las hierbas, el ajo, la pimienta, los cítricos y una buena cocción también construyen sabor. Hoy la receta se gana por equilibrio." },
      buenasNoches: { titulo: "La mejor parte fue prepararlo", contenido: "Ojalá la cena haya quedado rica, pero que también haya quedado esa satisfacción de haberla hecho entre los dos. Si algo salió distinto a lo esperado, ya tienen una anécdota y una mejora para la próxima." }
    }
  },
  {
    dia: 6, categoria: "BATALLA DE HIP-HOP",
    youtubeId: "2vdIWr1TCBI", cancionTitulo: "Antes de Morir (Scratches Dj Pho)", cancionArtista: "LosPetitFellas; Denise Gutiérrez; Dj Pho",
    inspiracionCancion: "Una referencia del catálogo para entrar en una jornada de música y cultura urbana.",
    palabraNueva: { palabra: "Flow", significado: "La manera propia de llevar el ritmo, la actitud y la expresión." },
    cartas: {
      buenosDias: { titulo: "Que hoy suene duro", contenido: "Buenos días. Hoy el despertador puede ser una canción con bajo marcado y ganas de moverse. Ponte cómoda, sube el ánimo y prepárate: hay una batalla musical en camino, pero aquí se viene a disfrutar, no a pelear." },
      mensajePrincipal: { titulo: "Tres rondas, dos DJs improvisados", contenido: "Cada uno elige tres canciones de hip-hop o de cualquier estilo urbano del catálogo musical. Ronda uno: la canción que mejor levanta el ánimo. Ronda dos: la que tiene el ritmo más contagioso. Ronda tres: una canción que el otro probablemente no conoce. Escuchen fragmentos y expliquen por qué la eligieron. Después creen juntos una mini playlist con las favoritas de ambos. Variante divertida: cada uno tiene 30 segundos para inventar un nombre de grupo y presentar su canción como si fuera el lanzamiento del año." },
      palabraNueva: { titulo: "Flow", contenido: "El flow no es copiar el estilo de alguien: es encontrar una manera propia de moverse, hablar y disfrutar el ritmo. Hoy cada selección musical tiene que llevar un poquito de la personalidad de quien la eligió." },
      buenasNoches: { titulo: "Que la última canción sea tuya", contenido: "Para cerrar, deja que cada uno elija una última canción sin explicar por qué. A veces la música dice lo que no hace falta poner en palabras. Que descanses y que mañana te encuentre con el mismo flow." }
    }
  },
  {
    dia: 7, categoria: "UNA SALIDA SIN ITINERARIO RÍGIDO",
    youtubeId: "fPgf2meEX1w", cancionTitulo: "My Boo", cancionArtista: "USHER; Alicia Keys",
    inspiracionCancion: "Un guiño musical para acompañar una salida ligera y espontánea.",
    palabraNueva: { palabra: "Deriva", significado: "Dejar que el recorrido tenga espacio para una sorpresa, sin perder el rumbo." },
    cartas: {
      buenosDias: { titulo: "Hoy el plan puede aparecer caminando", contenido: "Buenos días. Si el clima acompaña, hoy se vale salir sin llenar cada minuto de instrucciones. Una buena caminata, una parada por algo rico y una conversación divertida pueden ser suficiente para convertir un día común en un recuerdo." },
      mensajePrincipal: { titulo: "La ruta de tres paradas", contenido: "Elijan una zona agradable y armen una salida de una tarde: primera parada, caminar por un lugar que no visiten hace tiempo; segunda parada, escoger una bebida o un helado; tercera parada, encontrar un sitio tranquilo para escuchar tres canciones y conversar. Cada uno tiene derecho a proponer una desviación sorpresa, siempre que sea cómoda, segura y esté dentro del tiempo y presupuesto acordados. No hace falta viajar lejos ni convertirlo en un plan de varios días." },
      palabraNueva: { titulo: "Deriva", contenido: "Una ruta con espacio para cambiar de idea. La sorpresa no está en perderse, sino en permitirse descubrir un rincón distinto sin presionar el día." },
      buenasNoches: { titulo: "Volver con algo que contar", contenido: "Ojalá regreses con una foto bonita, una canción nueva o una anécdota que te haga sonreír al recordarla. No todos los planes necesitan ser enormes. A veces basta con salir, mirar alrededor y compartir el camino." }
    }
  }
];
