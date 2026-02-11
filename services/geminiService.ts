import { GameStepData, FranciscoEmotion } from "../types";

/* 
  ==========================================================================================
  HISTORIA DE FRANCISCO (CUPIDO) - 10 RUTAS Y 10 FINALES
  ==========================================================================================
*/

const STORY_NODES: Record<string, GameStepData> = {
  // =========================================================================
  // ESCENA INICIAL (COMÚN A TODAS LAS RUTAS)
  // =========================================================================
  "START": {
    id: "START",
    narrative: "Una luz cálida ilumina la escena. Frente a ti aparece una figura con una presencia imponente pero juguetona. Sus ojos te evalúan con una mezcla de curiosidad y arrogancia.",
    dialogue: "Ah… así que tú eres Aranxita. Antes de que preguntes: sí, soy Cupido. El original. El guapo. El que no baila K-pop.",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "¿Y si te conquisto a mi manera?", nextStepId: "INTRO_CHOICE_1" },
      { text: "¿Celoso de Soobin?", nextStepId: "INTRO_CHOICE_2" },
      { text: "No necesito flechas para enamorarte.", nextStepId: "INTRO_CHOICE_3" },
      { text: "Mirarlo en silencio, con una sonrisa", nextStepId: "INTRO_CHOICE_4" }
    ]
  },

  "INTRO_CHOICE_1": {
    id: "INTRO_CHOICE_1",
    dialogue: "Y no, no trabajo con Soobin. De hecho… lo odio cordialmente.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "INTRO_AFTER_SARCASM" }]
  },
  "INTRO_CHOICE_2": {
    id: "INTRO_CHOICE_2",
    dialogue: "¿Celoso? JA. Déjame adivinar. ¿Otro humano hipnotizado por un idol que no sabe que existes?",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_2_S2" }]
  },
  "INTRO_CHOICE_3": {
    id: "INTRO_CHOICE_3",
    dialogue: "¿A tu manera? Eso suena peligrosamente interesante… o peligrosamente decepcionante.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_3_S2" }]
  },
  "INTRO_CHOICE_4": {
    id: "INTRO_CHOICE_4",
    dialogue: "…Tú no parpadeas. Normalmente, aquí ya estarías hablando. ¿No vas a decir nada?",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_4_S2" }]
  },

  "INTRO_AFTER_SARCASM": {
    id: "INTRO_AFTER_SARCASM",
    dialogue: "Regla importante: yo no persigo. Si quieres mi corazón… tendrás que ganártelo.",
    emotion: FranciscoEmotion.ORGULLOSO,
    isEnding: false,
    choices: [{ text: "Desafiarlo", nextStepId: "ROUTE_1_S2" }]
  },

  // =========================================================================
  // RUTA 1: "Dos corazones, cero flechas"
  // =========================================================================
  "ROUTE_1_S2": {
    id: "ROUTE_1_S2",
    dialogue: "¿A tu manera? Eso suena peligrosamente interesante… o peligrosamente decepcionante. Te escucho. Pero te advierto algo, Aranxita… He visto de todo. Promesas vacías, palabras bonitas… incluso gente que cree que Soobin es el hombre perfecto.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [
      { text: "No quiero impresionarte, quiero conocerte", nextStepId: "ROUTE_1_S3" },
      { text: "No necesito competir con nadie", nextStepId: "ROUTE_1_S3" },
      { text: "No vine por una flecha, vine por ti", nextStepId: "ROUTE_1_S3" }
    ]
  },
  "ROUTE_1_S3": {
    id: "ROUTE_1_S3",
    dialogue: "…Eso no era lo que esperaba. Normalmente la gente intenta quedar bien. Tú acabas de ignorar todo mi ego en menos de diez segundos. Eso tiene mérito. Dime algo entonces, Aranxita. ¿Por qué yo?",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [
      { text: "Porque no necesito a alguien perfecto", nextStepId: "ROUTE_1_S4" },
      { text: "Porque me haces reír", nextStepId: "ROUTE_1_S4" },
      { text: "Porque debajo del sarcasmo hay algo real", nextStepId: "ROUTE_1_S4" }
    ]
  },
  "ROUTE_1_S4": {
    id: "ROUTE_1_S4",
    dialogue: "Oye… No ataques tan directo. Se supone que yo hago que la gente se ponga nerviosa. Esto no estaba en el manual de Cupido. Aunque… admito que no es desagradable. Sigue hablando.",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_1_S5" }]
  },
  "ROUTE_1_S5": {
    id: "ROUTE_1_S5",
    dialogue: "Solo para dejar algo claro… no soy un reemplazo de ningún idol. Especialmente de Soobin. Ese tipo tiene demasiada gente enamorada sin mover un dedo. Yo al menos doy la cara.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [
      { text: "No te comparo con nadie", nextStepId: "ROUTE_1_S6" },
      { text: "No estoy buscando un ídolo", nextStepId: "ROUTE_1_S6" },
      { text: "Me gustas tú, no una fantasía", nextStepId: "ROUTE_1_S6" }
    ]
  },
  "ROUTE_1_S6": {
    id: "ROUTE_1_S6",
    dialogue: "Wow. Eso fue… sorprendentemente honesto. Y peligrosamente efectivo. Aranxita… me estás desarmando.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_1_S7" }]
  },
  "ROUTE_1_S7": {
    id: "ROUTE_1_S7",
    dialogue: "Sabes qué es lo peor de todo esto… Que no usaste trucos. Ni flechas. Ni promesas exageradas. Solo fuiste tú. Y eso… funcionó.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [
      { text: "Acercarte un poco más", nextStepId: "ROUTE_1_ENDING" },
      { text: "Entonces… ¿te conquisté?", nextStepId: "ROUTE_1_ENDING" }
    ]
  },
  "ROUTE_1_ENDING": {
    id: "ROUTE_1_ENDING",
    endingTitle: "Final 1: Dos corazones, cero flechas 💘",
    dialogue: "Sí. Oficialmente. Cupido… enamorado. Supongo que esta vez… no voy a lanzar ninguna flecha. Porque ya elegí.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 2: "Celos de Cupido"
  // =========================================================================
  "ROUTE_2_S2": {
    id: "ROUTE_2_S2",
    dialogue: "Yo no compito con fantasías. Aunque… curiosa pregunta.",
    emotion: FranciscoEmotion.ORGULLOSO,
    isEnding: false,
    choices: [
      { text: "Solo quería ver tu reacción", nextStepId: "ROUTE_2_S3" },
      { text: "Te molestó más de lo que crees", nextStepId: "ROUTE_2_S3" },
      { text: "No estoy hablando de él, estoy hablando de ti", nextStepId: "ROUTE_2_S3" }
    ]
  },
  "ROUTE_2_S3": {
    id: "ROUTE_2_S3",
    dialogue: "Espera… ¿cómo que de mí? Normalmente la gente me esquiva cuando me pongo así. Tú no retrocediste. Eso es… interesante.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [
      { text: "Porque no me intimidas", nextStepId: "ROUTE_2_S4" },
      { text: "Porque detrás del enojo hay algo más", nextStepId: "ROUTE_2_S4" },
      { text: "Porque te importa, aunque no lo admitas", nextStepId: "ROUTE_2_S4" }
    ]
  },
  "ROUTE_2_S4": {
    id: "ROUTE_2_S4",
    dialogue: "Wow, ya me psicoanalizaste. No me importa lo suficiente como para estar celoso. Yo soy Cupido. La gente se enamora por mí, no al revés. No confundas carácter con debilidad.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_2_S5" }]
  },
  "ROUTE_2_S5": {
    id: "ROUTE_2_S5",
    narrative: "Aranxita: — Entonces dime algo. ¿Por qué te molestó tanto el nombre?",
    dialogue: "… No me molestó. Bueno… tal vez un poco. Está bien. Mucho.",
    emotion: FranciscoEmotion.TIMIDEZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_2_S6" }]
  },
  "ROUTE_2_S6": {
    id: "ROUTE_2_S6",
    dialogue: "Porque estoy cansado de que la gente idealice sombras. Yo soy real. Con defectos. Con carácter. Con errores. Y no necesito competir para valer algo. …¿o sí?",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [
      { text: "No tienes que competir conmigo", nextStepId: "ROUTE_2_S7" },
      { text: "Yo no te comparo", nextStepId: "ROUTE_2_S7" },
      { text: "Eso es exactamente lo que me gusta de ti", nextStepId: "ROUTE_2_S7" }
    ]
  },
  "ROUTE_2_S7": {
    id: "ROUTE_2_S7",
    dialogue: "Oye… eso fue bajo el cinturón. En el buen sentido. Me estás quitando el piso y ni siquiera lo intentas. Odio admitirlo.",
    emotion: FranciscoEmotion.TIMIDEZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_2_S8" }]
  },
  "ROUTE_2_S8": {
    id: "ROUTE_2_S8",
    dialogue: "Tal vez sí. Me puse celoso. No de él. Sino de perder tu atención. Y eso… no me pasa seguido. Entonces dime, Aranxita… ¿Te quedarías con un Cupido orgulloso, celoso y un poco insoportable?",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [
      { text: "Sí, porque eres real", nextStepId: "ROUTE_2_ENDING" },
      { text: "Tomarle la mano", nextStepId: "ROUTE_2_ENDING" }
    ]
  },
  "ROUTE_2_ENDING": {
    id: "ROUTE_2_ENDING",
    endingTitle: "Final 2: Celos de Cupido 💥💘",
    dialogue: "Bien. Supongo que… ganaste. Pero no se lo digas a Soobin. No le des ese gusto.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 3: "Sin flechas, sin permiso"
  // =========================================================================
  "ROUTE_3_S2": {
    id: "ROUTE_3_S2",
    dialogue: "La mayoría tartamudea antes de decir algo así. Tú no.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [
      { text: "No me gusta perder tiempo", nextStepId: "ROUTE_3_S3" },
      { text: "Dijiste que no persigues, yo tampoco", nextStepId: "ROUTE_3_S3" },
      { text: "Solo soy honesta", nextStepId: "ROUTE_3_S3" }
    ]
  },
  "ROUTE_3_S3": {
    id: "ROUTE_3_S3",
    dialogue: "Vaya, vaya… Aranxita no viene a jugar, viene a ganar. ¿Y si te digo que no me interesas? ¿Qué harías?",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [
      { text: "Seguiría igual", nextStepId: "ROUTE_3_S4" },
      { text: "Te dejaría decidir", nextStepId: "ROUTE_3_S4" },
      { text: "Sonreiría… como ahora", nextStepId: "ROUTE_3_S4" }
    ]
  },
  "ROUTE_3_S4": {
    id: "ROUTE_3_S4",
    dialogue: "Normalmente esa pregunta incomoda. Pero tú… no cambiaste el gesto. Eso debería preocuparme. Y me encanta.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_3_S5" }]
  },
  "ROUTE_3_S5": {
    id: "ROUTE_3_S5",
    dialogue: "Solo para dejarlo claro… No soy plan B de ningún idol. Soobin tiene demasiada gente suspirando sin saber ni sus nombres. Yo sí miro de frente.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [
      { text: "No estoy buscando un ídolo", nextStepId: "ROUTE_3_S6" },
      { text: "No me gustan las fantasías", nextStepId: "ROUTE_3_S6" },
      { text: "Me gusta lo que tengo enfrente", nextStepId: "ROUTE_3_S6" }
    ]
  },
  "ROUTE_3_S6": {
    id: "ROUTE_3_S6",
    dialogue: "… Eso fue bajo. En serio. Estás jugando sucio… y me gusta.",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_3_S7" }]
  },
  "ROUTE_3_S7": {
    id: "ROUTE_3_S7",
    dialogue: "No suelo perder el control. Se supone que yo hago esto. Pero contigo… se siente distinto. Última oportunidad para retirarte. Si sigues… no pienso fingir que no me importas.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [
      { text: "No pienso irme", nextStepId: "ROUTE_3_ENDING" },
      { text: "Acercarte un poco más", nextStepId: "ROUTE_3_ENDING" }
    ]
  },
  "ROUTE_3_ENDING": {
    id: "ROUTE_3_ENDING",
    endingTitle: "Final 3: Sin flechas, sin permiso 😏💘",
    dialogue: "Está bien. Ganaste. Sin flechas. Sin permisos. A lo tuyo. Supongo que… me conquistaste siendo tú. Y eso es peligrosamente efectivo.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 4: "Lo que no se dice"
  // =========================================================================
  "ROUTE_4_S2": {
    id: "ROUTE_4_S2",
    dialogue: "…Esto es nuevo. Normalmente me interrumpen. Tú no. Y eso… me tiene pensando.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_4_S3" }]
  },
  "ROUTE_4_S3": {
    id: "ROUTE_4_S3",
    dialogue: "¿Sabes qué pasa cuando nadie habla? Que uno empieza a decir verdades. Yo debería estar trabajando ahora. Pero no quiero que te vayas.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_4_S4" }]
  },
  "ROUTE_4_S4": {
    id: "ROUTE_4_S4",
    dialogue: "Deja de mirarme así. No… mejor no. Se supone que yo hago que la gente se ponga nerviosa. Qué ironía.",
    emotion: FranciscoEmotion.TIMIDEZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_4_S5" }]
  },
  "ROUTE_4_S5": {
    id: "ROUTE_4_S5",
    dialogue: "Déjame adivinar… ¿También eres fan de Soobin? Porque si es así, avísame ahora. No compito con fantasías.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [
      { text: "Negar con la cabeza", nextStepId: "ROUTE_4_S6" },
      { text: "No estoy pensando en nadie más", nextStepId: "ROUTE_4_S6" },
      { text: "Sonreír apenas", nextStepId: "ROUTE_4_S6" }
    ]
  },
  "ROUTE_4_S6": {
    id: "ROUTE_4_S6",
    dialogue: "… Eso fue respuesta suficiente. No dijiste nada… y aun así entendí todo. Eso es peligroso.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_4_S7" }]
  },
  "ROUTE_4_S7": {
    id: "ROUTE_4_S7",
    dialogue: "Me paso la vida escuchando declaraciones forzadas. Gente que dice sentir sin sentir. Tú no dijiste nada. Y aun así… te sentí. Si me quedo aquí… ¿te quedarías también?",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [
      { text: "Asentir lentamente", nextStepId: "ROUTE_4_ENDING" },
      { text: "Acercarte un poco más", nextStepId: "ROUTE_4_ENDING" }
    ]
  },
  "ROUTE_4_ENDING": {
    id: "ROUTE_4_ENDING",
    endingTitle: "Final 4: Lo que no se dice 🌙💘",
    dialogue: "Está bien. Me ganaste sin decir una sola palabra. Eso no le pasa a Cupido. Pero contigo… sí. Supongo que hay silencios… que dicen exactamente lo que necesito oír.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 5: "Casi" (Final Malo)
  // =========================================================================
  "ROUTE_5_START": {
    id: "ROUTE_5_START",
    narrative: "La luz de la escena se atenúa levemente. Hay algo diferente en el ambiente.",
    dialogue: "Aranxita. Soy Cupido. El que convierte 'tal vez' en 'para siempre'. O al menos… eso intento. Tú dirás. ¿Qué buscas aquí?",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "No lo sé", nextStepId: "ROUTE_5_S2" },
      { text: "Solo quería verte", nextStepId: "ROUTE_5_S2" },
      { text: "Pensé que sería distinto", nextStepId: "ROUTE_5_S2" },
      { text: "Dudar en responder", nextStepId: "ROUTE_5_S2" }
    ]
  },
  "ROUTE_5_S2": {
    id: "ROUTE_5_S2",
    dialogue: "… Esa pausa lo dijo todo. Normalmente la gente viene con respuestas. Tú vienes con dudas.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_5_S3" }]
  },
  "ROUTE_5_S3": {
    id: "ROUTE_5_S3",
    dialogue: "No tienes que saberlo todo ahora. A veces el camino se aclara andando. Podríamos… intentarlo.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [{ text: "¿Y si no soy suficiente?", nextStepId: "ROUTE_5_S4" }]
  },
  "ROUTE_5_S4": {
    id: "ROUTE_5_S4",
    dialogue: "… No digas eso. Nadie que llega hasta aquí es poco. Pero tienes que creerlo tú.",
    emotion: FranciscoEmotion.DECEPCIONADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_5_S5" }]
  },
  "ROUTE_5_S5": {
    id: "ROUTE_5_S5",
    dialogue: "Dime que no te estás comparando… ¿Con alguien más? ¿Soobin? No es justo.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [{ text: "No es él… soy yo.", nextStepId: "ROUTE_5_S6" }]
  },
  "ROUTE_5_S6": {
    id: "ROUTE_5_S6",
    dialogue: "Esa frase siempre es una despedida. Y lo sabes. No puedo enamorar a alguien que no se queda.",
    emotion: FranciscoEmotion.DECEPCIONADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_5_S7" }]
  },
  "ROUTE_5_S7": {
    id: "ROUTE_5_S7",
    dialogue: "Si me miras ahora… y decides quedarte… prometo no irme.",
    emotion: FranciscoEmotion.TIMIDEZ,
    isEnding: false,
    choices: [
      { text: "Bajar la mirada", nextStepId: "ROUTE_5_ENDING" },
      { text: "No puedo", nextStepId: "ROUTE_5_ENDING" }
    ]
  },
  "ROUTE_5_ENDING": {
    id: "ROUTE_5_ENDING",
    endingTitle: "Final 5: Casi 🥀💔",
    dialogue: "Está bien. No voy a retenerte. El amor no se ruega. Ni siquiera por Cupido.",
    emotion: FranciscoEmotion.FINGIDA_INDIFERENCIA,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 6: "Línea cruzada" (Final Malo Intenso)
  // =========================================================================
  "ROUTE_6_START": {
    id: "ROUTE_6_START",
    dialogue: "Llegas con decisión. Soy Cupido. El que une, separa… o se va. Espero que tengas claro a qué viniste. Porque yo no tengo paciencia infinita.",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "Solo quiero hablar", nextStepId: "ROUTE_6_S2" },
      { text: "No te creas tanto", nextStepId: "ROUTE_6_S2" },
      { text: "Relájate un poco", nextStepId: "ROUTE_6_S2" },
      { text: "Mirarlo desafiante", nextStepId: "ROUTE_6_S2" }
    ]
  },
  "ROUTE_6_S2": {
    id: "ROUTE_6_S2",
    dialogue: "Ese tono… ¿Vienes a retarme? No me gustan los juegos de poder. Especialmente si no sabes perder.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Tal vez exageras todo.", nextStepId: "ROUTE_6_S3" }]
  },
  "ROUTE_6_S3": {
    id: "ROUTE_6_S3",
    dialogue: "¿Exagero? Díselo a la gente que se enamora por mi culpa. Esto no es un chiste.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [{ text: "Igual Soobin se lo tomaría con humor.", nextStepId: "ROUTE_6_S4" }]
  },
  "ROUTE_6_S4": {
    id: "ROUTE_6_S4",
    dialogue: "… No. No vuelvas a decir ese nombre aquí.",
    emotion: FranciscoEmotion.SUPER_ENOJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_6_S5" }]
  },
  "ROUTE_6_S5": {
    id: "ROUTE_6_S5",
    dialogue: "¿Sabes qué es lo que más odio? Que me comparen. Yo no soy una versión alternativa de nadie. Y tú acabas de cruzar una línea.",
    emotion: FranciscoEmotion.SUPER_ENOJADO,
    isEnding: false,
    choices: [{ text: "Solo estaba bromeando.", nextStepId: "ROUTE_6_S6" }]
  },
  "ROUTE_6_S6": {
    id: "ROUTE_6_S6",
    dialogue: "No. No lo estabas. Y eso es peor.",
    emotion: FranciscoEmotion.DECEPCIONADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_6_S7" }]
  },
  "ROUTE_6_S7": {
    id: "ROUTE_6_S7",
    dialogue: "¿Sabes cuánta gente viene aquí buscando algo real? Yo no soy entretenimiento. Ni competencia. Si eso es lo que buscabas, te equivocaste de lugar. Dime ahora mismo… ¿Estás aquí por mí… o solo para probar hasta dónde aguanto?",
    emotion: FranciscoEmotion.DECEPCIONADO,
    isEnding: false,
    choices: [
      { text: "No lo sé", nextStepId: "ROUTE_6_ENDING" },
      { text: "Solo estaba jugando", nextStepId: "ROUTE_6_ENDING" }
    ]
  },
  "ROUTE_6_ENDING": {
    id: "ROUTE_6_ENDING",
    endingTitle: "Final 6: Línea cruzada 💥💔",
    dialogue: "Entonces ya está. No voy a seguir esta conversación. El amor no se provoca con burla. Ni siquiera con Cupido. Puedes irte. Esta historia termina aquí.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 7: "Todo o nada"
  // =========================================================================
  "ROUTE_7_START": {
    id: "ROUTE_7_START",
    dialogue: "Llegas sin dudar. Me gusta eso. Soy Cupido. Y normalmente la gente tarda en mirarme así.",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "Voy directo al punto", nextStepId: "ROUTE_7_S2" },
      { text: "No tengo tiempo que perder", nextStepId: "ROUTE_7_S2" },
      { text: "Silencio intenso", nextStepId: "ROUTE_7_S2" }
    ]
  },
  "ROUTE_7_S2": {
    id: "ROUTE_7_S2",
    dialogue: "Wow. Sin preámbulos. Me gusta tu energía. Pero dime algo… ¿viniste a conquistarme o a retarme?",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [
      { text: "Las dos cosas", nextStepId: "ROUTE_7_S3" },
      { text: "Depende de ti", nextStepId: "ROUTE_7_S3" }
    ]
  },
  "ROUTE_7_S3": {
    id: "ROUTE_7_S3",
    dialogue: "Atrevida. Normalmente me aburro rápido. Tú… no.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_7_S4" }]
  },
  "ROUTE_7_S4": {
    id: "ROUTE_7_S4",
    dialogue: "Mira, Aranxita. No soy del tipo que da vueltas. Si me interesas, te lo digo. Si no, también. Y ahora mismo… me interesas.",
    emotion: FranciscoEmotion.ORGULLOSO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_7_S5" }]
  },
  "ROUTE_7_S5": {
    id: "ROUTE_7_S5",
    dialogue: "Pero antes de seguir… ¿Soobin no es problema, verdad? Porque no pienso competir.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [
      { text: "Para nada", nextStepId: "ROUTE_7_S6" },
      { text: "Solo me importas tú", nextStepId: "ROUTE_7_S6" }
    ]
  },
  "ROUTE_7_S6": {
    id: "ROUTE_7_S6",
    dialogue: "Perfecto. Entonces voy todo o nada. ¿Te quedas conmigo?",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [
      { text: "Sí", nextStepId: "ROUTE_7_ENDING" },
      { text: "Tomar su mano", nextStepId: "ROUTE_7_ENDING" }
    ]
  },
  "ROUTE_7_ENDING": {
    id: "ROUTE_7_ENDING",
    endingTitle: "Final 7: Todo o nada 🔥💘",
    dialogue: "Hecho. Esto es oficial. Cupido ha sido conquistado. Y no me arrepiento.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 8: "Dos nervios, un latido"
  // =========================================================================
  "ROUTE_8_START": {
    id: "ROUTE_8_START",
    dialogue: "Hola. Normalmente digo algo mejor que eso. Pero supongo que hoy no es 'normal'. Soy Cupido. …por si no se notaba.",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "Hola…", nextStepId: "ROUTE_8_S2" },
      { text: "Sonreír nerviosa", nextStepId: "ROUTE_8_S2" },
      { text: "Me pones un poco nerviosa", nextStepId: "ROUTE_8_S2" }
    ]
  },
  "ROUTE_8_S2": {
    id: "ROUTE_8_S2",
    dialogue: "Ah. Entonces no soy el único. Genial… reunión oficial de personas incómodas. Me gusta eso.",
    emotion: FranciscoEmotion.TIMIDEZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_8_S3" }]
  },
  "ROUTE_8_S3": {
    id: "ROUTE_8_S3",
    dialogue: "Debería decir algo. Algo inteligente. O al menos coherente. Pero se me fue todo.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "No tienes que decir nada perfecto.", nextStepId: "ROUTE_8_S4" }]
  },
  "ROUTE_8_S4": {
    id: "ROUTE_8_S4",
    dialogue: "… Gracias. Eso ayuda más de lo que crees.",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_8_S5" }]
  },
  "ROUTE_8_S5": {
    id: "ROUTE_8_S5",
    dialogue: "Solo para aclarar… ¿No estás aquí por Soobin, verdad? Pregunta profesional.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [
      { text: "No, estoy aquí por ti", nextStepId: "ROUTE_8_S6" },
      { text: "Negar con la cabeza", nextStepId: "ROUTE_8_S6" },
      { text: "Me pongo más nerviosa contigo", nextStepId: "ROUTE_8_S6" }
    ]
  },
  "ROUTE_8_S6": {
    id: "ROUTE_8_S6",
    dialogue: "Ah. Eso fue… inesperadamente bonito. Debería anotar esto para futuras misiones. Pero no quiero.",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_8_S7" }]
  },
  "ROUTE_8_S7": {
    id: "ROUTE_8_S7",
    dialogue: "La mayoría llega aquí con discursos. Tú llegaste con nervios. Y eso… se siente real. Si doy un paso… ¿tú también lo darías?",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [
      { text: "Asentir tímidamente", nextStepId: "ROUTE_8_ENDING" },
      { text: "Dar el paso primero", nextStepId: "ROUTE_8_ENDING" }
    ]
  },
  "ROUTE_8_ENDING": {
    id: "ROUTE_8_ENDING",
    endingTitle: "Final 8: Dos nervios, un latido 😳💘",
    dialogue: "Wow. Esto es mucho más fuerte de lo que pensé. Y sin una sola flecha. Supongo que… a veces el amor llega bajito. Y se queda.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 9: "Risas peligrosas"
  // =========================================================================
  "ROUTE_9_START": {
    id: "ROUTE_9_START",
    dialogue: "Llegas sonriendo. Eso es sospechoso. Soy Cupido. Responsable de que la gente haga locuras por amor. Y no, no soy Soobin. Respira, lo sé, es duro. ¿Vienes a burlarte o a enamorarte?",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "¿No pueden ser las dos?", nextStepId: "ROUTE_9_S2" },
      { text: "Depende de ti", nextStepId: "ROUTE_9_S2" },
      { text: "Reír sin responder", nextStepId: "ROUTE_9_S2" }
    ]
  },
  "ROUTE_9_S2": {
    id: "ROUTE_9_S2",
    dialogue: "Ah… sentido del humor detectado. Pocos sobreviven a mi sarcasmo. Veamos cuánto duras.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_9_S3" }]
  },
  "ROUTE_9_S3": {
    id: "ROUTE_9_S3",
    dialogue: "Solo para dejar algo claro… No soy fan de Soobin. Demasiado perfecto. Sospechoso. Nadie es tan lindo sin pacto oscuro.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [
      { text: "Seguro vendió su alma", nextStepId: "ROUTE_9_S4" },
      { text: "Tú eres más divertido", nextStepId: "ROUTE_9_S4" },
      { text: "Prefiero sarcasmo a perfección", nextStepId: "ROUTE_9_S4" }
    ]
  },
  "ROUTE_9_S4": {
    id: "ROUTE_9_S4",
    dialogue: "… Oye. Eso fue golpe bajo. Me caes bien.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_9_S5" }]
  },
  "ROUTE_9_S5": {
    id: "ROUTE_9_S5",
    dialogue: "¿Sabes qué es peligroso? Reírme contigo. Normalmente aquí la gente se pone intensa. Tú solo… existes.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_9_S6" }]
  },
  "ROUTE_9_S6": {
    id: "ROUTE_9_S6",
    dialogue: "Dime algo. Si te digo que Cupido está empezando a enamorarse… ¿te reirías?",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [
      { text: "Un poco", nextStepId: "ROUTE_9_S7" },
      { text: "Me quedaría", nextStepId: "ROUTE_9_S7" },
      { text: "Me acercaría", nextStepId: "ROUTE_9_S7" }
    ]
  },
  "ROUTE_9_S7": {
    id: "ROUTE_9_S7",
    dialogue: "Ah. Entonces no era solo broma. Mal momento para admitirlo… pero me importas. Última pregunta. ¿Te quedarías incluso cuando dejo de bromear?",
    emotion: FranciscoEmotion.SONROJADO,
    isEnding: false,
    choices: [
      { text: "Sí", nextStepId: "ROUTE_9_ENDING" },
      { text: "Tomarle la mano", nextStepId: "ROUTE_9_ENDING" }
    ]
  },
  "ROUTE_9_ENDING": {
    id: "ROUTE_9_ENDING",
    endingTitle: "Final 9: Risas peligrosas 😈💘",
    dialogue: "Bien. Entonces prometo usar mis burlas solo contigo. Soobin no tiene oportunidad.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: true,
    choices: []
  },

  // =========================================================================
  // RUTA 10: "Elegir" (Final Verdadero)
  // =========================================================================
  "ROUTE_10_START": {
    id: "ROUTE_10_START",
    dialogue: "Aranxita. Esta vez no voy a bromear de inmediato. Aquí no se juega a ver quién gana. Aquí se decide.",
    emotion: FranciscoEmotion.PRESENTATION,
    isEnding: false,
    choices: [
      { text: "Entonces hablemos en serio", nextStepId: "ROUTE_10_S2" },
      { text: "Asentir sin sonreír", nextStepId: "ROUTE_10_S2" },
      { text: "Estoy lista", nextStepId: "ROUTE_10_S2" }
    ]
  },
  "ROUTE_10_S2": {
    id: "ROUTE_10_S2",
    dialogue: "He visto todas las formas posibles de amor. Gente segura. Gente rota. Gente que huye. Pero contigo… nada fue predecible.",
    emotion: FranciscoEmotion.CONFUNDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_S3" }]
  },
  "ROUTE_10_S3": {
    id: "ROUTE_10_S3",
    dialogue: "Me desafiaste. Me hiciste perder la paciencia. Me pusiste nervioso. Y aun así… sigues aquí.",
    emotion: FranciscoEmotion.SARCASMO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_S4" }]
  },
  "ROUTE_10_S4": {
    id: "ROUTE_10_S4",
    dialogue: "Tengo que decirlo una última vez. Soobin no es el problema. Lo era mi miedo a no ser elegido. Y hoy… eso se termina.",
    emotion: FranciscoEmotion.ENOJADO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_S5" }]
  },
  "ROUTE_10_S5": {
    id: "ROUTE_10_S5",
    dialogue: "No quiero que me idealices. Ni que me persigas. Quiero saber una sola cosa… ¿Me eliges incluso cuando no soy Cupido?",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [
      { text: "Te elijo porque eres tú", nextStepId: "ROUTE_10_S6" },
      { text: "Te elijo sin flechas", nextStepId: "ROUTE_10_S6" },
      { text: "Tomarle la mano en silencio", nextStepId: "ROUTE_10_S6" }
    ]
  },
  "ROUTE_10_S6": {
    id: "ROUTE_10_S6",
    dialogue: "… Eso… no lo había sentido nunca. Y he sentido mucho.",
    emotion: FranciscoEmotion.SORPRENDIDO,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_S7" }]
  },
  "ROUTE_10_S7": {
    id: "ROUTE_10_S7",
    dialogue: "Paso mi vida haciendo que otros se elijan. Decidiendo destinos. Pero hoy… dejo el arco.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_S8" }]
  },
  "ROUTE_10_S8": {
    id: "ROUTE_10_S8",
    dialogue: "No porque tenga que hacerlo. Sino porque quiero. Porque por primera vez… alguien me eligió primero. Aranxita… no necesito flechas contigo. Te necesito a ti.",
    emotion: FranciscoEmotion.GALAN,
    isEnding: false,
    choices: [{ text: "Continuar", nextStepId: "ROUTE_10_ENDING" }]
  },
  "ROUTE_10_ENDING": {
    id: "ROUTE_10_ENDING",
    endingTitle: "🌟 Final Verdadero: Elegir 💘✨",
    dialogue: "Final verdadero desbloqueado. Cupido… enamorado.",
    emotion: FranciscoEmotion.FELIZ,
    isEnding: true,
    choices: []
  },
};

export const getStep = (stepId: string): GameStepData => {
  const step = STORY_NODES[stepId];
  if (!step) {
    console.warn(`Step ${stepId} not found, restarting.`);
    return STORY_NODES["START"];
  }
  return step;
};

export const initializeGame = (): GameStepData => {
  return getStep("START");
};