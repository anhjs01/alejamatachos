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

  ,
  {
    dia: 8, categoria: "CAZADORES DE DETALLES",
    youtubeId: "Kp7eSUU9oy8", cancionTitulo: "Redbone", cancionArtista: "Childish Gambino",
    inspiracionCancion: "Un ritmo envolvente para mirar lo cotidiano con otros ojos.",
    palabraNueva: { palabra: "Encuadre", significado: "La manera de elegir qué entra en una imagen y qué historia cuenta." },
    cartas: {
      buenosDias: { titulo: "Hoy mira como si todo fuera nuevo", contenido: "Buenos días. Hay detalles que uno pasa por alto por ir mirando el reloj. Hoy te propongo lo contrario: encontrar algo bonito en lo cotidiano, aunque sea una sombra curiosa, una fachada, una planta creciendo donde nadie la invitó o una nube con forma imposible." },
      mensajePrincipal: { titulo: "Safari fotográfico de bolsillo", contenido: "Durante una caminata o en los lugares que visiten hoy, cada uno debe tomar cinco fotos con estas consignas: algo que tenga un color llamativo; una textura interesante; una sombra; algo que parezca una cara; y un detalle que normalmente nadie fotografiaría. No fotografíen personas desconocidas de cerca ni lugares privados. Después intercambien las fotos y pongan título a las imágenes del otro como si fueran una exposición. Elijan una ganadora por creatividad, no por calidad de cámara." },
      palabraNueva: { titulo: "Encuadre", contenido: "La misma calle puede parecer tranquila, caótica o cinematográfica según desde dónde la mires. El encuadre es esa decisión: hoy cada foto debe contar algo sin necesitar explicación." },
      buenasNoches: { titulo: "Cinco pequeñas historias", contenido: "Antes de dormir, revisa las fotos y escoge la que más te guste. Quizá no sea la más bonita, sino la que te recuerde un momento inesperado. A veces prestar atención ya cambia el día." }
    }
  },
  {
    dia: 9, categoria: "NOCHE DE FANDOMS",
    youtubeId: "TGgcC5xg9YI", cancionTitulo: "See You Again (feat. Kali Uchis)", cancionArtista: "Tyler, The Creator; Kali Uchis",
    inspiracionCancion: "Una selección para una noche de imaginación, teorías y personajes memorables.",
    palabraNueva: { palabra: "Canon", significado: "Lo que forma parte oficial de la historia de una obra o universo." },
    cartas: {
      buenosDias: { titulo: "Se abre el debate de los universos", contenido: "Buenos días. Hoy puedes defender una teoría con toda la seriedad del mundo, aunque sea sobre magia, maldiciones o personajes que claramente necesitan dormir ocho horas. Guarda esa opinión polémica: esta noche tiene tribunal de fandom." },
      mensajePrincipal: { titulo: "Tribunal: Harry Potter contra Jujutsu Kaisen", contenido: "Hagan seis rondas de debate y cambien quién defiende cada postura: 1) ¿qué universo sería más difícil para vivir? 2) ¿qué personaje sería mejor compañero de viaje? 3) ¿qué habilidad elegirías por 24 horas? 4) ¿quién resolvería mejor un misterio? 5) ¿qué personaje sería el peor compañero de apartamento? 6) inventen un crossover y expliquen cómo comenzaría el primer episodio. Cada respuesta tiene máximo un minuto. Den un punto por argumento convincente y otro por hacer reír al rival. No hace falta estar de acuerdo: se premia la imaginación." },
      palabraNueva: { titulo: "Canon", contenido: "En las historias, el canon es lo que oficialmente ocurrió. Las teorías de fans pueden ser brillantes, pero hoy tienen que anunciar cuándo están citando el canon y cuándo están inventando su propia versión." },
      buenasNoches: { titulo: "Que la imaginación no se apague", contenido: "Puede que hoy no hayan resuelto cuál universo gana, pero seguro apareció una teoría que merece una segunda conversación. Descansa; hasta los hechiceros y los hechiceros jujutsu necesitan recuperar energía." }
    }
  },
  {
    dia: 10, categoria: "UN CAFÉ Y PREGUNTAS SIN PRISA",
    youtubeId: "Ju8Hr50Ckwk", cancionTitulo: "If I Ain't Got You", cancionArtista: "Alicia Keys",
    inspiracionCancion: "Una pausa cálida para escuchar con atención y conversar de verdad.",
    palabraNueva: { palabra: "Escucha activa", significado: "Prestar atención para comprender, no solamente para preparar una respuesta." },
    cartas: {
      buenosDias: { titulo: "Hoy el tiempo puede ir más despacio", contenido: "Buenos días. Ojalá tengas un momento para disfrutar un café tinto, sin azúcar y sin mirar el teléfono a cada rato. Hay conversaciones que merecen una mesa, una bebida y el tiempo suficiente para terminar una idea." },
      mensajePrincipal: { titulo: "Café de preguntas: una taza, tres rondas", contenido: "Preparen café o la bebida que prefieran. Escriban preguntas en papeles y mézclenlas. Ronda uno, recuerdos ligeros: ¿qué canción te devuelve a una época feliz? ¿qué comida te recuerda a casa? Ronda dos, curiosidades: ¿qué habilidad aprenderías si pudieras hacerlo en una semana? ¿qué lugar te gustaría conocer? Ronda tres, futuro cercano: ¿qué plan sencillo te gustaría hacer este mes? Cada persona puede pasar una pregunta sin explicar por qué. La regla principal es escuchar sin interrumpir ni convertir cada respuesta en un interrogatorio." },
      palabraNueva: { titulo: "Escucha activa", contenido: "Consiste en estar presente: dejar terminar la idea, preguntar con curiosidad y no asumir que ya sabes lo que la otra persona va a decir. Hoy la mejor respuesta puede ser una pregunta amable." },
      buenasNoches: { titulo: "Una conversación que abriga", contenido: "Ojalá alguna respuesta te haya sorprendido y alguna pregunta te haya dejado pensando. No todo tiene que resolverse esta noche. A veces una buena conversación simplemente deja una puerta abierta para seguir conociéndose." }
    }
  },
  {
    dia: 11, categoria: "EL RETO DEL ANUNCIO IMPOSIBLE",
    youtubeId: "GtUVQei3nX4", cancionTitulo: "Drop It Like It's Hot", cancionArtista: "Snoop Dogg; Pharrell Williams",
    inspiracionCancion: "Un pulso juguetón para activar la creatividad y el humor.",
    palabraNueva: { palabra: "Eslogan", significado: "Una frase breve que resume la personalidad de una idea o producto." },
    cartas: {
      buenosDias: { titulo: "Hoy todo puede convertirse en negocio", contenido: "Buenos días. Necesito que hoy prestes tu talento para una tarea importantísima: vender algo completamente absurdo como si fuera el invento del siglo. La creatividad no tiene que pedir permiso y el sentido del ridículo puede quedarse descansando." },
      mensajePrincipal: { titulo: "Agencia creativa por 20 minutos", contenido: "Cada uno elige tres objetos cotidianos que tengan cerca. Debe convertir uno en un producto revolucionario, ponerle nombre, inventar un eslogan y grabar un anuncio de máximo 30 segundos. El otro hace de cliente exigente y pregunta por el precio, la utilidad y por qué debería comprarlo. Luego intercambian papeles. Puntos: uno por nombre memorable, uno por eslogan, uno por argumento disparatado y uno por mantener la seriedad durante el anuncio. No se necesita publicar nada: el video puede quedarse como recuerdo privado o pueden hacerlo en vivo." },
      palabraNueva: { titulo: "Eslogan", contenido: "Una frase corta puede quedarse pegada en la cabeza. El desafío es crear una que explique el producto y que además dé risa. Si el otro la repite durante el día, misión cumplida." },
      buenasNoches: { titulo: "La empresa cierra por carcajadas", contenido: "Espero que hoy hayan descubierto un talento inesperado para la publicidad de objetos que nadie necesita. Guarden el mejor anuncio; quizá algún día merezca una secuela. Que descanses, directora creativa." }
    }
  },
  {
    dia: 12, categoria: "COREOGRAFÍA SIN VERGÜENZA",
    youtubeId: "yUZeZNxiD-M", cancionTitulo: "Get Low", cancionArtista: "Lil Jon & The East Side Boyz; Ying Yang Twins",
    inspiracionCancion: "Una dosis de energía para moverse, reírse y soltar la timidez.",
    palabraNueva: { palabra: "Improvisación", significado: "Crear en el momento usando lo que tienes a mano." },
    cartas: {
      buenosDias: { titulo: "Activa el cuerpo, no las excusas", contenido: "Buenos días. Hoy la energía se mide en ganas de jugar, no en saber bailar. Si te sale un paso increíble, celébralo; si te sale uno rarísimo, también. La pista de baile no exige experiencia." },
      mensajePrincipal: { titulo: "Duelo de pasos y coreografía compartida", contenido: "Elijan tres canciones con ritmos distintos: una urbana, una que ambos conozcan y una sorpresa. En la primera ronda, cada uno inventa un paso de cuatro tiempos y el otro debe copiarlo. En la segunda, cada persona enseña dos movimientos y los unen en una secuencia. En la tercera, bailen la coreografía completa y añadan un movimiento inventado en el último momento. Pueden grabarla solo si ambos quieren. Hagan pausas, adapten los movimientos a su comodidad y recuerden que el objetivo es reírse, no hacer una presentación profesional." },
      palabraNueva: { titulo: "Improvisación", contenido: "Es resolver con lo que aparece en el instante. Si olvidan un paso, inventen otro; si la canción cambia, que cambie también la coreografía." },
      buenasNoches: { titulo: "Aplausos para el talento inesperado", contenido: "Hoy no hay jurado ni calificación seria. Solo dos personas que se dieron permiso para hacer el ridículo un rato y disfrutarlo. Estira un poquito, toma agua y descansa." }
    }
  },
  {
    dia: 13, categoria: "UNA PÁGINA PROPIA",
    youtubeId: "MJCHeEQV454", cancionTitulo: "You Got Me", cancionArtista: "The Roots; Tariq Trotter; Erykah Badu; Eve",
    inspiracionCancion: "Una atmósfera para crear algo personal sin preocuparse por hacerlo perfecto.",
    palabraNueva: { palabra: "Moodboard", significado: "Un tablero de imágenes, palabras y colores que expresa una idea o una sensación." },
    cartas: {
      buenosDias: { titulo: "Hoy toca crear por gusto", contenido: "Buenos días. No todo lo que hacemos tiene que servir para algo o quedar perfecto. A veces crear es solamente jugar con colores, recortes, palabras y referencias hasta encontrar algo que se sienta propio." },
      mensajePrincipal: { titulo: "Diseñen una portada para un día inolvidable", contenido: "Cada uno crea un pequeño moodboard en papel o en una herramienta digital. Tema: cómo se vería la portada de una película inspirada en un día que les gustaría vivir. Incluyan un título, tres colores, una imagen o dibujo, una frase corta y el nombre ficticio de la película. Después presenten su diseño en un minuto. El otro debe adivinar qué sensación o historia quiso transmitir. Si prefieren, intercambien los tableros y cada uno añade un detalle sorpresa al diseño del otro. No se evalúa la habilidad artística: se valora la intención y la imaginación." },
      palabraNueva: { titulo: "Moodboard", contenido: "Es un mapa visual de una idea. Puede mezclar fotografías, texturas, colores y palabras. No tiene que explicar todo: debe transmitir una atmósfera." },
      buenasNoches: { titulo: "Una idea que ya tiene forma", contenido: "Guarda el diseño, aunque sea sencillo. Puede que dentro de un tiempo lo mires y recuerdes esta pequeña sesión creativa. Que descanses con la satisfacción de haber hecho algo solo porque te dieron ganas." }
    }
  },
  {
    dia: 14, categoria: "CINE CON REGLAS SECRETAS",
    youtubeId: "69RdQFDuYPI", cancionTitulo: "Is This Love", cancionArtista: "Bob Marley & The Wailers",
    inspiracionCancion: "Un cierre sereno para una noche de película y complicidad.",
    palabraNueva: { palabra: "Subtexto", significado: "Lo que una escena comunica sin decirlo directamente." },
    cartas: {
      buenosDias: { titulo: "Hoy la película la eligen entre dos", contenido: "Buenos días. Para esta noche queda pendiente una función especial. No hace falta buscar el estreno más famoso: a veces una película que ninguno ha visto o una serie que dejaron pausada termina siendo el mejor plan." },
      mensajePrincipal: { titulo: "Función con bingo cinematográfico", contenido: "Elijan una película o dos episodios de una serie que ambos acepten ver. Antes de empezar, cada uno escribe cinco situaciones que podrían aparecer: alguien dice una frase dramática, aparece un objeto importante, un personaje toma una decisión impulsiva, hay un giro inesperado o suena una canción memorable. Mezclen los papeles y saquen tres al azar: serán las casillas del bingo. Durante la función, marquen cuando ocurra cada situación. Al terminar, elijan la escena mejor construida y expliquen qué comunicó sin decirlo directamente. Si no coinciden en la película, cada uno propone una y eligen con moneda al aire." },
      palabraNueva: { titulo: "Subtexto", contenido: "Es lo que una mirada, una pausa o un gesto deja entender aunque el personaje no lo diga. En una buena historia, a veces lo más importante ocurre entre líneas." },
      buenasNoches: { titulo: "Créditos y una última opinión", contenido: "Que la noche termine con una escena favorita, una teoría sobre el final o una discusión amistosa sobre el personaje más interesante. Gracias por regalarle un espacio al descanso y a las historias. Buenas noches." }
    }
  }
];
