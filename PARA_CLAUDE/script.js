const wordDialog = document.getElementById("wordDialog");
const closeWordDialogButton = document.getElementById("closeDialog");

const toggleNikkud = document.getElementById("toggleNikkud");
const toggleTeamim = document.getElementById("toggleTeamim");
const toggleTranslation = document.getElementById("toggleTranslation");
const toggleNeae = document.getElementById("toggleNeae");
const openNeaeLegend = document.getElementById("openNeaeLegend");
const neaeLegendDialog = document.getElementById("neaeLegendDialog");
const closeNeaeLegend = document.getElementById("closeNeaeLegend");
const translationBlocks = [...document.querySelectorAll(".translation")];

const wordTitle = document.getElementById("wordTitle");
const wordHeroHebrew = document.getElementById("wordHeroHebrew");
const wordHeroSpanish = document.getElementById("wordHeroSpanish");
const wordMeaningMain = document.getElementById("wordMeaningMain");
const wordMeaningAlt = document.getElementById("wordMeaningAlt");
const wordSimpleText = document.getElementById("wordSimpleText");
const wordSimpleNote = document.getElementById("wordSimpleNote");
const easyExplainBtn = document.getElementById("easyExplainBtn");
const easyExplainText = document.getElementById("easyExplainText");
const rootWithNikkud = document.getElementById("rootWithNikkud");
const rootWithoutNikkud = document.getElementById("rootWithoutNikkud");
const rootLetters = document.getElementById("rootLetters");
const rootIdeaA = document.getElementById("rootIdeaA");
const rootIdeaB = document.getElementById("rootIdeaB");
const buildLine1 = document.getElementById("buildLine1");
const buildLine2 = document.getElementById("buildLine2");
const buildLine3 = document.getElementById("buildLine3");
const personInfo = document.getElementById("personInfo");
const conjugationTitle = document.getElementById("conjugationTitle");
const tensePast = document.getElementById("tensePast");
const tensePresent = document.getElementById("tensePresent");
const tenseFuture = document.getElementById("tenseFuture");
const conjugationRows = document.getElementById("conjugationRows");
const buildExamples = document.getElementById("buildExamples");
const bilingualRows = document.getElementById("bilingualRows");

const rashiTitle = document.getElementById("rashiTitle");
const rashiHebrewPlain = document.getElementById("rashiHebrewPlain");
const rashiHebrewText = document.getElementById("rashiHebrewText");
const rashiIdea = document.getElementById("rashiIdea");
const rashiSimple = document.getElementById("rashiSimple");
const rashiLinkedWords = document.getElementById("rashiLinkedWords");
const rashiLiteralFront = document.getElementById("rashiLiteralFront");
const rashiLiteralBack = document.getElementById("rashiLiteralBack");
const rashiLiteralCard = document.getElementById("rashiLiteralCard");

const supportProfiles = document.getElementById("supportProfiles");
const supportTitle = document.getElementById("supportTitle");
const supportList = document.getElementById("supportList");
const toggleLivePanel = document.getElementById("toggleLivePanel");
const livePanel = document.getElementById("livePanel");
const liveInput = document.getElementById("liveInput");
const saveLiveNote = document.getElementById("saveLiveNote");
const copyLiveNotes = document.getElementById("copyLiveNotes");
const clearLiveNotes = document.getElementById("clearLiveNotes");
const liveNotesList = document.getElementById("liveNotesList");
const liveContext = document.getElementById("liveContext");
const timelineSteps = document.getElementById("timelineSteps");
const timelineTitle = document.getElementById("timelineTitle");
const timelineWhen = document.getElementById("timelineWhen");
const timelineText = document.getElementById("timelineText");
const timelinePasuk = document.getElementById("timelinePasuk");
const timelineRashi = document.getElementById("timelineRashi");
const timelineLinks = document.getElementById("timelineLinks");
const studyRoute = document.getElementById("studyRoute");
const quizSelector = document.getElementById("quizSelector");
const quizTitle = document.getElementById("quizTitle");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizNext = document.getElementById("quizNext");
const quizRestart = document.getElementById("quizRestart");
const quizScore = document.getElementById("quizScore");
const gameStats = document.getElementById("gameStats");
const challengeList = document.getElementById("challengeList");
const avatarPreview = document.getElementById("avatarPreview");
const levelText = document.getElementById("levelText");
const xpFill = document.getElementById("xpFill");
const avatarPicker = document.getElementById("avatarPicker");
const coachBubble = document.getElementById("coachBubble");
const coachFace = document.getElementById("coachFace");
const dailyMissionLabel = document.getElementById("dailyMissionLabel");
const dailyMissionFill = document.getElementById("dailyMissionFill");
const progressBadges = document.getElementById("progressBadges");
const progressSummary = document.getElementById("progressSummary");
const progressRows = document.getElementById("progressRows");
const progressWeak = document.getElementById("progressWeak");
const memoryTopic = document.getElementById("memoryTopic");
const memoryNotes = document.getElementById("memoryNotes");
const saveClassMemory = document.getElementById("saveClassMemory");
const clearClassMemory = document.getElementById("clearClassMemory");
const classMemoryList = document.getElementById("classMemoryList");
const cloudUrl = document.getElementById("cloudUrl");
const cloudAnon = document.getElementById("cloudAnon");
const cloudStudent = document.getElementById("cloudStudent");
const saveCloudConfig = document.getElementById("saveCloudConfig");
const syncPush = document.getElementById("syncPush");
const syncPull = document.getElementById("syncPull");
const cloudSyncStatus = document.getElementById("cloudSyncStatus");
const screenTabs = [...document.querySelectorAll(".screen-tab")];
const appScreens = [...document.querySelectorAll(".app-screen")];
const bookReader = document.getElementById("bookReader");
const bookPrev = document.getElementById("bookPrev");
const bookNext = document.getElementById("bookNext");
const bookPageLabel = document.getElementById("bookPageLabel");
const bookHand = document.getElementById("bookHand");
const bookIndexButtons = [...document.querySelectorAll(".book-index-btn")];
let bookPages = [...document.querySelectorAll(".book-page")];
let bookFlip = null;
const BOOK_IS_RTL = true;
if (BOOK_IS_RTL) bookPages = bookPages.slice().reverse();
const BOOK_START_INDEX = BOOK_IS_RTL ? bookPages.length - 1 : 0;

const TEAMIM_REGEX = /[\u0591-\u05AF]/g;
const NIKKUD_REGEX = /[\u05B0-\u05BC\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7]/g;

const defaultConjugationRows = [
  { label: "Yo", person: "1ª sing.", pronoun: "yo", gender: "neutro", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַעְתִּי</span>' },
  { label: "Tú", person: "2ª sing.", pronoun: "tu", gender: "masculino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַעְתָּ</span>' },
  { label: "Tú", person: "2ª sing.", pronoun: "tu", gender: "femenino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַעְתְּ</span>' },
  { label: "Él", person: "3ª sing.", pronoun: "el", gender: "masculino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַע</span>' },
  { label: "Ella", person: "3ª sing.", pronoun: "el", gender: "femenino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמְעָה</span>' },
  { label: "Nosotros", person: "1ª plural", pronoun: "nosotros", gender: "masculino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַעְנוּ</span>' },
  { label: "Nosotras", person: "1ª plural", pronoun: "nosotros", gender: "femenino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמַעְנוּ</span>' },
  { label: "Vosotros", person: "2ª plural", pronoun: "vosotros", gender: "masculino", formHtml: '<span class="hebrew-word" dir="rtl">שְׁמַעְתֶּם</span>' },
  { label: "Vosotras", person: "2ª plural", pronoun: "vosotros", gender: "femenino", formHtml: '<span class="hebrew-word" dir="rtl">שְׁמַעְתֶּן</span>' },
  { label: "Ellos", person: "3ª plural", pronoun: "ellos", gender: "masculino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמְעוּ</span>' },
  { label: "Ellas", person: "3ª plural", pronoun: "ellos", gender: "femenino", formHtml: '<span class="hebrew-word" dir="rtl">שָׁמְעוּ</span>' },
];

const baseWord = {
  heroHebrew: "מִלָּה",
  heroSpanish: "Palabra",
  meaningMain: "Palabra del pasuk en estudio.",
  meaningAlt: "La ficha se completa según su función en la frase.",
  simpleText: "Esta palabra forma parte del mensaje principal del pasuk.",
  simpleNote: "Estudiaremos su función paso a paso.",
  rootWithNikkud: "לפי ההקשר",
  rootWithoutNikkud: "לפי ההקשר",
  rootLetters: "לפי ההקשר",
  rootIdeaA: "Observamos la función de la palabra en la frase.",
  rootIdeaB: "Relacionamos forma, significado y uso.",
  buildLine1: "Identificamos si es verbo, nombre o partícula.",
  buildLine2: "Vemos qué aporta al sentido del pasuk.",
  buildLine3: "Practicamos lectura y comprensión global.",
  personInfo: "Persona gramatical: no aplica.",
  tensePast: "No aplica en esta palabra.",
  tensePresent: "No aplica en esta palabra.",
  tenseFuture: "No aplica en esta palabra.",
  conjugationRows: [],
  examples: [],
  bilingualPractice: [],
};

const wordData = {
  vaishma: {
    ...baseWord,
    title: "וַיִּשְׁמַע (Vaishmá)",
    heroHebrew: "וַיִּשְׁמַע",
    heroSpanish: "Y escuchó",
    meaningMain: '<strong>וַיִּשְׁמַע</strong> significa: <strong>"y escuchó"</strong>.',
    meaningAlt: 'También se puede traducir como: <strong>"oyó"</strong>.',
    simpleText: "Cuenta que Yitró escuchó una noticia importante.",
    simpleNote: "Es una acción puntual que ya pasó.",
    rootWithNikkud: "שָׁמַע",
    rootWithoutNikkud: "שמע",
    rootLetters: "ש־מ־ע",
    rootIdeaA: "La raíz ש־מ־ע se relaciona con escuchar.",
    rootIdeaB: "Aquí aparece en forma narrativa bíblica.",
    buildLine1: '<strong>Base verbal (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">יִשְׁמַע</span> = "él escuchará".',
    buildLine2: '<strong>Elemento añadido:</strong> <span class="hebrew-word" dir="rtl">וַ</span> = "y" narrativo.',
    buildLine3: '<strong>Forma final del pasuk:</strong> <span class="hebrew-word" dir="rtl">וַיִּשְׁמַע</span> = "y escuchó".',
    personInfo: "Conjugación en el pasuk: 3ª persona singular masculina (él).",
    tensePast: '<strong>Pasado (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">שָׁמַע</span> - él escuchó.',
    tensePresent: '<strong>Presente (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">שׁוֹמֵעַ</span> - él escucha.',
    tenseFuture: '<strong>Futuro (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">יִשְׁמַע</span> - él escuchará.',
    conjugationRows: defaultConjugationRows,
    examples: [
      '<span class="hebrew-word" dir="rtl">וַיִּשְׁמַע</span> -> "y escuchó" (forma narrativa).',
      '<span class="hebrew-word" dir="rtl">יִשְׁמַע</span> -> "él escuchará" (forma futura).',
      'Raíz fija: <span class="hebrew-word token root-mark" dir="rtl">ש־מ־ע</span>. Lo que cambia son prefijos/sufijos.',
    ],
    bilingualPractice: [
      { subject: "Yo", he: "אֲנִי שׁוֹמֵעַ / שׁוֹמַעַת", es: "Yo escucho" },
      { subject: "Tú", he: "אַתָּה שׁוֹמֵעַ / אַתְּ שׁוֹמַעַת", es: "Tú escuchas" },
      { subject: "Él / Ella", he: "הוּא שׁוֹמֵעַ / הִיא שׁוֹמַעַת", es: "Él escucha / Ella escucha" },
      { subject: "Nosotros/as", he: "אֲנַחְנוּ שׁוֹמְעִים / שׁוֹמְעוֹת", es: "Nosotros escuchamos / Nosotras escuchamos" },
      { subject: "Vosotros/as", he: "אַתֶּם שׁוֹמְעִים / אַתֶּן שׁוֹמְעוֹת", es: "Vosotros escucháis / Vosotras escucháis" },
      { subject: "Ellos/as", he: "הֵם שׁוֹמְעִים / הֵן שׁוֹמְעוֹת", es: "Ellos escuchan / Ellas escuchan" },
    ],
  },
  vayikach: {
    ...baseWord,
    title: "וַיִּקַּח (Vayikáḥ)",
    heroHebrew: "וַיִּקַּח",
    heroSpanish: "Y tomó",
    meaningMain: '<strong>וַיִּקַּח</strong> significa: <strong>"y tomó"</strong>.',
    meaningAlt: 'También se puede traducir como: <strong>"cogió"</strong>.',
    simpleText: "Cuenta que Yitró tomó a Tziporá.",
    simpleNote: "Es una acción puntual que ya pasó.",
    rootWithNikkud: "לָקַח",
    rootWithoutNikkud: "לקח",
    rootLetters: "ל־ק־ח",
    rootIdeaA: "La raíz ל־ק־ח se relaciona con tomar/recibir.",
    rootIdeaB: "Aquí aparece en forma narrativa bíblica.",
    buildLine1: '<strong>Base verbal (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">יִקַּח</span> = "él tomará".',
    buildLine2: '<strong>Elemento añadido:</strong> <span class="hebrew-word" dir="rtl">וַ</span> = "y" narrativo.',
    buildLine3: '<strong>Forma final del pasuk:</strong> <span class="hebrew-word" dir="rtl">וַיִּקַּח</span> = "y tomó".',
    personInfo: "Conjugación en el pasuk: 3ª persona singular masculina (él).",
    tensePast: '<strong>Pasado (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">לָקַח</span> - él tomó.',
    tensePresent: '<strong>Presente (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">לוֹקֵחַ</span> - él toma.',
    tenseFuture: '<strong>Futuro (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">יִקַּח</span> - él tomará.',
    conjugationRows: [
      { label: "Yo", person: "1ª sing.", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">לָקַחְתִּי</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">לָקַחְתָּ</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">לָקַחַתְּ</span>' },
      { label: "Él", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">לָקַח</span>' },
      { label: "Ella", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">לָקְחָה</span>' },
      { label: "Nosotros", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">לָקַחְנוּ</span>' },
      { label: "Nosotras", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">לָקַחְנוּ</span>' },
      { label: "Vosotros", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">לְקַחְתֶּם</span>' },
      { label: "Vosotras", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">לְקַחְתֶּן</span>' },
      { label: "Ellos", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">לָקְחוּ</span>' },
      { label: "Ellas", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">לָקְחוּ</span>' },
    ],
    examples: [
      '<span class="hebrew-word" dir="rtl">וַיִּקַּח</span> -> "y tomó" (forma narrativa).',
      '<span class="hebrew-word" dir="rtl">יִקַּח</span> -> "él tomará" (forma futura).',
      'Raíz fija: <span class="hebrew-word token root-mark" dir="rtl">ל־ק־ח</span>. Lo que cambia son prefijos/sufijos.',
    ],
    bilingualPractice: [
      { subject: "Yo", he: "אֲנִי לוֹקֵחַ / לוֹקַחַת", es: "Yo tomo" },
      { subject: "Tú", he: "אַתָּה לוֹקֵחַ / אַתְּ לוֹקַחַת", es: "Tú tomas" },
      { subject: "Él / Ella", he: "הוּא לוֹקֵחַ / הִיא לוֹקַחַת", es: "Él toma / Ella toma" },
      { subject: "Nosotros/as", he: "אֲנַחְנוּ לוֹקְחִים / לוֹקְחוֹת", es: "Nosotros tomamos / Nosotras tomamos" },
      { subject: "Vosotros/as", he: "אַתֶּם לוֹקְחִים / אַתֶּן לוֹקְחוֹת", es: "Vosotros tomáis / Vosotras tomáis" },
      { subject: "Ellos/as", he: "הֵם לוֹקְחִים / הֵן לוֹקְחוֹת", es: "Ellos toman / Ellas toman" },
    ],
  },
  yitro: {
    ...baseWord,
    title: "יִתְרוֹ (Yitró)",
    heroHebrew: "יִתְרוֹ",
    heroSpanish: "Yitró",
    meaningMain: "<strong>Yitró</strong> es el nombre del suegro de Moshé.",
    meaningAlt: "En Rashi aparece con varios nombres y significados.",
    simpleText: "Es un personaje central al inicio de la parashá Yitró.",
    simpleNote: "Aquí aprendemos quién era y qué escuchó.",
    rootWithNikkud: "יֶתֶר",
    rootWithoutNikkud: "יתר",
    rootLetters: "י־ת־ר",
    rootIdeaA: "Esta raíz puede relacionarse con añadir o aumentar.",
    rootIdeaB: "Rashi conecta este nombre con una adición en la Torá.",
    buildLine1: "<strong>Tipo de palabra:</strong> nombre propio.",
    buildLine2: "<strong>No es verbo conjugado</strong> en este contexto.",
    buildLine3: "<strong>Se estudia</strong> por su significado en Rashi.",
    personInfo: "Clase en el pasuk: nombre propio (personaje).",
    tensePast: '<strong>Forma de referencia:</strong> <span class="hebrew-word" dir="rtl">יִתְרוֹ</span>.',
    tensePresent: '<strong>Uso en la frase:</strong> identifica al personaje que escucha.',
    tenseFuture: '<strong>Función textual:</strong> sujeto histórico del relato.',
    conjugationRows: [
      { label: "Nombre", person: "Propio", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">יִתְרוֹ</span>' },
      { label: "Forma base", person: "Raíz", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">יֶתֶר</span>' },
      { label: "Sentido", person: "Contexto", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">דְּמוּת מֶרְכָּזִית</span>' },
    ],
    examples: [
      '<span class="hebrew-word" dir="rtl">יִתְרוֹ</span> -> personaje central de este inicio.',
      'Lectura: <span class="hebrew-word" dir="rtl">וַיִּשְׁמַע יִתְרוֹ</span> = "Yitró escuchó".',
    ],
    bilingualPractice: [
      { subject: "Nombre", he: "יִתְרוֹ", es: "Yitró" },
      { subject: "Rol", he: "חֹתֵן מֹשֶׁה", es: "suegro de Moshé" },
      { subject: "Acción en pasuk", he: "וַיִּשְׁמַע יִתְרוֹ", es: "Yitró escuchó" },
    ],
  },
  kohen: {
    ...baseWord, title: "כֹהֵן - sacerdote", heroHebrew: "כֹהֵן", heroSpanish: "Sacerdote",
    meaningMain: "<strong>כֹהֵן</strong> = sacerdote.",
    meaningAlt: "Aquí describe el rol de Yitró: sacerdote de Midyán.",
    rootWithNikkud: "כֹּהֵן", rootWithoutNikkud: "כהן", rootLetters: "כ־ה־ן",
    rootIdeaA: "La raíz se relaciona con servicio sacerdotal.", rootIdeaB: "Es un sustantivo, no un verbo aquí.",
    buildLine1: "Tipo: sustantivo.", buildLine2: "No se conjuga como verbo en este pasuk.", buildLine3: "Funciona como descripción de Yitró.",
    personInfo: "Clase en el pasuk: sustantivo descriptivo.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">כֹהֵן</span>.',
    tensePresent: "<strong>Función:</strong> describe profesión/rol.",
    tenseFuture: "<strong>Lectura guiada:</strong> título de Yitró.",
    conjugationRows: [
      { label: "Singular", person: "Nombre", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">כֹהֵן</span>' },
      { label: "Plural", person: "Nombre", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">כֹהֲנִים</span>' },
      { label: "Contexto", person: "Rol", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">כֹהֵן מִדְיָן</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "יִתְרוֹ כֹהֵן מִדְיָן", es: "Yitró, sacerdote de Midyán" }],
  },
  midyan: {
    ...baseWord, title: "מִדְיָן - Midyán", heroHebrew: "מִדְיָן", heroSpanish: "Midyán",
    meaningMain: "<strong>מִדְיָן</strong> = Midyán (lugar/pueblo).",
    meaningAlt: "Indica origen geográfico.",
    rootWithNikkud: "מִדְיָן", rootWithoutNikkud: "מדין", rootLetters: "מ־ד־י־ן",
    rootIdeaA: "Nombre propio geográfico.", rootIdeaB: "No es forma verbal.",
    buildLine1: "Tipo: nombre de lugar.", buildLine2: "Aporta contexto histórico.", buildLine3: "No tiene conjugación verbal.",
    personInfo: "Clase en el pasuk: nombre geográfico.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">מִדְיָן</span>.',
    tensePresent: "<strong>Función:</strong> ubica el origen de Yitró.",
    tenseFuture: "<strong>Lectura guiada:</strong> referencia de lugar.",
    conjugationRows: [
      { label: "Lugar", person: "Geografía", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">מִדְיָן</span>' },
      { label: "Con preposición", person: "Uso", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">מִמִּדְיָן</span>' },
      { label: "Contexto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">כֹהֵן מִדְיָן</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "כֹהֵן מִדְיָן", es: "sacerdote de Midyán" }],
  },
  choten: {
    ...baseWord, title: "חֹתֵן - suegro", heroHebrew: "חֹתֵן", heroSpanish: "Suegro",
    meaningMain: "<strong>חֹתֵן</strong> = suegro.",
    meaningAlt: "Marca la relación familiar con Moshé.",
    rootWithNikkud: "חֹתֵן", rootWithoutNikkud: "חתן", rootLetters: "ח־ת־ן",
    rootIdeaA: "Relacionado con parentesco por matrimonio.", rootIdeaB: "Sustantivo nominal.",
    buildLine1: "Tipo: sustantivo familiar.", buildLine2: "No se conjuga aquí.", buildLine3: "Describe quién es Yitró respecto a Moshé.",
    personInfo: "Clase en el pasuk: sustantivo de parentesco.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">חֹתֵן</span>.',
    tensePresent: "<strong>Función:</strong> indica relación familiar.",
    tenseFuture: "<strong>Lectura guiada:</strong> vínculo entre personajes.",
    conjugationRows: [
      { label: "Singular", person: "Parentesco", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">חֹתֵן</span>' },
      { label: "Plural", person: "Parentesco", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">חוֹתְנִים</span>' },
      { label: "Contexto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">חֹתֵן מֹשֶׁה</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "חֹתֵן מֹשֶׁה", es: "suegro de Moshé" }],
  },
  moshe: {
    ...baseWord, title: "מֹשֶׁה - Moshé", heroHebrew: "מֹשֶׁה", heroSpanish: "Moshé",
    meaningMain: "<strong>מֹשֶׁה</strong> = Moshé.",
    meaningAlt: "Nombre propio central del pasuk.",
    rootWithNikkud: "מֹשֶׁה", rootWithoutNikkud: "משה", rootLetters: "מ־ש־ה",
    rootIdeaA: "Nombre propio.", rootIdeaB: "No se analiza como conjugación verbal aquí.",
    buildLine1: "Tipo: nombre propio.", buildLine2: "Aparece como referente principal.", buildLine3: "No hay declinación verbal.",
    personInfo: "Clase en el pasuk: nombre propio.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">מֹשֶׁה</span>.',
    tensePresent: "<strong>Función:</strong> personaje central de la Torá.",
    tenseFuture: "<strong>Lectura guiada:</strong> aparece como destinatario.",
    conjugationRows: [
      { label: "Nombre", person: "Propio", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">מֹשֶׁה</span>' },
      { label: "Con preposición", person: "Uso", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">לְמֹשֶׁה</span>' },
      { label: "Contexto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">חֹתֵן מֹשֶׁה</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "לְמֹשֶׁה", es: "a Moshé" }],
  },
  "et-marker": {
    ...baseWord, title: "אֵת - marcador gramatical", heroHebrew: "אֵת", heroSpanish: "Marcador de objeto directo",
    meaningMain: "<strong>אֵת</strong> marca el objeto directo definido en hebreo bíblico.",
    meaningAlt: "No se traduce siempre palabra por palabra al español.",
    rootWithNikkud: "אֵת", rootWithoutNikkud: "את", rootLetters: "—",
    rootIdeaA: "Partícula gramatical.", rootIdeaB: "Su función es sintáctica.",
    buildLine1: "Tipo: partícula.", buildLine2: "No es verbo ni nombre propio.", buildLine3: "Ayuda a identificar qué recibe la acción.",
    personInfo: "Clase en el pasuk: partícula de objeto directo.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">אֵת</span>.',
    tensePresent: "<strong>Función:</strong> marca objeto directo definido.",
    tenseFuture: "<strong>Lectura guiada:</strong> ayuda a analizar la sintaxis.",
    conjugationRows: [
      { label: "Partícula", person: "Gramática", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">אֵת</span>' },
      { label: "Con nombre", person: "Uso", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">אֶת־יִשְׂרָאֵל</span>' },
      { label: "Sentido", person: "Función", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">סִימּוּן מוּשָּׂא יָשִׁיר</span>' },
    ],
    bilingualPractice: [{ subject: "Función", he: "אֵת־יִשְׂרָאֵל", es: "marca 'a Israel' como objeto directo" }],
  },
  "kol-asher": {
    ...baseWord, title: "כָּל־אֲשֶׁר - todo lo que", heroHebrew: "כָּל־אֲשֶׁר", heroSpanish: "Todo lo que",
    meaningMain: "<strong>כָּל־אֲשֶׁר</strong> = todo lo que.",
    meaningAlt: "Introduce la idea de totalidad.",
    rootWithNikkud: "כָּל / אֲשֶׁר", rootWithoutNikkud: "כל / אשר", rootLetters: "כ־ל / א־ש־ר",
    rootIdeaA: "Expresión compuesta.", rootIdeaB: "Conecta con la acción 'hizo'.",
    buildLine1: "Tipo: cuantificador + relativo.", buildLine2: "No es conjugación verbal.", buildLine3: "Prepara el complemento del verbo.",
    personInfo: "Clase en el pasuk: expresión compuesta.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">כָּל־אֲשֶׁר</span>.',
    tensePresent: "<strong>Función:</strong> introduce totalidad de acciones.",
    tenseFuture: "<strong>Lectura guiada:</strong> conecta con el verbo siguiente.",
    conjugationRows: [
      { label: "Cuantificador", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">כָּל</span>' },
      { label: "Relativo", person: "Estructura", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">אֲשֶׁר</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">כָּל־אֲשֶׁר</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "אֵת כָּל־אֲשֶׁר עָשָׂה", es: "todo lo que hizo" }],
  },
  asah: {
    ...baseWord, title: "עָשָׂה - hizo", heroHebrew: "עָשָׂה", heroSpanish: "Hizo",
    meaningMain: "<strong>עָשָׂה</strong> = hizo.",
    meaningAlt: "Verbo en pasado.",
    rootWithNikkud: "עָשָׂה", rootWithoutNikkud: "עשה", rootLetters: "ע־שׂ־ה",
    rootIdeaA: "Raíz de hacer/realizar.", rootIdeaB: "Acción completada.",
    buildLine1: "Base verbal en pasado.", buildLine2: "Aquí corresponde a 3ª sing. masc.", buildLine3: "Describe lo que Dios hizo.",
    personInfo: "3ª persona singular masculina (él hizo).",
    tensePast: '<strong>Pasado:</strong> <span class="hebrew-word" dir="rtl">עָשָׂה</span> - él hizo.',
    tensePresent: '<strong>Presente:</strong> <span class="hebrew-word" dir="rtl">עוֹשֶׂה</span> - él hace.',
    tenseFuture: '<strong>Futuro:</strong> <span class="hebrew-word" dir="rtl">יַעֲשֶׂה</span> - él hará.',
    conjugationRows: [
      { label: "Yo", person: "1ª sing.", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">עָשִׂיתִי</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">עָשִׂיתָ</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">עָשִׂיתְ</span>' },
      { label: "Él", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">עָשָׂה</span>' },
      { label: "Ella", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">עָשְׂתָה</span>' },
      { label: "Nosotros", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">עָשִׂינוּ</span>' },
      { label: "Nosotras", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">עָשִׂינוּ</span>' },
      { label: "Vosotros", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">עֲשִׂיתֶם</span>' },
      { label: "Vosotras", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">עֲשִׂיתֶן</span>' },
      { label: "Ellos", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">עָשׂוּ</span>' },
      { label: "Ellas", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">עָשׂוּ</span>' },
    ],
    bilingualPractice: [
      { subject: "Yo", he: "אֲנִי עוֹשֶׂה / עוֹשָׂה", es: "Yo hago" },
      { subject: "Tú", he: "אַתָּה עוֹשֶׂה / אַתְּ עוֹשָׂה", es: "Tú haces" },
      { subject: "Él / Ella", he: "הוּא עוֹשֶׂה / הִיא עוֹשָׂה", es: "Él hace / Ella hace" },
      { subject: "Nosotros/as", he: "אֲנַחְנוּ עוֹשִׂים / עוֹשׂוֹת", es: "Nosotros hacemos / Nosotras hacemos" },
      { subject: "Vosotros/as", he: "אַתֶּם עוֹשִׂים / אַתֶּן עוֹשׂוֹת", es: "Vosotros hacéis / Vosotras hacéis" },
      { subject: "Ellos/as", he: "הֵם עוֹשִׂים / הֵן עוֹשׂוֹת", es: "Ellos hacen / Ellas hacen" },
    ],
  },
  elohim: {
    ...baseWord, title: "אֱלֹהִים - Dios", heroHebrew: "אֱלֹהִים", heroSpanish: "Dios",
    meaningMain: "<strong>אֱלֹהִים</strong> = Dios.",
    meaningAlt: "Sujeto del verbo 'hizo'.",
    rootWithNikkud: "אֱלֹהִים", rootWithoutNikkud: "אלהים", rootLetters: "א־ל־ה",
    rootIdeaA: "Nombre divino.", rootIdeaB: "Funciona como sujeto en esta parte.",
    buildLine1: "Tipo: sustantivo/nombre divino.", buildLine2: "No se conjuga aquí.", buildLine3: "Realiza la acción del verbo.",
    personInfo: "Clase en el pasuk: sujeto nominal (nombre divino).",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">אֱלֹהִים</span>.',
    tensePresent: "<strong>Función:</strong> sujeto del verbo עָשָׂה.",
    tenseFuture: "<strong>Lectura guiada:</strong> actor de la acción en la frase.",
    conjugationRows: [
      { label: "Nombre", person: "Divino", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">אֱלֹהִים</span>' },
      { label: "Con verbo", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">עָשָׂה אֱלֹהִים</span>' },
      { label: "Función", person: "Sujeto", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">נוֹשֵׂא הַמִּשְׁפָּט</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "עָשָׂה אֱלֹהִים", es: "Dios hizo" }],
  },
  lemoshe: {
    ...baseWord, title: "לְמֹשֶׁה - a Moshé", heroHebrew: "לְמֹשֶׁה", heroSpanish: "A Moshé",
    meaningMain: "<strong>לְמֹשֶׁה</strong> = a/para Moshé.",
    meaningAlt: "Preposición לְ = a/para + nombre.",
    rootWithNikkud: "לְ + מֹשֶׁה", rootWithoutNikkud: "ל + משה", rootLetters: "—",
    rootIdeaA: "Bloque preposicional.", rootIdeaB: "Indica destinatario.",
    buildLine1: "Tipo: preposición + nombre.", buildLine2: "No es verbo.", buildLine3: "Función: complemento indirecto.",
    personInfo: "Clase en el pasuk: complemento preposicional.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">לְמֹשֶׁה</span>.',
    tensePresent: "<strong>Función:</strong> marca destinatario.",
    tenseFuture: "<strong>Lectura guiada:</strong> indica a quién afecta la acción.",
    conjugationRows: [
      { label: "Preposición", person: "Estructura", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">לְ</span>' },
      { label: "Nombre", person: "Estructura", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">מֹשֶׁה</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">לְמֹשֶׁה</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "לְמֹשֶׁה", es: "a Moshé" }],
  },
  uleyisrael: {
    ...baseWord, title: "וּלְיִשְׂרָאֵל - y a Israel", heroHebrew: "וּלְיִשְׂרָאֵל", heroSpanish: "Y a Israel",
    meaningMain: "<strong>וּלְיִשְׂרָאֵל</strong> = y a/para Israel.",
    meaningAlt: "וּ = y, לְ = a/para.",
    rootWithNikkud: "וּ + לְ + יִשְׂרָאֵל", rootWithoutNikkud: "ו + ל + ישראל", rootLetters: "—",
    rootIdeaA: "Conector + preposición + nombre.", rootIdeaB: "Amplía destinatarios de la acción.",
    buildLine1: "Tipo: enlace sintáctico.", buildLine2: "No conjugable.", buildLine3: "Une a Israel con Moshé en la frase.",
    personInfo: "Clase en el pasuk: conector + complemento preposicional.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">וּלְיִשְׂרָאֵל</span>.',
    tensePresent: "<strong>Función:</strong> añade otro destinatario de la acción.",
    tenseFuture: "<strong>Lectura guiada:</strong> une Moshé e Israel en paralelo.",
    conjugationRows: [
      { label: "Conector", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">וּ</span>' },
      { label: "Preposición+nombre", person: "Estructura", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">לְיִשְׂרָאֵל</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">וּלְיִשְׂרָאֵל</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "וּלְיִשְׂרָאֵל עַמּוֹ", es: "y a Israel, su pueblo" }],
  },
  amo: {
    ...baseWord, title: "עַמּוֹ - su pueblo", heroHebrew: "עַמּוֹ", heroSpanish: "Su pueblo",
    meaningMain: "<strong>עַמּוֹ</strong> = su pueblo.",
    meaningAlt: "עַם = pueblo, -וֹ = su (de él).",
    rootWithNikkud: "עַם + וֹ", rootWithoutNikkud: "עם + ו", rootLetters: "ע־מ־ם",
    rootIdeaA: "Sustantivo con sufijo posesivo.", rootIdeaB: "Aclara pertenencia.",
    buildLine1: "Tipo: nombre + sufijo.", buildLine2: "No verbal.", buildLine3: "Significa 'su pueblo'.",
    personInfo: "Clase en el pasuk: sustantivo con sufijo posesivo.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">עַמּוֹ</span>.',
    tensePresent: "<strong>Función:</strong> expresa pertenencia (su pueblo).",
    tenseFuture: "<strong>Lectura guiada:</strong> especifica relación con Israel.",
    conjugationRows: [
      { label: "Nombre base", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">עַם</span>' },
      { label: "Sufijo", person: "Estructura", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">וֹ</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">עַמּוֹ</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "יִשְׂרָאֵל עַמּוֹ", es: "Israel, su pueblo" }],
  },
  "ki-hotzi": {
    ...baseWord, title: "כִּי־הוֹצִיא - porque sacó", heroHebrew: "כִּי־הוֹצִיא", heroSpanish: "Porque sacó",
    meaningMain: "<strong>כִּי־הוֹצִיא</strong> = porque sacó.",
    meaningAlt: "כִּי = porque; הוֹצִיא = sacó/hizo salir.",
    rootWithNikkud: "הוֹצִיא", rootWithoutNikkud: "הוציא", rootLetters: "י־צ־א",
    rootIdeaA: "Verbo de sacar/hacer salir (Hif'il).", rootIdeaB: "Explica la razón del pasuk.",
    buildLine1: '<strong>Base verbal (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">הוֹצִיא</span> = "él sacó / hizo salir".',
    buildLine2: '<strong>Elemento añadido:</strong> <span class="hebrew-word" dir="rtl">כִּי</span> = "porque" (introduce causa).',
    buildLine3: '<strong>Forma final del pasuk:</strong> <span class="hebrew-word" dir="rtl">כִּי־הוֹצִיא</span> = "porque sacó".',
    personInfo: "Conjugación en el pasuk: 3ª persona singular masculina (él).",
    tensePast: '<strong>Pasado (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">הוֹצִיא</span> - él sacó.',
    tensePresent: '<strong>Presente (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">מוֹצִיא</span> - él saca.',
    tenseFuture: '<strong>Futuro (3ª sing. masc.):</strong> <span class="hebrew-word" dir="rtl">יוֹצִיא</span> - él sacará.',
    conjugationRows: [
      { label: "Yo", person: "1ª sing.", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאתִי</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאתָ</span>' },
      { label: "Tú", person: "2ª sing.", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאתְ</span>' },
      { label: "Él", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצִיא</span>' },
      { label: "Ella", person: "3ª sing.", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצִיאָה</span>' },
      { label: "Nosotros", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאנוּ</span>' },
      { label: "Nosotras", person: "1ª plural", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאנוּ</span>' },
      { label: "Vosotros", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאתֶם</span>' },
      { label: "Vosotras", person: "2ª plural", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצֵאתֶן</span>' },
      { label: "Ellos", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצִיאוּ</span>' },
      { label: "Ellas", person: "3ª plural", pronoun: "ellos", formHtml: '<span class="hebrew-word" dir="rtl">הוֹצִיאוּ</span>' },
    ],
    bilingualPractice: [
      { subject: "Yo", he: "אֲנִי מוֹצִיא / מוֹצִיאָה", es: "Yo saco" },
      { subject: "Tú", he: "אַתָּה מוֹצִיא / אַתְּ מוֹצִיאָה", es: "Tú sacas" },
      { subject: "Él / Ella", he: "הוּא מוֹצִיא / הִיא מוֹצִיאָה", es: "Él saca / Ella saca" },
      { subject: "Nosotros/as", he: "אֲנַחְנוּ מוֹצִיאִים / מוֹצִיאוֹת", es: "Nosotros sacamos / Nosotras sacamos" },
      { subject: "Vosotros/as", he: "אַתֶּם מוֹצִיאִים / אַתֶּן מוֹצִיאוֹת", es: "Vosotros sacáis / Vosotras sacáis" },
      { subject: "Ellos/as", he: "הֵם מוֹצִיאִים / הֵן מוֹצִיאוֹת", es: "Ellos sacan / Ellas sacan" },
    ],
  },
  adonai: {
    ...baseWord, title: "יְהֹוָה - El Eterno", heroHebrew: "יְהֹוָה", heroSpanish: "El Eterno",
    meaningMain: "<strong>יְהֹוָה</strong> = Nombre divino (El Eterno).",
    meaningAlt: "Sujeto del verbo 'sacó'.",
    rootWithNikkud: "יְהֹוָה", rootWithoutNikkud: "יהוה", rootLetters: "—",
    rootIdeaA: "Nombre divino propio.", rootIdeaB: "No se analiza como conjugación.",
    buildLine1: "Tipo: nombre divino.", buildLine2: "No verbal.", buildLine3: "Realiza la acción de sacar.",
    personInfo: "Clase en el pasuk: nombre divino, sujeto de la acción.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">יְהֹוָה</span>.',
    tensePresent: "<strong>Función:</strong> sujeto del verbo הוֹצִיא.",
    tenseFuture: "<strong>Lectura guiada:</strong> identifica quién sacó a Israel.",
    conjugationRows: [
      { label: "Nombre", person: "Divino", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">יְהֹוָה</span>' },
      { label: "Con verbo", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">יְהֹוָה הוֹצִיא</span>' },
      { label: "Función", person: "Sujeto", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">נוֹשֵׂא הַפְּעֻלָּה</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "יְהֹוָה הוֹצִיא", es: "El Eterno sacó" }],
  },
  "et-yisrael": {
    ...baseWord, title: "אֶת־יִשְׂרָאֵל - a Israel", heroHebrew: "אֶת־יִשְׂרָאֵל", heroSpanish: "A Israel",
    meaningMain: "<strong>אֶת־יִשְׂרָאֵל</strong> = a Israel (objeto directo definido).",
    meaningAlt: "אֶת marca el objeto directo.",
    rootWithNikkud: "אֶת + יִשְׂרָאֵל", rootWithoutNikkud: "את + ישראל", rootLetters: "—",
    rootIdeaA: "Partícula + nombre propio.", rootIdeaB: "Recibe la acción de sacar.",
    buildLine1: "Tipo: objeto directo marcado.", buildLine2: "No es verbo.", buildLine3: "Completa el sentido de הוֹצִיא.",
    personInfo: "Clase en el pasuk: objeto directo marcado.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">אֶת־יִשְׂרָאֵל</span>.',
    tensePresent: "<strong>Función:</strong> recibe la acción de sacar.",
    tenseFuture: "<strong>Lectura guiada:</strong> complemento directo de הוֹצִיא.",
    conjugationRows: [
      { label: "Partícula", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">אֶת</span>' },
      { label: "Nombre", person: "Estructura", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">יִשְׂרָאֵל</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">אֶת־יִשְׂרָאֵל</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "הוֹצִיא אֶת־יִשְׂרָאֵל", es: "sacó a Israel" }],
  },
  mimitzrayim: {
    ...baseWord, title: "מִמִּצְרָיִם - de Egipto", heroHebrew: "מִמִּצְרָיִם", heroSpanish: "De Egipto",
    meaningMain: "<strong>מִמִּצְרַיִם</strong> = de Egipto.",
    meaningAlt: "מִן = de, + מִצְרַיִם = Egipto.",
    rootWithNikkud: "מִן + מִצְרַיִם", rootWithoutNikkud: "מן + מצרים", rootLetters: "מ־צ־ר",
    rootIdeaA: "Expresa origen/salida.", rootIdeaB: "Cierra la frase con el lugar de salida.",
    buildLine1: "Tipo: preposición + nombre geográfico.", buildLine2: "No verbal.", buildLine3: "Indica desde dónde salió Israel.",
    personInfo: "Clase en el pasuk: origen geográfico (de dónde).",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">מִמִּצְרָיִם</span>.',
    tensePresent: "<strong>Función:</strong> indica procedencia de la salida.",
    tenseFuture: "<strong>Lectura guiada:</strong> cierra la frase con lugar.",
    conjugationRows: [
      { label: "Preposición", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">מִן</span>' },
      { label: "Lugar", person: "Estructura", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">מִצְרָיִם</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">מִמִּצְרָיִם</span>' },
    ],
    bilingualPractice: [{ subject: "Lectura", he: "מִמִּצְרָיִם", es: "de Egipto" }],
  },
  tzipora: {
    ...baseWord,
    title: "צִפֹּרָה (Tziporá)",
    heroHebrew: "צִפֹּרָה",
    heroSpanish: "Tziporá",
    meaningMain: "<strong>צִפֹּרָה</strong> = Tziporá (nombre propio).",
    meaningAlt: "Es la esposa de Moshé en este pasuk.",
    rootWithNikkud: "צִפֹּרָה",
    rootWithoutNikkud: "צפרה",
    rootLetters: "צ־פ־ר",
    rootIdeaA: "Nombre propio femenino.",
    rootIdeaB: "Aparece como objeto de la acción 'tomó'.",
    buildLine1: "Tipo: nombre propio.",
    buildLine2: "No se conjuga como verbo.",
    buildLine3: "Se estudia por función en la frase.",
    personInfo: "Clase en el pasuk: nombre propio.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">צִפֹּרָה</span>.',
    tensePresent: "<strong>Función:</strong> personaje mencionado.",
    tenseFuture: "<strong>Lectura guiada:</strong> esposa de Moshé.",
    conjugationRows: [
      { label: "Nombre", person: "Propio", pronoun: "el", formHtml: '<span class="hebrew-word" dir="rtl">צִפֹּרָה</span>' },
      { label: "Relación", person: "Contexto", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">אֵשֶׁת מֹשֶׁה</span>' },
    ],
    examples: ['<span class="hebrew-word" dir="rtl">אֶת־צִפֹּרָה</span> -> objeto directo de "tomó".'],
    bilingualPractice: [{ subject: "Lectura", he: "אֶת־צִפֹּרָה", es: "a Tziporá" }],
  },
  eshet: {
    ...baseWord,
    title: "אֵשֶׁת - esposa de",
    heroHebrew: "אֵשֶׁת",
    heroSpanish: "Esposa de",
    meaningMain: "<strong>אֵשֶׁת</strong> = esposa de.",
    meaningAlt: "Forma constructa de אִשָּׁה (mujer/esposa).",
    rootWithNikkud: "אִשָּׁה / אֵשֶׁת",
    rootWithoutNikkud: "אשה / אשת",
    rootLetters: "א־ש־ה",
    rootIdeaA: "Sustantivo relacional.",
    rootIdeaB: "Conecta con el nombre siguiente.",
    buildLine1: "Tipo: nombre en estado constructo.",
    buildLine2: "No verbal.",
    buildLine3: "Une 'esposa' con 'Moshé'.",
    personInfo: "Clase en el pasuk: sustantivo relacional.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">אֵשֶׁת</span>.',
    tensePresent: "<strong>Función:</strong> expresa relación matrimonial.",
    tenseFuture: "<strong>Lectura guiada:</strong> complemento nominal.",
    conjugationRows: [
      { label: "Base", person: "Nombre", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">אִשָּׁה</span>' },
      { label: "Constructo", person: "Uso", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">אֵשֶׁת</span>' },
      { label: "Frase", person: "Contexto", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">אֵשֶׁת מֹשֶׁה</span>' },
    ],
    examples: ['<span class="hebrew-word" dir="rtl">אֵשֶׁת מֹשֶׁה</span> -> "esposa de Moshé".'],
    bilingualPractice: [{ subject: "Lectura", he: "אֵשֶׁת מֹשֶׁה", es: "esposa de Moshé" }],
  },
  achar: {
    ...baseWord,
    title: "אַחַר - después de",
    heroHebrew: "אַחַר",
    heroSpanish: "Después de",
    meaningMain: "<strong>אַחַר</strong> = después de.",
    meaningAlt: "Introduce secuencia temporal.",
    rootWithNikkud: "אַחַר",
    rootWithoutNikkud: "אחר",
    rootLetters: "א־ח־ר",
    rootIdeaA: "Partícula/preposición temporal.",
    rootIdeaB: "Abre la frase explicada por Rashi.",
    buildLine1: "Tipo: preposición temporal.",
    buildLine2: "No verbal.",
    buildLine3: "Conecta con שִׁלּוּחֶיהָ.",
    personInfo: "Clase en el pasuk: nexo temporal.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">אַחַר</span>.',
    tensePresent: "<strong>Función:</strong> marca orden temporal.",
    tenseFuture: "<strong>Lectura guiada:</strong> clave para entender el Rashi.",
    conjugationRows: [
      { label: "Partícula", person: "Temporal", pronoun: "vosotros", formHtml: '<span class="hebrew-word" dir="rtl">אַחַר</span>' },
      { label: "Frase", person: "Contexto", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">אַחַר שִׁלּוּחֶיהָ</span>' },
    ],
    examples: ['<span class="hebrew-word" dir="rtl">אַחַר שִׁלּוּחֶיהָ</span> -> "después de su envío".'],
    bilingualPractice: [{ subject: "Lectura", he: "אַחַר שִׁלּוּחֶיהָ", es: "después de su envío" }],
  },
  shilucheha: {
    ...baseWord,
    title: "שִׁלּוּחֶיהָ - su envío",
    heroHebrew: "שִׁלּוּחֶיהָ",
    heroSpanish: "Su envío",
    meaningMain: "<strong>שִׁלּוּחֶיהָ</strong> = su envío/despido.",
    meaningAlt: "Rashi explica este detalle históricamente.",
    rootWithNikkud: "שִׁלּוּחַ + הָ",
    rootWithoutNikkud: "שלוח + ה",
    rootLetters: "ש־ל־ח",
    rootIdeaA: "Deriva de la raíz enviar (ש־ל־ח).",
    rootIdeaB: "Con sufijo posesivo femenino singular.",
    buildLine1: "Base nominal: שִׁלּוּחַ (envío).",
    buildLine2: "Sufijo: הָ = de ella/suya.",
    buildLine3: "Conjunto: שִׁלּוּחֶיהָ.",
    personInfo: "Clase en el pasuk: sustantivo con sufijo posesivo.",
    tensePast: '<strong>Forma principal:</strong> <span class="hebrew-word" dir="rtl">שִׁלּוּחֶיהָ</span>.',
    tensePresent: "<strong>Función:</strong> punto central del comentario de Rashi.",
    tenseFuture: "<strong>Lectura guiada:</strong> explica una acción previa.",
    conjugationRows: [
      { label: "Nombre base", person: "Estructura", pronoun: "yo", formHtml: '<span class="hebrew-word" dir="rtl">שִׁלּוּחַ</span>' },
      { label: "Sufijo", person: "Estructura", pronoun: "tu", formHtml: '<span class="hebrew-word" dir="rtl">הָ</span>' },
      { label: "Conjunto", person: "Frase", pronoun: "nosotros", formHtml: '<span class="hebrew-word" dir="rtl">שִׁלּוּחֶיהָ</span>' },
    ],
    examples: ['<span class="hebrew-word" dir="rtl">אַחַר שִׁלּוּחֶיהָ</span> -> frase analizada por Rashi.'],
    bilingualPractice: [{ subject: "Lectura", he: "שִׁלּוּחֶיהָ", es: "su envío / su despedida" }],
  },
  veet: {
    ...baseWord,
    title: "וְאֵת - y (marcador de objeto)",
    heroHebrew: "וְאֵת",
    heroSpanish: "Y (marcador gramatical)",
    meaningMain: "<strong>וְאֵת</strong> = y + marcador de objeto directo.",
    meaningAlt: "וְ = y, אֵת = partícula gramatical.",
    rootWithNikkud: "וְ + אֵת",
    rootWithoutNikkud: "ו + את",
    rootLetters: "—",
    rootIdeaA: "Conector + partícula.",
    rootIdeaB: "No se traduce palabra por palabra siempre.",
    buildLine1: "Tipo: conector y partícula.",
    buildLine2: "No verbal.",
    buildLine3: "Introduce el objeto que sigue.",
    personInfo: "Clase: partícula gramatical.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">וְאֵת</span>.',
    tensePresent: "<strong>Función:</strong> conectar y marcar objeto directo.",
    tenseFuture: "<strong>Lectura guiada:</strong> prepara 'sus dos hijos'.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "וְאֵת שְׁנֵי בָנֶיהָ", es: "y a sus dos hijos" }],
  },
  shnei: {
    ...baseWord,
    title: "שְׁנֵי - dos de",
    heroHebrew: "שְׁנֵי",
    heroSpanish: "Dos de",
    meaningMain: "<strong>שְׁנֵי</strong> = dos de (forma constructa).",
    meaningAlt: "Se usa delante de un sustantivo plural.",
    rootWithNikkud: "שְׁנַיִם / שְׁנֵי",
    rootWithoutNikkud: "שנים / שני",
    rootLetters: "ש־נ",
    rootIdeaA: "Número dos en forma de unión.",
    rootIdeaB: "Aquí se une con בָנֶיהָ.",
    buildLine1: "Tipo: número.",
    buildLine2: "Forma constructa: שְׁנֵי.",
    buildLine3: "Frase: שְׁנֵי בָנֶיהָ.",
    personInfo: "Clase: numeral.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">שְׁנֵי</span>.',
    tensePresent: "<strong>Función:</strong> contar: dos.",
    tenseFuture: "<strong>Lectura guiada:</strong> introduce cantidad.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "שְׁנֵי בָנֶיהָ", es: "sus dos hijos" }],
  },
  baneha: {
    ...baseWord,
    title: "בָנֶיהָ - sus hijos",
    heroHebrew: "בָנֶיהָ",
    heroSpanish: "Sus hijos",
    meaningMain: "<strong>בָנֶיהָ</strong> = sus hijos (de ella).",
    meaningAlt: "Base: בָּנִים + sufijo posesivo הָ.",
    rootWithNikkud: "בֵּן / בָּנִים + הָ",
    rootWithoutNikkud: "בן / בנים + ה",
    rootLetters: "ב־נ",
    rootIdeaA: "Sustantivo + sufijo posesivo femenino.",
    rootIdeaB: "Se refiere a los hijos de Tziporá.",
    buildLine1: "Base nominal: בָּנִים (hijos).",
    buildLine2: "Sufijo: הָ = de ella.",
    buildLine3: "Resultado: בָנֶיהָ.",
    personInfo: "Clase: sustantivo con posesivo.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">בָנֶיהָ</span>.',
    tensePresent: "<strong>Función:</strong> indicar pertenencia.",
    tenseFuture: "<strong>Lectura guiada:</strong> ¿hijos de quién? de ella.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "בָנֶיהָ", es: "sus hijos" }],
  },
  "asher-rel": {
    ...baseWord,
    title: "אֲשֶׁר - que / el cual",
    heroHebrew: "אֲשֶׁר",
    heroSpanish: "Que / el cual",
    meaningMain: "<strong>אֲשֶׁר</strong> = que / el cual.",
    meaningAlt: "Palabra que une dos partes de la frase.",
    rootWithNikkud: "אֲשֶׁר",
    rootWithoutNikkud: "אשר",
    rootLetters: "א־ש־ר",
    rootIdeaA: "Conector relativo.",
    rootIdeaB: "Introduce una explicación.",
    buildLine1: "Tipo: partícula relativa.",
    buildLine2: "No verbal.",
    buildLine3: "Conecta con el nombre del hijo.",
    personInfo: "Clase: conector gramatical.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">אֲשֶׁר</span>.',
    tensePresent: "<strong>Función:</strong> unir ideas.",
    tenseFuture: "<strong>Lectura guiada:</strong> equivalente a 'que'.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "אֲשֶׁר שֵׁם הָאֶחָד", es: "del cual el nombre de uno" }],
  },
  "shem-haechad": {
    ...baseWord,
    title: "שֵׁם הָאֶחָד - el nombre de uno",
    heroHebrew: "שֵׁם הָאֶחָד",
    heroSpanish: "El nombre de uno",
    meaningMain: "<strong>שֵׁם הָאֶחָד</strong> = el nombre de uno.",
    meaningAlt: "Introduce el nombre de uno de los hijos.",
    rootWithNikkud: "שֵׁם / אֶחָד",
    rootWithoutNikkud: "שם / אחד",
    rootLetters: "ש־מ / א־ח־ד",
    rootIdeaA: "Sustantivo + número.",
    rootIdeaB: "Señala al primer hijo.",
    buildLine1: "Tipo: grupo nominal.",
    buildLine2: "No verbal.",
    buildLine3: "Prepara el nombre גֵּרְשֹׁם.",
    personInfo: "Clase: frase nominal.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">שֵׁם הָאֶחָד</span>.',
    tensePresent: "<strong>Función:</strong> presentar identidad.",
    tenseFuture: "<strong>Lectura guiada:</strong> el nombre de uno de ellos.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "שֵׁם הָאֶחָד גֵּרְשֹׁם", es: "el nombre de uno era Gershom" }],
  },
  gershom: {
    ...baseWord,
    title: "גֵּרְשֹׁם - Gershom",
    heroHebrew: "גֵּרְשֹׁם",
    heroSpanish: "Gershom",
    meaningMain: "<strong>גֵּרְשֹׁם</strong> es el nombre de uno de los hijos de Moshé.",
    meaningAlt: "Se relaciona con גֵּר (extranjero).",
    rootWithNikkud: "גֵּר",
    rootWithoutNikkud: "גר",
    rootLetters: "ג־ר",
    rootIdeaA: "La idea principal es 'extranjero'.",
    rootIdeaB: "El nombre recuerda una experiencia personal de Moshé.",
    buildLine1: "Tipo: nombre propio.",
    buildLine2: "Conecta con la frase: 'fui extranjero'.",
    buildLine3: "El nombre tiene significado narrativo.",
    personInfo: "Clase: nombre propio con explicación en el texto.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">גֵּרְשֹׁם</span>.',
    tensePresent: "<strong>Función:</strong> nombrar al hijo.",
    tenseFuture: "<strong>Lectura guiada:</strong> nombre + motivo.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Nombre", he: "גֵּרְשֹׁם", es: "Gershom" }],
  },
  "ki-amar": {
    ...baseWord,
    title: "כִּי אָמַר - porque dijo",
    heroHebrew: "כִּי אָמַר",
    heroSpanish: "Porque dijo",
    meaningMain: "<strong>כִּי אָמַר</strong> = porque dijo.",
    meaningAlt: "Explica el motivo del nombre Gershom.",
    rootWithNikkud: "כִּי + אָמַר",
    rootWithoutNikkud: "כי + אמר",
    rootLetters: "א־מ־ר",
    rootIdeaA: "Conector causal + verbo decir.",
    rootIdeaB: "Introduce cita o explicación.",
    buildLine1: "כִּי = porque.",
    buildLine2: "אָמַר = dijo (pasado, 3ª masc.).",
    buildLine3: "Juntas: porque dijo.",
    personInfo: "Conjugación verbal: אָמַר = 3ª singular masculina.",
    tensePast: '<strong>Pasado:</strong> <span class="hebrew-word" dir="rtl">אָמַר</span> - él dijo.',
    tensePresent: '<strong>Presente:</strong> <span class="hebrew-word" dir="rtl">אוֹמֵר</span> - él dice.',
    tenseFuture: '<strong>Futuro:</strong> <span class="hebrew-word" dir="rtl">יֹאמַר</span> - él dirá.',
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "כִּי אָמַר", es: "porque dijo" }],
  },
  "ger-hayiti": {
    ...baseWord,
    title: "גֵּר הָיִיתִי - fui extranjero",
    heroHebrew: "גֵּר הָיִיתִי",
    heroSpanish: "Fui extranjero",
    meaningMain: "<strong>גֵּר הָיִיתִי</strong> = fui extranjero.",
    meaningAlt: "Describe cómo se sentía Moshé en tierra ajena.",
    rootWithNikkud: "גֵּר + הָיִיתִי",
    rootWithoutNikkud: "גר + הייתי",
    rootLetters: "ג־ר / ה־י־ה",
    rootIdeaA: "גֵּר = extranjero.",
    rootIdeaB: "הָיִיתִי = yo fui (pasado).",
    buildLine1: "Nombre: גֵּר (extranjero).",
    buildLine2: "Verbo: הָיִיתִי (yo fui).",
    buildLine3: "Frase completa: fui extranjero.",
    personInfo: "Conjugación: הָיִיתִי = 1ª persona singular (yo).",
    tensePast: '<strong>Pasado:</strong> <span class="hebrew-word" dir="rtl">הָיִיתִי</span> - yo fui.',
    tensePresent: '<strong>Presente:</strong> <span class="hebrew-word" dir="rtl">אֲנִי</span> + estado actual.',
    tenseFuture: '<strong>Futuro:</strong> <span class="hebrew-word" dir="rtl">אֶהְיֶה</span> - yo seré/estaré.',
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "גֵּר הָיִיתִי", es: "fui extranjero" }],
  },
  beeretz: {
    ...baseWord,
    title: "בְּאֶרֶץ - en tierra",
    heroHebrew: "בְּאֶרֶץ",
    heroSpanish: "En tierra",
    meaningMain: "<strong>בְּאֶרֶץ</strong> = en tierra.",
    meaningAlt: "בְּ = en, אֶרֶץ = tierra/país.",
    rootWithNikkud: "בְּ + אֶרֶץ",
    rootWithoutNikkud: "ב + ארץ",
    rootLetters: "א־ר־ץ",
    rootIdeaA: "Preposición + sustantivo.",
    rootIdeaB: "Indica lugar.",
    buildLine1: "בְּ = en.",
    buildLine2: "אֶרֶץ = tierra/país.",
    buildLine3: "Juntas: en tierra.",
    personInfo: "Clase: complemento de lugar.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">בְּאֶרֶץ</span>.',
    tensePresent: "<strong>Función:</strong> indicar ubicación.",
    tenseFuture: "<strong>Lectura guiada:</strong> lugar donde ocurrió.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "בְּאֶרֶץ נׇכְרִיָּה", es: "en tierra extraña" }],
  },
  nochriyah: {
    ...baseWord,
    title: "נׇכְרִיָּה - extraña / extranjera",
    heroHebrew: "נׇכְרִיָּה",
    heroSpanish: "Extraña / extranjera",
    meaningMain: "<strong>נׇכְרִיָּה</strong> = extraña, extranjera.",
    meaningAlt: "Describe una tierra que no es la propia.",
    rootWithNikkud: "נׇכְרִיָּה",
    rootWithoutNikkud: "נכריה",
    rootLetters: "נ־כ־ר",
    rootIdeaA: "Idea de ajeno/foráneo.",
    rootIdeaB: "Completa la frase de Gershom.",
    buildLine1: "Tipo: adjetivo.",
    buildLine2: "Califica a אֶרֶץ (tierra).",
    buildLine3: "Frase: tierra extranjera.",
    personInfo: "Clase: adjetivo calificativo.",
    tensePast: '<strong>Forma:</strong> <span class="hebrew-word" dir="rtl">נׇכְרִיָּה</span>.',
    tensePresent: "<strong>Función:</strong> describir el lugar.",
    tenseFuture: "<strong>Lectura guiada:</strong> tierra ajena/no propia.",
    conjugationRows: [],
    bilingualPractice: [{ subject: "Lectura", he: "נׇכְרִיָּה", es: "extranjera / extraña" }],
  },
};

const rashiData = {
  r0: {
    title: "וישמע יתרו",
    hebrew: "מַה שְּׁמוּעָה שָׁמַע וּבָא? קְרִיעַת יַם סוּף וּמִלְחֶמֶת עֲמָלֵק.",
    idea: "Rashi pregunta qué noticia movió a Yitró a venir.",
    simple: "Yitró vino porque escuchó dos cosas enormes: el mar y Amalek.",
    lemmas: ["vaishma", "yitro"],
  },
  r2: {
    title: "יתרו",
    hebrew: "שֶׁבַע שֵׁמוֹת נִקְרְאוּ לוֹ: רְעוּאֵל, יֶתֶר, יִתְרוֹ, חוֹבָב, חֶבֶר, קֵינִי, פּוּטִיאֵל.",
    idea: "Rashi enseña que los nombres muestran etapas del camino de Yitró.",
    simple: "Cada nombre de Yitró enseña algo distinto sobre él.",
    lemmas: ["yitro"],
  },
  r3: {
    title: "חתן משה",
    hebrew: "כָּאן הָיָה יִתְרוֹ מִתְכַּבֵּד בְּמֹשֶׁה.",
    idea: "La Torá muestra honor mutuo entre Yitró y Moshé.",
    simple: "Aquí Yitró recibe honor por su relación con Moshé.",
    lemmas: ["choten", "moshe"],
  },
  r4: {
    title: "למשה ולישראל",
    hebrew: "שָׁקוּל מֹשֶׁה כְּנֶגֶד כָּל יִשְׂרָאֵל.",
    idea: "Rashi destaca el peso espiritual de Moshé.",
    simple: "Moshé tiene un lugar central para todo Israel.",
    lemmas: ["lemoshe", "uleyisrael"],
  },
  r5: {
    title: "את כל אשר עשה",
    hebrew: "לָהֶם בִּירִידַת הַמָּן וּבַבְּאֵר וּבַעֲמָלֵק.",
    idea: "Rashi recuerda varios actos de ayuda de Dios.",
    simple: "No fue un solo milagro: hubo maná, agua y protección.",
    lemmas: ["kol-asher", "asah"],
  },
  r6: {
    title: "כי הוציא ה׳",
    hebrew: "זוֹ גְּדוֹלָה עַל כֻּלָּם.",
    idea: "La salida de Egipto se presenta como la mayor.",
    simple: "Rashi dice que sacar a Israel de Egipto fue lo más grande.",
    lemmas: ["ki-hotzi", "et-yisrael", "mimitzrayim"],
  },
  r1: {
    title: "אַחַר שִׁלּוּחֶיהָ",
    hebrew:
      "כְּשֶׁאָמַר לוֹ הַקָּבָּ\"ה בְּמִדְיָן לֵךְ שֻׁב מִצְרָיִם וַיִּקַּח מֹשֶׁה אֶת אִשְׁתּוֹ וְאֶת בָּנָיו וְגוֹ' וְיָצָא אַהֲרֹן לִקְרָאתוֹ וַיִּפְגְּשֵׁהוּ בְּהַר הָאֱלֹהִים אָמַר לוֹ מִי הֵם הַלָּלוּ אָמַר לוֹ זוֹ הִיא אִשְׁתִּי שֶׁנָּשָׂאתִי בְּמִדְיָן וְאֵלּוּ בָנַי אָמַר לוֹ וְהֵיכָן אַתָּה מוֹלִיכָן אָמַר לוֹ לְמִצְרַיִם אָמַר לוֹ עַל הָרִאשׁוֹנִים אָנוּ מִצְטַעֲרִים וְאַתָּה בָא לְהוֹסִיף עֲלֵיהֶם אָמַר לָהּ לְכִי לְבֵית אָבִיךְ נָטְלָה שְׁנֵי בָנֶיהָ וְהָלְכָה לָהּ",
    idea:
      "Rashi explica que Moshé había llevado a su familia hacia Egipto, pero Aharón le indicó que el pueblo ya sufría y mejor que regresaran; por eso Tziporá fue enviada de vuelta.",
    simple:
      "En palabras simples: primero Moshé llevó a su esposa e hijos; después los devolvió a casa de su padre. Por eso el pasuk dice 'después de haberla enviado'.",
    lemmas: ["achar", "shilucheha", "vayikach", "tzipora", "eshet"],
  },
};

const literalGlossary = {
  "כְּשֶׁאָמַר": { literal: "cuando dijo", note: "Introduce el momento de la historia." },
  "לוֹ": { literal: "a él", note: "Se repite: indica a quién hablan." },
  "הַקָּבָּ\"ה": { literal: "el Santo, bendito sea", note: "Forma abreviada reverente para Dios." },
  "בְּמִדְיָן": { literal: "en Midyán", note: "Lugar donde ocurre esta parte." },
  "לֵךְ": { literal: "ve", note: "Orden en singular masculino." },
  "שֻׁב": { literal: "vuelve", note: "Otra orden: regresar." },
  "מִצְרָיִם": { literal: "a Egipto", note: "Destino mencionado en el relato." },
  "וַיִּקַּח": { literal: "y tomó", note: "Acción narrativa en pasado." },
  "מֹשֶׁה": { literal: "Moshé", note: "Personaje principal aquí." },
  "אֶת": { literal: "marca de objeto directo", note: "Partícula gramatical del hebreo bíblico." },
  "אִשְׁתּוֹ": { literal: "su esposa", note: "Esposa de Moshé en este contexto." },
  "וְאֶת": { literal: "y (marca de objeto directo)", note: "Conector + partícula." },
  "בָּנָיו": { literal: "sus hijos", note: "Los hijos de Moshé." },
  "וְגוֹ'": { literal: "etcétera", note: "Abreviatura de continuación del versículo." },
  "וְיָצָא": { literal: "y salió", note: "Nueva acción narrativa." },
  "אַהֲרֹן": { literal: "Aharón", note: "Hermano de Moshé." },
  "לִקְרָאתוֹ": { literal: "a su encuentro", note: "Fue a encontrarse con él." },
  "וַיִּפְגְּשֵׁהוּ": { literal: "y se encontró con él", note: "Encuentro entre Aharón y Moshé." },
  "בְּהַר": { literal: "en el monte", note: "Indica lugar." },
  "הָאֱלֹהִים": { literal: "de Dios", note: "Expresión: el monte de Dios." },
  "מִי": { literal: "quiénes", note: "Pregunta." },
  "הֵם": { literal: "ellos", note: "Pronombre plural." },
  "הַלָּלוּ": { literal: "estos", note: "Señala personas cercanas." },
  "זוֹ": { literal: "esta", note: "Pronombre femenino singular." },
  "הִיא": { literal: "ella es", note: "Pronombre de 3ª persona femenina." },
  "אִשְׁתִּי": { literal: "mi esposa", note: "Respuesta de Moshé." },
  "שֶׁנָּשָׂאתִי": { literal: "que tomé/me casé", note: "Acción pasada de Moshé." },
  "וְאֵלּוּ": { literal: "y estos", note: "Presenta a los hijos." },
  "בָנַי": { literal: "mis hijos", note: "Primera persona singular con sufijo." },
  "וְהֵיכָן": { literal: "y a dónde", note: "Pregunta de dirección." },
  "אַתָּה": { literal: "tú", note: "Segunda persona masculina singular." },
  "מוֹלִיכָן": { literal: "los llevas", note: "Verbo con sufijo de objeto plural." },
  "לְמִצְרַיִם": { literal: "a Egipto", note: "Destino del que hablan." },
  "עַל": { literal: "sobre", note: "Aquí: respecto de." },
  "הָרִאשׁוֹנִים": { literal: "los primeros", note: "Los que ya están sufriendo." },
  "אָנוּ": { literal: "nosotros", note: "Primera persona plural." },
  "מִצְטַעֲרִים": { literal: "sufrimos", note: "Dolor/padecimiento en presente." },
  "בָא": { literal: "vienes", note: "Acción dirigida a 2ª persona." },
  "לְהוֹסִיף": { literal: "a añadir", note: "Sumar algo más." },
  "עֲלֵיהֶם": { literal: "sobre ellos", note: "Añadir carga a otros." },
  "לָהּ": { literal: "a ella", note: "Referencia a Tziporá." },
  "לְכִי": { literal: "ve", note: "Imperativo femenino singular." },
  "לְבֵית": { literal: "a casa de", note: "Inicio de sintagma posesivo." },
  "אָבִיךְ": { literal: "tu padre", note: "2ª persona femenina singular." },
  "נָטְלָה": { literal: "tomó", note: "Pasado femenino singular." },
  "שְׁנֵי": { literal: "dos de", note: "Forma constructa de número." },
  "בָנֶיהָ": { literal: "sus hijos", note: "Sufijo femenino singular: de ella." },
  "וְהָלְכָה": { literal: "y se fue", note: "Acción final de Tziporá." },
  "שמות": { literal: "Éxodo", note: "Nombre del libro de la Torá (Sefer Shemot)." },
  "שופטים": { literal: "Jueces", note: "Nombre del libro bíblico Shoftim." },
  "מכילתא": { literal: "Mekhilta", note: "Midrash halájico clásico sobre Shemot." },
  "ד'": { literal: "4", note: "Referencia al capítulo (guímel/abreviatura de número)." },
  "אמר": { literal: "dijo", note: "Verbo en pasado, 3ª singular." },
  "בירידת": { literal: "en la bajada de", note: "Introduce el descenso del maná." },
  "במשה": { literal: "con/en Moshé", note: "Preposición ב + Moshé." },
  "גדולה": { literal: "grande", note: "Importancia destacada." },
  "היה": { literal: "fue/era", note: "Verbo ser/estar en pasado." },
  "המן": { literal: "el maná", note: "Alimento dado en el desierto." },
  "ואתה": { literal: "y tú", note: "Conector + pronombre." },
  "ובא": { literal: "y vino", note: "Conector + verbo venir." },
  "ובבאר": { literal: "y en el pozo", note: "Conector + preposición + pozo." },
  "ובעמלק": { literal: "y con Amalek", note: "Conector + referencia a Amalek." },
  "ומלחמת": { literal: "y guerra de", note: "Conector + sustantivo constructo." },
  "חבר": { literal: "Jéver", note: "Uno de los nombres listados por Rashi." },
  "חובב": { literal: "Jovav", note: "Nombre de Yitró en Rashi." },
  "ים": { literal: "mar", note: "En contexto: mar de Suf." },
  "ישראל": { literal: "Israel", note: "Nombre del pueblo." },
  "יתר": { literal: "Yéter", note: "Uno de los nombres de Yitró." },
  "יתרו": { literal: "Yitró", note: "Nombre principal del personaje." },
  "כאן": { literal: "aquí", note: "Indica este punto del texto." },
  "כל": { literal: "todo", note: "Cuantificador total." },
  "כלם": { literal: "todos", note: "Plural: todos ellos." },
  "כנגד": { literal: "frente a / equivalente a", note: "Comparación de peso." },
  "להם": { literal: "a ellos", note: "Preposición + pronombre plural." },
  "לו": { literal: "a él", note: "Preposición + pronombre singular." },
  "מה": { literal: "qué", note: "Palabra interrogativa." },
  "מתכבד": { literal: "se honra / se enaltece", note: "Forma reflexiva en presente." },
  "נקראו": { literal: "fueron llamados", note: "Pasivo plural en pasado." },
  "סוף": { literal: "Suf", note: "Nombre propio del mar." },
  "עמלק": { literal: "Amalek", note: "Pueblo enemigo de Israel." },
  "פוטיאל": { literal: "Putiel", note: "Uno de los nombres listados." },
  "קיני": { literal: "Kení", note: "Uno de los nombres listados." },
  "קריעת": { literal: "apertura de", note: "Como en apertura del mar." },
  "רעואל": { literal: "Reuel", note: "Uno de los nombres listados." },
  "שבע": { literal: "siete", note: "Número siete." },
  "שמועה": { literal: "noticia / rumor oído", note: "Algo que se escuchó." },
  "שמע": { literal: "escuchó", note: "Verbo en pasado." },
  "שקול": { literal: "equivale / pesa como", note: "Comparación de valor." },
};

function toLearningPair(data) {
  if (!data) {
    return {
      literal: "Traducción literal pendiente",
      nonLiteral: "Idea pendiente: la añadimos en la siguiente capa.",
    };
  }
  return {
    literal: data.literal || "Traducción literal pendiente",
    nonLiteral: data.nonLiteral || data.note || "Idea no literal pendiente.",
  };
}

function normalizeHebrewToken(token) {
  return token
    .replace(TEAMIM_REGEX, "")
    .replace(NIKKUD_REGEX, "")
    .replace(/[?.!,:;"'״׳]/g, "")
    .trim();
}

const normalizedLiteralGlossary = {};
Object.entries(literalGlossary).forEach(([key, value]) => {
  normalizedLiteralGlossary[normalizeHebrewToken(key)] = value;
});

const supportStrategies = {
  dislexia: { title: "Dislexia", tips: ["Usar lectura en eco: adulto lee una frase, niño repite.", "Reducir cantidad: estudiar 3-4 palabras por bloque.", "Marcar color fijo: verbo en verde, nombre en azul.", "Permitir respuesta oral antes de escribir."] },
  tdah: { title: "TDAH", tips: ["Micro-rondas de 3 minutos por palabra.", "Objetivo visible: ahora solo una palabra.", "Pausas motoras breves entre rondas.", "Refuerzo inmediato al completar cada paso."] },
  lenguaje: { title: "Retraso del lenguaje", tips: ["Frases cortas: palabra -> significado -> ejemplo.", "Preguntas cerradas primero (si/no o elegir).", "Apoyar con gesto y repetición espaciada.", "Modelar oración simple con la palabra aprendida."] },
  tea: { title: "TEA", tips: ["Rutina estable: mismo orden en cada sesión.", "Anticipación visual: mostrar pasos antes de empezar.", "Evitar sobrecarga: pocos estímulos por pantalla.", "Cerrar cada bloque con resumen concreto."] },
  memoria: { title: "Memoria de trabajo", tips: ["Regla 1-1-1: una palabra, una idea, un ejemplo.", "Repaso acumulativo: nueva + anterior.", "Tarjetas de recuperación activa.", "Pedir explicación con sus propias palabras."] },
};

const words = [...document.querySelectorAll(".pasuk .word")];
const clickableWords = [...document.querySelectorAll(".pasuk .clickable[data-lemma]")];
const rashiButtons = [...document.querySelectorAll(".rashi-item")];
const lemmaToRashiId = {};
let activeStudyContext = "General";
const LIVE_NOTES_KEY = "torah_para_abraham_live_notes_v2";
const QUIZ_PROGRESS_KEY = "torah_para_abraham_quiz_progress_v2";
const GAME_STATS_KEY = "torah_para_abraham_game_stats_v2";
const DAILY_MISSION_KEY = "torah_para_abraham_daily_mission_v2";
const CLASS_MEMORY_KEY = "torah_para_abraham_class_memory_v2";
const CLOUD_CONFIG_KEY = "torah_para_abraham_cloud_config_v1";
const LEGACY_KEYS = {
  liveNotes: "torah_live_notes_v1",
  quizProgress: "torah_quiz_progress_v1",
  gameStats: "torah_game_stats_v1",
  dailyMission: "torah_daily_mission_v1",
  classMemory: "torah_class_memory_v1",
};
let liveNotes = [];
let currentLemma = "vaishma";
const timelineData = [
  {
    id: "t1",
    short: "Moshé huye",
    when: "Mucho antes (Shemot 2)",
    title: "1) Moshé se escapa y llega a Midyán",
    text: "Moshé tiene que huir de Egipto. Llega a Midyán y allí conoce a Yitró.",
    pasuk: "Todavía no es 18:1–2. Esto es para entender la historia.",
    rashi: "Esto ayuda a entender por qué Yitró aparece después.",
    rashiIds: [],
  },
  {
    id: "t2",
    short: "Se casa",
    when: "Después en Midyán",
    title: "2) Moshé se casa con Tziporá",
    text: "Tziporá es hija de Yitró. Desde aquí, Yitró es el suegro de Moshé.",
    pasuk: "Ahora se entiende mejor la frase חֹתֵן מֹשֶׁה (suegro de Moshé).",
    rashi: "Conecta con Rashi sobre יִתְרוֹ y חֹתֵן מֹשֶׁה.",
    rashiIds: ["r2", "r3"],
  },
  {
    id: "t3",
    short: "Misión",
    when: "Luego (Shemot 3–4)",
    title: "3) Dios manda a Moshé volver a Egipto",
    text: "Dios le dice a Moshé: vuelve a Egipto para ayudar a Israel.",
    pasuk: "Esto prepara lo que Yitró va a oír en 18:1.",
    rashi: "Es parte del fondo del Rashi de 18:2.",
    rashiIds: ["r1"],
  },
  {
    id: "t4",
    short: "Separación",
    when: "En el camino (Rashi 18:2)",
    title: "4) Tziporá vuelve con Yitró (según Rashi)",
    text: "Rashi explica que Tziporá y los niños vuelven a casa de Yitró por un tiempo.",
    pasuk: "Por eso en 18:2 dice: אַחַר שִׁלּוּחֶיהָ (después de enviarla).",
    rashi: "Este es el Rashi más importante para el segundo pasuk.",
    rashiIds: ["r1"],
  },
  {
    id: "t5",
    short: "Yitró escucha",
    when: "Ahora sí: Shemot 18:1",
    title: "5) Pasuk 1: Yitró escucha noticias grandes",
    text: "Yitró oye que Dios sacó a Israel de Egipto. También oye sobre milagros.",
    pasuk: "וַיִּשְׁמַע יִתְרוֹ ... כִּי הוֹצִיא ה׳ אֶת־יִשְׂרָאֵל",
    rashi: "Rashi dice qué oyó: mar de Suf y guerra con Amalek.",
    rashiIds: ["r0", "r5", "r6"],
  },
  {
    id: "t6",
    short: "Yitró trae familia",
    when: "Shemot 18:2",
    title: "6) Pasuk 2: Yitró trae a Tziporá",
    text: "Yitró lleva a Tziporá (esposa de Moshé) para reunirse otra vez.",
    pasuk: "וַיִּקַּח יִתְרוֹ ... אֶת־צִפֹּרָה ... אַחַר שִׁלּוּחֶיהָ",
    rashi: "Rashi explica por qué primero se separaron y luego se juntan.",
    rashiIds: ["r1"],
  },
];

const studyRouteSteps = [
  "1. Lee el pasuk plano",
  "2. Pulsa palabras importantes",
  "3. Mira raíz y letras añadidas",
  "4. Lee Rashi corto",
  "5. Haz test rápido",
];

const quizBanks = {
  p1: {
    title: "Quiz Pasuk 1",
    questions: [
      { q: "¿Qué significa וַיִּשְׁמַע?", options: ["Y escuchó", "Y tomó", "Y volvió"], answer: 0, explain: "וַיִּשְׁמַע = y escuchó." },
      { q: "¿Qué raíz tiene וַיִּשְׁמַע?", options: ["ש־מ־ע", "ל־ק־ח", "א־מ־ר"], answer: 0, explain: "La raíz de escuchar es ש־מ־ע." },
      { q: "En pasuk 1, ¿qué oyó Yitró según Rashi?", options: ["Solo una cosa", "Mar de Suf y Amalek", "Nada importante"], answer: 1, explain: "Rashi cita dos eventos grandes." },
      { q: "כִּי־הוֹצִיא significa...", options: ["porque sacó", "porque tomó", "porque volvió"], answer: 0, explain: "כִּי = porque, הוֹצִיא = sacó." },
      { q: "¿Quién sacó a Israel de Egipto?", options: ["Yitró", "Moshé", "ה׳"], answer: 2, explain: "El pasuk dice יְהֹוָה." },
    ],
  },
  p2: {
    title: "Quiz Pasuk 2",
    questions: [
      { q: "וַיִּקַּח significa...", options: ["y escuchó", "y tomó", "y dijo"], answer: 1, explain: "וַיִּקַּח = y tomó." },
      { q: "¿A quién tomó Yitró?", options: ["Aharón", "Tziporá", "Gershom"], answer: 1, explain: "Tomó a Tziporá, esposa de Moshé." },
      { q: "אַחַר שִׁלּוּחֶיהָ habla de...", options: ["una fiesta", "después de enviarla", "una guerra"], answer: 1, explain: "Rashi explica esa separación temporal." },
      { q: "חֹתֵן מֹשֶׁה significa...", options: ["hijo de Moshé", "suegro de Moshé", "hermano de Moshé"], answer: 1, explain: "חֹתֵן = suegro." },
      { q: "¿Este pasuk tiene foco en Rashi?", options: ["Sí, en אַחַר שִׁלּוּחֶיהָ", "No hay Rashi", "Solo en יְהֹוָה"], answer: 0, explain: "Rashi se concentra en esa frase." },
    ],
  },
  p3: {
    title: "Quiz Pasuk 3",
    questions: [
      { q: "¿Cuántos hijos menciona?", options: ["Uno", "Dos", "Tres"], answer: 1, explain: "שְׁנֵי = dos." },
      { q: "¿Cómo se llama uno de los hijos?", options: ["Gershom", "Eliezer", "Aharón"], answer: 0, explain: "El pasuk dice גֵּרְשֹׁם." },
      { q: "גֵּר הָיִיתִי significa...", options: ["soy rey", "fui extranjero", "fui pastor"], answer: 1, explain: "Moshé dice que fue extranjero." },
      { q: "בְּאֶרֶץ נׇכְרִיָּה significa...", options: ["en tierra santa", "en tierra extraña", "en la montaña"], answer: 1, explain: "נׇכְרִיָּה = extraña/extranjera." },
      { q: "¿Este pasuk tiene Rashi cargado aquí?", options: ["Sí", "No"], answer: 1, explain: "Ahora mismo este pasuk está sin Rashi." },
    ],
  },
};
quizBanks.all = {
  title: "Quiz Acumulativo (1+2+3)",
  questions: [...quizBanks.p1.questions, ...quizBanks.p2.questions, ...quizBanks.p3.questions],
};

let quizState = {
  bank: "p1",
  index: 0,
  score: 0,
  answered: false,
  attempts: {},
};
let gameState = {
  avatar: "🦁",
  points: 0,
  stars: 0,
  streak: 0,
  bestStreak: 0,
  correctTotal: 0,
  wrongTotal: 0,
  challenges: {
    streak3: false,
    score80: false,
    allDone: false,
  },
};
let dailyMission = {
  date: new Date().toISOString().slice(0, 10),
  correctToday: 0,
  target: 5,
};
let classMemoryEntries = [];
let cloudConfig = {
  url: "",
  anonKey: "",
  studentId: "abraham",
};
let currentBookPage = -1;
const avatarOptions = ["🦁", "🦊", "🐯", "🐼", "🐬", "🦄"];

words.forEach((word) => {
  word.dataset.original = word.textContent;
});

Object.entries(rashiData).forEach(([rashiId, data]) => {
  data.lemmas.forEach((lemma) => {
    if (!lemmaToRashiId[lemma]) lemmaToRashiId[lemma] = rashiId;
  });
});

clickableWords.forEach((button) => {
  const lemma = button.dataset.lemma;
  if (lemmaToRashiId[lemma]) {
    button.classList.add("has-rashi");
    button.title = "Esta palabra tiene comentario de Rashi";
  }
});

function stripMarks(text, removeNikkud, removeTeamim) {
  let result = text;
  if (removeTeamim) result = result.replace(TEAMIM_REGEX, "");
  if (removeNikkud) result = result.replace(NIKKUD_REGEX, "");
  return result;
}

function renderPasuk() {
  const removeNikkud = !toggleNikkud.checked;
  const removeTeamim = !toggleTeamim.checked;
  words.forEach((word) => {
    word.textContent = stripMarks(word.dataset.original, removeNikkud, removeTeamim);
  });
}

function renderConjugationRows(rows) {
  conjugationRows.innerHTML = "";
  if (!rows.length) {
    conjugationRows.innerHTML =
      '<div class="conj-row"><span class="label pronoun-chip pron-nosotros">Función</span><span class="person-chip">No verbal</span><span>Esta palabra se estudia por su valor en la frase, no por conjugación verbal.</span></div>';
    return;
  }
  rows.forEach((row) => {
    const line = document.createElement("div");
    line.className = "conj-row";
    const label = document.createElement("span");
    label.className = `label pronoun-chip pron-${row.pronoun || "yo"}`;
    label.textContent = `${row.label}:`;
    const person = document.createElement("span");
    person.className = "person-chip";
    person.textContent = row.person || "—";
    const form = document.createElement("span");
    form.className = "form-hebrew";
    form.innerHTML = row.formHtml;
    line.appendChild(label);
    line.appendChild(person);
    line.appendChild(form);
    conjugationRows.appendChild(line);
  });
}

function renderExamples(examples) {
  buildExamples.innerHTML = "";
  examples.forEach((example) => {
    const p = document.createElement("p");
    p.innerHTML = example;
    buildExamples.appendChild(p);
  });
  if (!examples.length) return;
  const legend = document.createElement("div");
  legend.className = "gram-legend";
  legend.innerHTML = '<span class="token root-mark">Raíz</span><span class="token add-mark">Letras añadidas</span>';
  buildExamples.appendChild(legend);
}

function renderBilingualPractice(rows) {
  bilingualRows.innerHTML = "";
  if (!rows || !rows.length) {
    bilingualRows.innerHTML =
      '<div class="bilingual-item"><div class="bilingual-subject">Uso en contexto</div><p class="bilingual-he"><strong>Hebreo:</strong> מִלָּה בְּתוֹךְ הַפָּסוּק</p><p class="bilingual-es"><strong>Español:</strong> Palabra usada dentro del pasuk.</p></div>';
    return;
  }
  rows.forEach((row) => {
    const item = document.createElement("div");
    item.className = "bilingual-item";
    item.innerHTML = `
      <div class="bilingual-subject">${row.subject}</div>
      <p class="bilingual-he"><strong>Hebreo:</strong> ${row.he}</p>
      <p class="bilingual-es"><strong>Español:</strong> ${row.es}</p>
    `;
    bilingualRows.appendChild(item);
  });
}

function clearWordHighlights() {
  words.forEach((word) => word.classList.remove("linked-highlight"));
}

function highlightLemmas(lemmas) {
  clearWordHighlights();
  lemmas.forEach((lemma) => {
    document.querySelectorAll(`.pasuk [data-lemma="${lemma}"]`).forEach((target) => {
      target.classList.add("linked-highlight");
    });
  });
}

function setWordContent(lemma) {
  const item = wordData[lemma] || baseWord;
  currentLemma = lemma;
  wordTitle.textContent = "Estudio de palabra";
  wordHeroHebrew.textContent = item.heroHebrew || "—";
  wordHeroSpanish.textContent = item.heroSpanish || "Traducción";
  wordMeaningMain.innerHTML = item.meaningMain;
  wordMeaningAlt.innerHTML = item.meaningAlt;
  wordSimpleText.textContent = item.simpleText;
  wordSimpleNote.textContent = item.simpleNote;
  rootWithNikkud.textContent = item.rootWithNikkud;
  rootWithoutNikkud.textContent = item.rootWithoutNikkud;
  rootLetters.textContent = item.rootLetters;
  rootIdeaA.textContent = item.rootIdeaA;
  rootIdeaB.textContent = item.rootIdeaB;
  buildLine1.innerHTML = item.buildLine1;
  buildLine2.innerHTML = item.buildLine2;
  buildLine3.innerHTML = item.buildLine3;
  conjugationTitle.textContent = `Cómo se forma ${item.heroHebrew || "la palabra"}`;
  personInfo.textContent = item.personInfo || "Persona gramatical: no aplica.";
  tensePast.innerHTML = item.tensePast;
  tensePresent.innerHTML = item.tensePresent;
  tenseFuture.innerHTML = item.tenseFuture;
  renderConjugationRows(item.conjugationRows || []);
  renderExamples(item.examples || []);
  renderBilingualPractice(item.bilingualPractice || []);
  if (easyExplainText) {
    easyExplainText.hidden = true;
    easyExplainText.textContent = "";
  }
}

function getEasyExplain(lemma) {
  const item = wordData[lemma] || baseWord;
  return `En súper fácil: ${item.heroSpanish || "esta palabra"} quiere decir ${item.meaningAlt?.replace(/<[^>]+>/g, "") || "algo importante"} y nos ayuda a entender la historia.`;
}

function setActiveTab(tabId) {
  const tabs = [...wordDialog.querySelectorAll(".tab-btn")];
  const panels = [...wordDialog.querySelectorAll(".tab-panel")];
  tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === tabId));
  panels.forEach((p) => p.classList.toggle("active", p.id === tabId));
  panels.forEach((panel) => {
    const card = panel.querySelector("[data-card]");
    if (card) card.classList.remove("flipped");
  });
}

function setRashi(rashiId) {
  const item = rashiData[rashiId];
  if (!item) return;
  rashiTitle.textContent = `רש״י: ${item.title}`;
  rashiHebrewPlain.textContent = item.hebrew;
  rashiHebrewText.innerHTML = "";
  rashiIdea.textContent = item.idea;
  rashiSimple.textContent = item.simple;
  rashiLinkedWords.innerHTML = "";
  rashiLiteralCard.classList.remove("flipped");
  rashiLiteralFront.textContent = "Pulsa una palabra de Rashi para verla literal.";
  rashiLiteralBack.textContent = "Aquí verás una explicación corta de estudio.";
  rashiButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.rashiId === rashiId));

  const tokens = item.hebrew.split(/\s+/).map((token) => token.trim()).filter(Boolean);
  tokens.forEach((token) => {
    const clean = normalizeHebrewToken(token);
    const btn = document.createElement("button");
    btn.className = "rashi-word-btn";
    btn.textContent = token;
    btn.dir = "rtl";
    btn.lang = "he";
    btn.addEventListener("click", () => {
      rashiHebrewText.querySelectorAll(".rashi-word-btn").forEach((w) => w.classList.remove("active"));
      btn.classList.add("active");
      const raw = literalGlossary[clean] || normalizedLiteralGlossary[clean] || null;
      const data = toLearningPair(raw);
      rashiLiteralFront.innerHTML = `<strong>${clean}</strong> · <strong>Literal:</strong> ${data.literal}`;
      rashiLiteralBack.textContent = `No literal (idea): ${data.nonLiteral}`;
      rashiLiteralCard.classList.remove("flipped");
    });
    rashiHebrewText.appendChild(btn);
  });

  item.lemmas.forEach((lemma) => {
    const chip = document.createElement("button");
    chip.className = "chip-btn";
    chip.textContent = wordData[lemma]?.title || lemma;
    chip.addEventListener("click", () => {
      setWordContent(lemma);
      setActiveTab("tab-translation");
    });
    rashiLinkedWords.appendChild(chip);
  });

  highlightLemmas(item.lemmas);
}

function openWordDialog(lemma, openRashiDirect = false) {
  setWordContent(lemma);
  const mappedRashi = lemmaToRashiId[lemma] || "r0";
  setRashi(mappedRashi);
  setActiveTab(openRashiDirect ? "tab-rashi" : "tab-translation");
  if (!wordDialog.open) wordDialog.showModal();
}

function setLiveContextFromButton(button) {
  const lemma = button?.dataset?.lemma || "general";
  const word = wordData[lemma];
  const block = button?.closest(".pasuk-block");
  const pasukTitle = block?.querySelector("h3")?.textContent?.trim() || "General";
  const wordTitleText = word?.heroHebrew || button?.textContent?.trim() || "palabra";
  activeStudyContext = `${pasukTitle} · ${wordTitleText}`;
  if (liveContext) liveContext.textContent = activeStudyContext;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[ch]));
}

function saveLiveNotes() {
  localStorage.setItem(LIVE_NOTES_KEY, JSON.stringify(liveNotes));
}

function readStorageWithFallback(primaryKey, legacyKey) {
  const primary = localStorage.getItem(primaryKey);
  if (primary) return primary;
  if (!legacyKey) return null;
  const legacy = localStorage.getItem(legacyKey);
  if (legacy) {
    localStorage.setItem(primaryKey, legacy);
    return legacy;
  }
  return null;
}

function loadLiveNotes() {
  try {
    const raw = readStorageWithFallback(LIVE_NOTES_KEY, LEGACY_KEYS.liveNotes);
    liveNotes = raw ? JSON.parse(raw) : [];
  } catch {
    liveNotes = [];
  }
}

function renderLiveNotes() {
  if (!liveNotesList) return;
  liveNotesList.innerHTML = "";
  if (!liveNotes.length) {
    liveNotesList.innerHTML = '<p class="live-empty">No hay correcciones guardadas todavía.</p>';
    return;
  }
  liveNotes
    .slice()
    .reverse()
    .forEach((note) => {
      const item = document.createElement("article");
      item.className = "live-note-item";
      item.innerHTML = `
        <p class="live-note-meta"><strong>${escapeHtml(note.context)}</strong> · ${escapeHtml(note.time)}</p>
        <p class="live-note-text">${escapeHtml(note.text)}</p>
      `;
      liveNotesList.appendChild(item);
    });
}

function addLiveNote() {
  const text = (liveInput?.value || "").trim();
  if (!text) return;
  const now = new Date();
  liveNotes.push({
    context: activeStudyContext,
    text,
    time: now.toLocaleString("es-ES"),
  });
  saveLiveNotes();
  renderLiveNotes();
  liveInput.value = "";
}

function buildNotesForClipboard() {
  if (!liveNotes.length) return "No hay correcciones guardadas.";
  return liveNotes
    .map((n, i) => `${i + 1}. [${n.time}] ${n.context}\n- ${n.text}`)
    .join("\n\n");
}

async function copyNotesToClipboard() {
  const text = buildNotesForClipboard();
  try {
    await navigator.clipboard.writeText(text);
    copyLiveNotes.textContent = "Copiado";
    setTimeout(() => {
      copyLiveNotes.textContent = "Copiar para Codex";
    }, 1200);
  } catch {
    copyLiveNotes.textContent = "Copia manual";
    if (liveInput) liveInput.value = text;
  }
}

function renderSupportProfile(profileKey) {
  const profile = supportStrategies[profileKey];
  if (!profile) return;
  supportTitle.textContent = profile.title;
  supportList.innerHTML = "";
  profile.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    supportList.appendChild(li);
  });
  supportProfiles.querySelectorAll(".chip-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.profile === profileKey);
  });
}

function renderTimelineStep(stepId) {
  const step = timelineData.find((s) => s.id === stepId) || timelineData[0];
  timelineTitle.textContent = step.title;
  timelineWhen.textContent = step.when;
  timelineText.textContent = step.text;
  timelinePasuk.innerHTML = `<strong>Conexión con pasuk:</strong> ${step.pasuk}`;
  timelineRashi.innerHTML = `<strong>Conexión con Rashi:</strong> ${step.rashi}`;
  if (timelineLinks) {
    timelineLinks.innerHTML = "";
    if (step.rashiIds && step.rashiIds.length) {
      step.rashiIds.forEach((id) => {
        const r = rashiData[id];
        if (!r) return;
        const btn = document.createElement("button");
        btn.className = "chip-btn";
        btn.textContent = `Abrir Rashi: ${r.title}`;
        btn.addEventListener("click", () => {
          setRashi(id);
          if (!wordDialog.open) wordDialog.showModal();
          setActiveTab("tab-rashi");
          activeStudyContext = `Rashi · ${r.title}`;
          if (liveContext) liveContext.textContent = activeStudyContext;
        });
        timelineLinks.appendChild(btn);
      });
    } else {
      const note = document.createElement("p");
      note.className = "live-empty";
      note.textContent = "En este paso solo estamos viendo contexto general.";
      timelineLinks.appendChild(note);
    }
  }
  timelineSteps.querySelectorAll(".timeline-step").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.stepId === step.id);
  });
}

function initTimeline() {
  if (!timelineSteps) return;
  timelineData.forEach((step, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline-step";
    btn.dataset.stepId = step.id;
    btn.innerHTML = `${index + 1}. ${step.short}<small>${step.when}</small>`;
    btn.addEventListener("click", () => renderTimelineStep(step.id));
    timelineSteps.appendChild(btn);
  });
  renderTimelineStep("t1");
}

function saveQuizProgress() {
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(quizState.attempts));
}

function saveGameStats() {
  localStorage.setItem(GAME_STATS_KEY, JSON.stringify(gameState));
}

function saveDailyMission() {
  localStorage.setItem(DAILY_MISSION_KEY, JSON.stringify(dailyMission));
}

function loadQuizProgress() {
  try {
    const raw = readStorageWithFallback(QUIZ_PROGRESS_KEY, LEGACY_KEYS.quizProgress);
    quizState.attempts = raw ? JSON.parse(raw) : {};
  } catch {
    quizState.attempts = {};
  }
}

function loadGameStats() {
  try {
    const raw = readStorageWithFallback(GAME_STATS_KEY, LEGACY_KEYS.gameStats);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    gameState = {
      ...gameState,
      ...parsed,
      challenges: { ...gameState.challenges, ...(parsed.challenges || {}) },
    };
  } catch {
    // keep defaults
  }
}

function loadDailyMission() {
  try {
    const raw = readStorageWithFallback(DAILY_MISSION_KEY, LEGACY_KEYS.dailyMission);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const today = new Date().toISOString().slice(0, 10);
    if (parsed.date !== today) {
      dailyMission = { date: today, correctToday: 0, target: 5 };
      saveDailyMission();
      return;
    }
    dailyMission = { ...dailyMission, ...parsed };
  } catch {
    // keep defaults
  }
}

function saveClassMemoryEntries() {
  localStorage.setItem(CLASS_MEMORY_KEY, JSON.stringify(classMemoryEntries));
}

function loadClassMemoryEntries() {
  try {
    const raw = readStorageWithFallback(CLASS_MEMORY_KEY, LEGACY_KEYS.classMemory);
    classMemoryEntries = raw ? JSON.parse(raw) : [];
  } catch {
    classMemoryEntries = [];
  }
}

function saveCloudConfigState() {
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(cloudConfig));
}

function loadCloudConfigState() {
  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    cloudConfig = {
      ...cloudConfig,
      ...parsed,
    };
  } catch {
    // keep defaults
  }
}

function renderCloudConfigState() {
  if (cloudUrl) cloudUrl.value = cloudConfig.url || "";
  if (cloudAnon) cloudAnon.value = cloudConfig.anonKey || "";
  if (cloudStudent) cloudStudent.value = cloudConfig.studentId || "abraham";
  if (cloudSyncStatus) {
    cloudSyncStatus.textContent = cloudConfig.url && cloudConfig.anonKey
      ? `Estado: nube configurada (${cloudConfig.studentId || "abraham"})`
      : "Estado: local (sin nube)";
  }
}

function collectLearningState() {
  return {
    quizAttempts: quizState.attempts || {},
    gameState,
    dailyMission,
    classMemoryEntries,
    liveNotes,
    savedAt: new Date().toISOString(),
    app: "torah-para-abraham",
    version: 1,
  };
}

function applyLearningState(state) {
  if (!state || typeof state !== "object") return;
  if (state.quizAttempts && typeof state.quizAttempts === "object") {
    quizState.attempts = state.quizAttempts;
  }
  if (state.gameState && typeof state.gameState === "object") {
    gameState = {
      ...gameState,
      ...state.gameState,
      challenges: { ...gameState.challenges, ...(state.gameState.challenges || {}) },
    };
  }
  if (state.dailyMission && typeof state.dailyMission === "object") {
    dailyMission = {
      ...dailyMission,
      ...state.dailyMission,
    };
  }
  if (Array.isArray(state.classMemoryEntries)) classMemoryEntries = state.classMemoryEntries;
  if (Array.isArray(state.liveNotes)) liveNotes = state.liveNotes;

  saveQuizProgress();
  saveGameStats();
  saveDailyMission();
  saveClassMemoryEntries();
  saveLiveNotes();
  renderProgressPanel();
  renderGameStats();
  renderDailyMission();
  renderClassMemory();
  renderLiveNotes();
}

function readCloudFormIntoState() {
  cloudConfig.url = (cloudUrl?.value || "").trim().replace(/\/+$/, "");
  cloudConfig.anonKey = (cloudAnon?.value || "").trim();
  cloudConfig.studentId = ((cloudStudent?.value || "").trim() || "abraham").toLowerCase();
}

function setCloudStatus(message) {
  if (cloudSyncStatus) cloudSyncStatus.textContent = `Estado: ${message}`;
}

function getCloudEndpoint() {
  const base = cloudConfig.url;
  if (!base) return "";
  return `${base}/rest/v1/abraham_progress`;
}

async function pushProgressToCloud() {
  readCloudFormIntoState();
  if (!cloudConfig.url || !cloudConfig.anonKey || !cloudConfig.studentId) {
    setCloudStatus("faltan URL/key/ID alumno");
    return;
  }
  saveCloudConfigState();
  renderCloudConfigState();
  const endpoint = getCloudEndpoint();
  setCloudStatus("subiendo progreso...");
  try {
    const res = await fetch(`${endpoint}?on_conflict=student_id`, {
      method: "POST",
      headers: {
        apikey: cloudConfig.anonKey,
        Authorization: `Bearer ${cloudConfig.anonKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify([{
        student_id: cloudConfig.studentId,
        payload: collectLearningState(),
        updated_at: new Date().toISOString(),
      }]),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    setCloudStatus(`subido ✅ (${cloudConfig.studentId})`);
  } catch (error) {
    setCloudStatus(`error al subir (${error.message})`);
  }
}

async function pullProgressFromCloud() {
  readCloudFormIntoState();
  if (!cloudConfig.url || !cloudConfig.anonKey || !cloudConfig.studentId) {
    setCloudStatus("faltan URL/key/ID alumno");
    return;
  }
  saveCloudConfigState();
  renderCloudConfigState();
  const endpoint = getCloudEndpoint();
  setCloudStatus("descargando progreso...");
  try {
    const res = await fetch(
      `${endpoint}?student_id=eq.${encodeURIComponent(cloudConfig.studentId)}&select=payload,updated_at&order=updated_at.desc&limit=1`,
      {
        headers: {
          apikey: cloudConfig.anonKey,
          Authorization: `Bearer ${cloudConfig.anonKey}`,
        },
      },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    const payload = Array.isArray(rows) && rows[0] ? rows[0].payload : null;
    if (!payload) {
      setCloudStatus("no hay datos en nube para ese alumno");
      return;
    }
    applyLearningState(payload);
    setCloudStatus(`descargado ✅ (${cloudConfig.studentId})`);
  } catch (error) {
    setCloudStatus(`error al descargar (${error.message})`);
  }
}

function buildClassSnapshot() {
  const quizDone = Object.entries(quizState.attempts || {})
    .map(([key, data]) => `${key.toUpperCase()}: ${data.last || 0}%`)
    .join(" · ");
  return {
    points: gameState.points || 0,
    stars: gameState.stars || 0,
    streak: gameState.streak || 0,
    quiz: quizDone || "sin quiz aún",
  };
}

function renderClassMemory() {
  if (!classMemoryList) return;
  classMemoryList.innerHTML = "";
  if (!classMemoryEntries.length) {
    classMemoryList.innerHTML = '<p class="live-empty">Todavía no hay clases guardadas.</p>';
    return;
  }
  classMemoryEntries
    .slice()
    .reverse()
    .forEach((entry) => {
      const item = document.createElement("article");
      item.className = "memory-item";
      item.innerHTML = `
        <p class="memory-meta"><strong>${escapeHtml(entry.topic)}</strong> · ${escapeHtml(entry.time)}</p>
        <p class="memory-notes">${escapeHtml(entry.notes || "Sin notas adicionales.")}</p>
        <p class="memory-snapshot">Puntos: ${entry.snapshot.points} · Estrellas: ${entry.snapshot.stars} · Racha: ${entry.snapshot.streak}</p>
        <p class="memory-snapshot">Quiz: ${escapeHtml(entry.snapshot.quiz)}</p>
      `;
      classMemoryList.appendChild(item);
    });
}

function addClassMemoryEntry() {
  const topic = (memoryTopic?.value || "").trim() || "Clase de Torá";
  const notes = (memoryNotes?.value || "").trim();
  const now = new Date();
  classMemoryEntries.push({
    topic,
    notes,
    time: now.toLocaleString("es-ES"),
    snapshot: buildClassSnapshot(),
  });
  saveClassMemoryEntries();
  renderClassMemory();
  if (memoryTopic) memoryTopic.value = "";
  if (memoryNotes) memoryNotes.value = "";
}

function setCoachMessage(msg, mood = "neutral") {
  if (coachBubble) coachBubble.textContent = msg;
  if (coachFace) {
    const faces = { neutral: "🦉", happy: "😺", wow: "🤩", oops: "🫶", fire: "🔥" };
    coachFace.textContent = faces[mood] || "🦉";
  }
  document.body.classList.remove("kids-correct", "kids-wrong", "kids-streak");
  if (mood === "happy") document.body.classList.add("kids-correct");
  if (mood === "oops") document.body.classList.add("kids-wrong");
  if (mood === "fire") document.body.classList.add("kids-streak");
  setTimeout(() => document.body.classList.remove("kids-correct", "kids-wrong", "kids-streak"), 500);
}

function renderDailyMission() {
  if (!dailyMissionLabel || !dailyMissionFill) return;
  const done = Math.min(dailyMission.correctToday, dailyMission.target);
  dailyMissionLabel.textContent = `Misión diaria: ${done}/${dailyMission.target}`;
  dailyMissionFill.style.width = `${Math.round((done / dailyMission.target) * 100)}%`;
}

function updateChallenges(lastPercent = null) {
  if (gameState.streak >= 3) gameState.challenges.streak3 = true;
  if (lastPercent !== null && lastPercent >= 80) gameState.challenges.score80 = true;
  const done = ["p1", "p2", "p3"].every((k) => (quizState.attempts[k]?.best || 0) >= 60);
  if (done) gameState.challenges.allDone = true;
}

function renderGameStats() {
  if (!gameStats || !challengeList) return;
  gameStats.innerHTML = "";
  const badges = [
    `⭐ Estrellas: ${gameState.stars}`,
    `🪙 Puntos: ${gameState.points}`,
    `🔥 Racha: ${gameState.streak}`,
    `🏆 Mejor racha: ${gameState.bestStreak}`,
  ];
  badges.forEach((txt) => {
    const b = document.createElement("span");
    b.className = "chip-btn";
    b.textContent = txt;
    gameStats.appendChild(b);
  });

  const level = Math.floor(gameState.points / 100) + 1;
  const xpInLevel = gameState.points % 100;
  if (avatarPreview) avatarPreview.textContent = gameState.avatar || "🦁";
  if (levelText) levelText.textContent = `Nivel ${level}`;
  if (xpFill) xpFill.style.width = `${xpInLevel}%`;

  challengeList.innerHTML = "";
  const items = [
    { key: "streak3", label: "Reto 1: 3 respuestas seguidas correctas" },
    { key: "score80", label: "Reto 2: sacar 80% o más en un quiz" },
    { key: "allDone", label: "Reto 3: completar Pasuk 1, 2 y 3 (mínimo 60%)" },
  ];
  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "rashi-item";
    row.textContent = `${gameState.challenges[it.key] ? "✅" : "⬜"} ${it.label}`;
    challengeList.appendChild(row);
  });
}

function initAvatarPicker() {
  if (!avatarPicker) return;
  avatarPicker.innerHTML = "";
  avatarOptions.forEach((av) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.textContent = av;
    btn.addEventListener("click", () => {
      gameState.avatar = av;
      saveGameStats();
      renderGameStats();
    });
    avatarPicker.appendChild(btn);
  });
}

function switchScreen(screenId) {
  appScreens.forEach((screen) => {
    screen.hidden = screen.id !== screenId;
  });
  screenTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.screen === screenId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initScreenNav() {
  if (!screenTabs.length || !appScreens.length) return;
  screenTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchScreen(tab.dataset.screen));
  });
  switchScreen("screen-pasuk");
}

function setBookPage(pageIndex) {
  if (!bookPages.length) return;
  const safeIndex = Math.max(0, Math.min(pageIndex, bookPages.length - 1));
  if (bookFlip) {
    if (safeIndex === currentBookPage) return;
    const isForward = BOOK_IS_RTL ? safeIndex < currentBookPage : safeIndex > currentBookPage;
    if (bookHand) {
      bookHand.classList.remove("hand-next", "hand-prev");
      void bookHand.offsetWidth;
      const handClass = BOOK_IS_RTL
        ? (isForward ? "hand-prev" : "hand-next")
        : (isForward ? "hand-next" : "hand-prev");
      bookHand.classList.add(handClass);
    }
    const diff = safeIndex - currentBookPage;
    if (Math.abs(diff) === 1) {
      const goForward = BOOK_IS_RTL ? bookFlip.flipPrev.bind(bookFlip) : bookFlip.flipNext.bind(bookFlip);
      const goBackward = BOOK_IS_RTL ? bookFlip.flipNext.bind(bookFlip) : bookFlip.flipPrev.bind(bookFlip);
      (isForward ? goForward : goBackward)("top");
    } else {
      bookFlip.turnToPage(safeIndex);
      currentBookPage = safeIndex;
      bookIndexButtons.forEach((btn) => {
        btn.classList.toggle("active", Number(btn.dataset.page) === currentBookPage);
      });
      if (bookPageLabel) bookPageLabel.textContent = `Página ${currentBookPage + 1} de ${bookPages.length}`;
      if (bookPrev) bookPrev.disabled = BOOK_IS_RTL ? currentBookPage === bookPages.length - 1 : currentBookPage === 0;
      if (bookNext) bookNext.disabled = BOOK_IS_RTL ? currentBookPage === 0 : currentBookPage === bookPages.length - 1;
    }
    return;
  }
  const previousIndex = currentBookPage;
  if (safeIndex === previousIndex) return;
  const previousPage = bookPages[previousIndex];
  const nextPage = bookPages[safeIndex];
  currentBookPage = safeIndex;
  const isForward = safeIndex > previousIndex;
  const enterClass = BOOK_IS_RTL
    ? (isForward ? "turn-prev" : "turn-next")
    : (isForward ? "turn-next" : "turn-prev");
  const leaveClass = BOOK_IS_RTL
    ? (isForward ? "leaving-prev" : "leaving-next")
    : (isForward ? "leaving-next" : "leaving-prev");
  if (bookHand && previousIndex >= 0) {
    bookHand.classList.remove("hand-next", "hand-prev");
    // Force reflow so repeated clicks replay the animation every time.
    void bookHand.offsetWidth;
    const handClass = BOOK_IS_RTL
      ? (isForward ? "hand-prev" : "hand-next")
      : (isForward ? "hand-next" : "hand-prev");
    bookHand.classList.add(handClass);
  }
  bookPages.forEach((page) => {
    page.classList.remove("turn-next", "turn-prev", "leaving-next", "leaving-prev");
  });
  if (previousPage) {
    previousPage.classList.add(leaveClass);
  }
  if (nextPage) {
    nextPage.classList.add("active", enterClass);
  }
  setTimeout(() => {
    bookPages.forEach((page, index) => {
      page.classList.remove("turn-next", "turn-prev", "leaving-next", "leaving-prev");
      if (index !== safeIndex) page.classList.remove("active");
    });
  }, 360);
  bookIndexButtons.forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.page) === safeIndex);
  });
  if (bookPageLabel) bookPageLabel.textContent = `Página ${safeIndex + 1} de ${bookPages.length}`;
  if (bookPrev) bookPrev.disabled = BOOK_IS_RTL ? safeIndex === bookPages.length - 1 : safeIndex === 0;
  if (bookNext) bookNext.disabled = BOOK_IS_RTL ? safeIndex === 0 : safeIndex === bookPages.length - 1;
}

function initBookReader() {
  if (!bookReader || !bookPages.length) return;
  const pagesContainer = bookReader.querySelector(".book-pages");
  if (!pagesContainer) return;
  if (window.St && window.St.PageFlip) {
    pagesContainer.classList.remove("manual");
    pagesContainer.classList.add("enhanced");
    const contentHeight = Math.max(...bookPages.map((p) => p.scrollHeight));
    const flipHeight = Math.max(560, Math.min(920, contentHeight + 96));
    const flipMinHeight = Math.max(460, Math.min(860, flipHeight - 80));
    const flipMaxHeight = Math.max(flipHeight, 980);
    bookPages.forEach((p, i) => {
      p.classList.remove("active", "turn-next", "turn-prev", "leaving-next", "leaving-prev");
      p.setAttribute("data-density", i === 0 || i === bookPages.length - 1 ? "hard" : "soft");
    });
    bookFlip = new window.St.PageFlip(pagesContainer, {
      width: 900,
      height: flipHeight,
      size: "stretch",
      minWidth: 280,
      maxWidth: 1100,
      minHeight: flipMinHeight,
      maxHeight: flipMaxHeight,
      maxShadowOpacity: 0.5,
      showCover: false,
      mobileScrollSupport: false,
      clickEventForward: true,
      useMouseEvents: true,
      usePortrait: true,
      drawShadow: true,
      flippingTime: 900,
      autoSize: true,
      showPageCorners: true,
      disableFlipByClick: false,
      startPage: BOOK_START_INDEX,
    });
    bookFlip.loadFromHTML(bookPages);
    bookFlip.on("flip", (event) => {
      currentBookPage = Number(event.data) || 0;
      bookIndexButtons.forEach((btn) => {
        btn.classList.toggle("active", Number(btn.dataset.page) === currentBookPage);
      });
      if (bookPageLabel) bookPageLabel.textContent = `Página ${currentBookPage + 1} de ${bookPages.length}`;
      if (bookPrev) bookPrev.disabled = BOOK_IS_RTL ? currentBookPage === bookPages.length - 1 : currentBookPage === 0;
      if (bookNext) bookNext.disabled = BOOK_IS_RTL ? currentBookPage === 0 : currentBookPage === bookPages.length - 1;
    });
    currentBookPage = BOOK_START_INDEX;
    if (bookHand) bookHand.hidden = true;
    if (bookPageLabel) bookPageLabel.textContent = `Página ${currentBookPage + 1} de ${bookPages.length}`;
    if (bookPrev) {
      bookPrev.disabled = BOOK_IS_RTL ? currentBookPage === bookPages.length - 1 : currentBookPage === 0;
      bookPrev.addEventListener("click", () =>
        setBookPage(BOOK_IS_RTL ? currentBookPage + 1 : currentBookPage - 1),
      );
    }
    if (bookNext) {
      bookNext.disabled = BOOK_IS_RTL ? currentBookPage === 0 : currentBookPage === bookPages.length - 1;
      bookNext.addEventListener("click", () =>
        setBookPage(BOOK_IS_RTL ? currentBookPage - 1 : currentBookPage + 1),
      );
    }
    bookIndexButtons.forEach((btn) => {
      btn.addEventListener("click", () => setBookPage(Number(btn.dataset.page)));
    });
    return;
  }
  pagesContainer.classList.add("manual");
  if (pagesContainer) {
    const maxHeight = Math.max(...bookPages.map((p) => p.scrollHeight));
    pagesContainer.style.minHeight = `${maxHeight + 16}px`;
  }
  setBookPage(BOOK_START_INDEX);
  if (bookPrev) {
    bookPrev.addEventListener("click", () =>
      setBookPage(BOOK_IS_RTL ? currentBookPage + 1 : currentBookPage - 1),
    );
  }
  if (bookNext) {
    bookNext.addEventListener("click", () =>
      setBookPage(BOOK_IS_RTL ? currentBookPage - 1 : currentBookPage + 1),
    );
  }
  bookIndexButtons.forEach((btn) => {
    btn.addEventListener("click", () => setBookPage(Number(btn.dataset.page)));
  });
}

function renderStudyRoute() {
  if (!studyRoute) return;
  studyRoute.innerHTML = "";
  studyRouteSteps.forEach((label) => {
    const item = document.createElement("div");
    item.className = "timeline-step active";
    item.textContent = label;
    studyRoute.appendChild(item);
  });
}

function getCurrentBank() {
  return quizBanks[quizState.bank] || quizBanks.p1;
}

function renderQuizScore() {
  const bank = getCurrentBank();
  const total = bank.questions.length;
  const percent = total ? Math.round((quizState.score / total) * 100) : 0;
  const best = quizState.attempts[quizState.bank]?.best || 0;
  quizScore.textContent = `Puntuación: ${quizState.score}/${total} (${percent}%). Mejor marca: ${best}%`;
}

function renderQuizQuestion() {
  const bank = getCurrentBank();
  const q = bank.questions[quizState.index];
  if (!q) {
    quizQuestion.textContent = "¡Quiz terminado!";
    quizOptions.innerHTML = "";
    quizFeedback.hidden = false;
    const total = bank.questions.length;
    const percent = total ? Math.round((quizState.score / total) * 100) : 0;
    const prev = quizState.attempts[quizState.bank]?.best || 0;
    const prevData = quizState.attempts[quizState.bank] || { best: 0, last: 0, attempts: 0 };
    quizState.attempts[quizState.bank] = {
      best: Math.max(prevData.best || 0, percent),
      last: percent,
      attempts: (prevData.attempts || 0) + 1,
    };
    if (percent >= 80) gameState.stars += 1;
    gameState.points += Math.max(5, Math.round(percent / 5));
    updateChallenges(percent);
    saveQuizProgress();
    saveGameStats();
    saveDailyMission();
    renderProgressPanel();
    renderGameStats();
    renderDailyMission();
    if (percent >= 80) setCoachMessage("¡Excelente resultado de quiz!", "wow");
    else if (percent >= 60) setCoachMessage("Buen trabajo. Vamos al siguiente reto.", "happy");
    else setCoachMessage("Vamos a repasar y mejorar esa nota.", "neutral");
    quizFeedback.textContent = `Resultado final: ${percent}%. Repite para mejorar lo que fallaste.`;
    renderQuizScore();
    return;
  }
  quizTitle.textContent = bank.title;
  quizProgress.textContent = `Pregunta ${quizState.index + 1} de ${bank.questions.length}`;
  quizQuestion.textContent = q.q;
  quizOptions.innerHTML = "";
  quizFeedback.hidden = true;
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "rashi-item quiz-option";
    btn.textContent = opt;
    btn.disabled = quizState.answered;
    btn.addEventListener("click", () => {
      if (quizState.answered) return;
      quizState.answered = true;
      const ok = idx === q.answer;
      if (ok) {
        quizState.score += 1;
        gameState.points += 10;
        gameState.streak += 1;
        gameState.correctTotal += 1;
        dailyMission.correctToday += 1;
        if (gameState.streak % 5 === 0) {
          gameState.stars += 1;
          gameState.points += 20;
          setCoachMessage("¡Racha épica! Ganaste estrella bonus.", "fire");
        } else {
          setCoachMessage("¡Bien! Sigue así.", "happy");
        }
      } else {
        gameState.points = Math.max(0, gameState.points - 2);
        gameState.streak = 0;
        gameState.wrongTotal += 1;
        setCoachMessage("No pasa nada. Inténtalo otra vez.", "oops");
      }
      gameState.bestStreak = Math.max(gameState.bestStreak, gameState.streak);
      updateChallenges();
      saveGameStats();
      saveDailyMission();
      renderGameStats();
      renderDailyMission();
      [...quizOptions.children].forEach((child, cidx) => {
        child.classList.toggle("good", cidx === q.answer);
        if (cidx === idx && !ok) child.classList.add("bad");
        child.disabled = true;
      });
      quizFeedback.hidden = false;
      quizFeedback.textContent = `${ok ? "✅ Correcto." : "❌ Incorrecto."} ${q.explain}`;
      renderQuizScore();
    });
    quizOptions.appendChild(btn);
  });
  renderQuizScore();
}

function selectQuizBank(bankKey) {
  quizState.bank = bankKey;
  quizState.index = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizSelector.querySelectorAll(".chip-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.bank === bankKey);
  });
  renderQuizQuestion();
}

function initQuiz() {
  if (!quizSelector) return;
  loadQuizProgress();
  loadGameStats();
  loadDailyMission();
  loadClassMemoryEntries();
  loadCloudConfigState();
  const banks = [
    ["p1", "Pasuk 1"],
    ["p2", "Pasuk 2"],
    ["p3", "Pasuk 3"],
    ["all", "Acumulativo"],
  ];
  banks.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.dataset.bank = key;
    btn.textContent = label;
    btn.addEventListener("click", () => selectQuizBank(key));
    quizSelector.appendChild(btn);
  });
  selectQuizBank("p1");
  renderProgressPanel();
  renderGameStats();
  renderDailyMission();
  renderClassMemory();
  renderCloudConfigState();
}

function renderProgressPanel() {
  if (!progressRows || !progressSummary || !progressBadges || !progressWeak) return;
  const banks = ["p1", "p2", "p3", "all"];
  const labels = { p1: "Pasuk 1", p2: "Pasuk 2", p3: "Pasuk 3", all: "Acumulativo" };
  progressRows.innerHTML = "";
  progressBadges.innerHTML = "";
  let completed = 0;
  let totalAttempts = 0;
  let weak = [];
  banks.forEach((k) => {
    const d = quizState.attempts[k];
    if (!d) return;
    completed += 1;
    totalAttempts += d.attempts || 0;
    if ((d.last || 0) < 70) weak.push(labels[k]);
    const row = document.createElement("div");
    row.className = "rashi-item";
    row.textContent = `${labels[k]} · Última: ${d.last || 0}% · Mejor: ${d.best || 0}% · Intentos: ${d.attempts || 0}`;
    progressRows.appendChild(row);
  });

  const badgeA = document.createElement("span");
  badgeA.className = "chip-btn";
  badgeA.textContent = `Quizzes hechos: ${completed}/4`;
  progressBadges.appendChild(badgeA);
  const badgeB = document.createElement("span");
  badgeB.className = "chip-btn";
  badgeB.textContent = `Intentos totales: ${totalAttempts}`;
  progressBadges.appendChild(badgeB);

  progressSummary.textContent = completed
    ? `Muy bien. Ya completaste ${completed} bloque(s). Sigue subiendo tu mejor marca.`
    : "Aún no hay resultados. Empieza por Pasuk 1.";
  progressWeak.textContent = weak.length
    ? `Repasar ahora: ${weak.join(", ")}.`
    : "¡Excelente! No hay bloques débiles ahora mismo.";
}

function initSupportProfiles() {
  if (!supportProfiles) return;
  const labels = [["dislexia", "Dislexia"], ["tdah", "TDAH"], ["lenguaje", "Lenguaje"], ["tea", "TEA"], ["memoria", "Memoria"]];
  labels.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.dataset.profile = key;
    btn.textContent = label;
    btn.addEventListener("click", () => renderSupportProfile(key));
    supportProfiles.appendChild(btn);
  });
  renderSupportProfile("dislexia");
}

clickableWords.forEach((button) => {
  button.addEventListener("click", () => {
    const lemma = button.dataset.lemma;
    const hasRashi = Boolean(lemmaToRashiId[lemma]);
    setLiveContextFromButton(button);
    setCoachMessage("Muy bien. Ahora mira traducción, raíz y ejemplo.", "neutral");
    openWordDialog(lemma, hasRashi);
  });
});

rashiButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeStudyContext = `Rashi · ${button.textContent.trim()}`;
    if (liveContext) liveContext.textContent = activeStudyContext;
    setRashi(button.dataset.rashiId);
    setActiveTab("tab-rashi");
  });
});

wordDialog.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

wordDialog.querySelectorAll("[data-flip]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.closest(".tab-panel");
    const card = panel?.querySelector("[data-card]");
    if (card) card.classList.toggle("flipped");
  });
});

closeWordDialogButton.addEventListener("click", () => {
  wordDialog.close();
  clearWordHighlights();
});

wordDialog.addEventListener("click", (event) => {
  const rect = wordDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) {
    wordDialog.close();
    clearWordHighlights();
  }
});

toggleNikkud.addEventListener("change", renderPasuk);
toggleTeamim.addEventListener("change", renderPasuk);
toggleTranslation.addEventListener("change", () => {
  translationBlocks.forEach((block) => {
    block.hidden = !toggleTranslation.checked;
  });
});
toggleNeae.addEventListener("change", () => {
  document.body.classList.toggle("neae-mode", toggleNeae.checked);
  if (toggleNeae.checked) neaeLegendDialog.showModal();
});
openNeaeLegend.addEventListener("click", () => neaeLegendDialog.showModal());
closeNeaeLegend.addEventListener("click", () => neaeLegendDialog.close());
neaeLegendDialog.addEventListener("click", (event) => {
  const rect = neaeLegendDialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) neaeLegendDialog.close();
});

if (toggleLivePanel) {
  toggleLivePanel.addEventListener("click", () => {
    const isHidden = livePanel.hasAttribute("hidden");
    if (isHidden) {
      livePanel.removeAttribute("hidden");
      toggleLivePanel.textContent = "−";
    } else {
      livePanel.setAttribute("hidden", "");
      toggleLivePanel.textContent = "+";
    }
  });
}
if (saveLiveNote) saveLiveNote.addEventListener("click", addLiveNote);
if (copyLiveNotes) copyLiveNotes.addEventListener("click", copyNotesToClipboard);
if (clearLiveNotes) {
  clearLiveNotes.addEventListener("click", () => {
    liveNotes = [];
    saveLiveNotes();
    renderLiveNotes();
  });
}
if (liveInput) {
  liveInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") addLiveNote();
  });
}
if (easyExplainBtn) {
  easyExplainBtn.addEventListener("click", () => {
    easyExplainText.hidden = false;
    easyExplainText.textContent = getEasyExplain(currentLemma);
  });
}
if (quizNext) {
  quizNext.addEventListener("click", () => {
    const bank = getCurrentBank();
    if (quizState.index >= bank.questions.length) return;
    if (!quizState.answered) return;
    quizState.index += 1;
    quizState.answered = false;
    renderQuizQuestion();
  });
}
if (quizRestart) {
  quizRestart.addEventListener("click", () => selectQuizBank(quizState.bank));
}
if (saveClassMemory) {
  saveClassMemory.addEventListener("click", addClassMemoryEntry);
}
if (clearClassMemory) {
  clearClassMemory.addEventListener("click", () => {
    classMemoryEntries = [];
    saveClassMemoryEntries();
    renderClassMemory();
  });
}
if (saveCloudConfig) {
  saveCloudConfig.addEventListener("click", () => {
    readCloudFormIntoState();
    saveCloudConfigState();
    renderCloudConfigState();
    setCloudStatus(`config guardada (${cloudConfig.studentId})`);
  });
}
if (syncPush) {
  syncPush.addEventListener("click", pushProgressToCloud);
}
if (syncPull) {
  syncPull.addEventListener("click", pullProgressFromCloud);
}

initSupportProfiles();
initTimeline();
renderStudyRoute();
initQuiz();
initAvatarPicker();
initScreenNav();
initBookReader();
renderPasuk();
loadLiveNotes();
renderLiveNotes();
renderProgressPanel();
renderGameStats();
