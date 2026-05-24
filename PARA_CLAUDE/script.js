const pasukContainer = document.getElementById("pasukContainer");
const wordDialog = document.getElementById("wordDialog");
const closeWordDialogButton = document.getElementById("closeDialog");

const toggleNikkud = document.getElementById("toggleNikkud");
const toggleTeamim = document.getElementById("toggleTeamim");
const toggleTranslation = document.getElementById("toggleTranslation");
const toggleNeae = document.getElementById("toggleNeae");
const openNeaeLegend = document.getElementById("openNeaeLegend");
const neaeLegendDialog = document.getElementById("neaeLegendDialog");
const closeNeaeLegend = document.getElementById("closeNeaeLegend");
const translationBlock = document.querySelector(".translation");

const wordTitle = document.getElementById("wordTitle");
const wordHeroHebrew = document.getElementById("wordHeroHebrew");
const wordHeroSpanish = document.getElementById("wordHeroSpanish");
const wordMeaningMain = document.getElementById("wordMeaningMain");
const wordMeaningAlt = document.getElementById("wordMeaningAlt");
const wordSimpleText = document.getElementById("wordSimpleText");
const wordSimpleNote = document.getElementById("wordSimpleNote");
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
    simpleText: "Nos dice que Yitró recibió una noticia importante.",
    simpleNote: "Es una acción que ya pasó.",
    rootWithNikkud: "שָׁמַע",
    rootWithoutNikkud: "שמע",
    rootLetters: "ש־מ־ע",
    rootIdeaA: "La raíz ש־מ־ע se relaciona con oír, escuchar y entender.",
    rootIdeaB: "Muchas palabras del tema 'escuchar' salen de esta raíz.",
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
};

const rashiData = {
  r1: { title: "וישמע יתרו", hebrew: "מַה שְּׁמוּעָה שָׁמַע וּבָא? קְרִיעַת יַם סוּף וּמִלְחֶמֶת עֲמָלֵק.", idea: "Rashi pregunta qué noticia movió a Yitró: dos eventos enormes.", simple: "Yitró vino porque escuchó milagros muy grandes: el mar y Amalek.", lemmas: ["vaishma", "yitro"] },
  r2: { title: "יתרו", hebrew: "שֶׁבַע שֵׁמוֹת נִקְרְאוּ לוֹ... הוֹסִיפוֹ לוֹ אוֹת אַחַת.", idea: "Yitró tuvo varios nombres con significados distintos.", simple: "Cada nombre cuenta algo de su camino espiritual.", lemmas: ["yitro"] },
  r3: { title: "חתן משה", hebrew: "כָּאן הָיָה יִתְרוֹ מִתְכַּבֵּד בְּמֹשֶׁה...", idea: "La Torá muestra honor mutuo entre Moshé y Yitró.", simple: "Aquí Yitró recibe honor por ser suegro de Moshé.", lemmas: ["choten", "moshe"] },
  r4: { title: "למשה ולישראל", hebrew: "שָׁקוּל מֹשֶׁה כְּנֶגֶד כָּל יִשְׂרָאֵל.", idea: "Moshé tiene un peso espiritual grande para el pueblo.", simple: "Rashi destaca la importancia del liderazgo de Moshé.", lemmas: ["lemoshe", "uleyisrael"] },
  r5: { title: "את כל אשר עשה", hebrew: "לָהֶם בִּירִידַת הַמָּן וּבַבְּאֵר וּבַעֲמָלֵק.", idea: "No fue un solo milagro; fueron muchos actos de ayuda.", simple: "Hubo maná, agua y protección en la guerra.", lemmas: ["kol-asher", "asah"] },
  r6: { title: "כי הוציא ה׳", hebrew: "זוֹ גְּדוֹלָה עַל כֻּלָּם.", idea: "La salida de Egipto es la más grande de todas.", simple: "Rashi la presenta como base de todo lo demás.", lemmas: ["ki-hotzi", "et-yisrael"] },
};

const literalGlossary = {
  "מַה": { literal: "¿qué?", note: "Palabra de pregunta." },
  "שְּׁמוּעָה": { literal: "noticia / lo oído", note: "Algo que se escuchó." },
  "שָׁמַע": { literal: "escuchó", note: "Verbo en pasado, él escuchó." },
  "וּבָא": { literal: "y vino", note: "Conector וּ = y, luego בא = vino." },
  "קְרִיעַת": { literal: "apertura de", note: "En Rashi: apertura del mar." },
  "יַם": { literal: "mar", note: "Aquí: mar de Suf." },
  "סוּף": { literal: "Suf (junco)", note: "Nombre del Mar de Suf." },
  "וּמִלְחֶמֶת": { literal: "y guerra de", note: "Conector וּ + מלחמת." },
  "עֲמָלֵק": { literal: "Amalek", note: "Pueblo enemigo de Israel." },
};

const supportStrategies = {
  dislexia: { title: "Dislexia", tips: ["Usar lectura en eco: adulto lee una frase, niño repite.", "Reducir cantidad: estudiar 3-4 palabras por bloque.", "Marcar color fijo: verbo en verde, nombre en azul.", "Permitir respuesta oral antes de escribir."] },
  tdah: { title: "TDAH", tips: ["Micro-rondas de 3 minutos por palabra.", "Objetivo visible: ahora solo una palabra.", "Pausas motoras breves entre rondas.", "Refuerzo inmediato al completar cada paso."] },
  lenguaje: { title: "Retraso del lenguaje", tips: ["Frases cortas: palabra -> significado -> ejemplo.", "Preguntas cerradas primero (si/no o elegir).", "Apoyar con gesto y repetición espaciada.", "Modelar oración simple con la palabra aprendida."] },
  tea: { title: "TEA", tips: ["Rutina estable: mismo orden en cada sesión.", "Anticipación visual: mostrar pasos antes de empezar.", "Evitar sobrecarga: pocos estímulos por pantalla.", "Cerrar cada bloque con resumen concreto."] },
  memoria: { title: "Memoria de trabajo", tips: ["Regla 1-1-1: una palabra, una idea, un ejemplo.", "Repaso acumulativo: nueva + anterior.", "Tarjetas de recuperación activa.", "Pedir explicación con sus propias palabras."] },
};

const words = [...pasukContainer.querySelectorAll(".word")];
const clickableWords = [...pasukContainer.querySelectorAll(".clickable[data-lemma]")];
const rashiButtons = [...document.querySelectorAll(".rashi-item")];
const lemmaToRashiId = {};

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
    const target = pasukContainer.querySelector(`[data-lemma="${lemma}"]`);
    if (target) target.classList.add("linked-highlight");
  });
}

function setWordContent(lemma) {
  const item = wordData[lemma] || baseWord;
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
    const clean = token.replace(/[?.!,:;"'״׳]/g, "");
    const btn = document.createElement("button");
    btn.className = "rashi-word-btn";
    btn.textContent = token;
    btn.dir = "rtl";
    btn.lang = "he";
    btn.addEventListener("click", () => {
      rashiHebrewText.querySelectorAll(".rashi-word-btn").forEach((w) => w.classList.remove("active"));
      btn.classList.add("active");
      const data = literalGlossary[clean] || { literal: "Traducción literal pendiente", note: "La añadimos en la siguiente capa." };
      rashiLiteralFront.innerHTML = `<strong>${clean}</strong> = ${data.literal}`;
      rashiLiteralBack.textContent = data.note;
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
  const mappedRashi = lemmaToRashiId[lemma] || "r1";
  setRashi(mappedRashi);
  setActiveTab(openRashiDirect ? "tab-rashi" : "tab-translation");
  if (!wordDialog.open) wordDialog.showModal();
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
    openWordDialog(lemma, hasRashi);
  });
});

rashiButtons.forEach((button) => {
  button.addEventListener("click", () => {
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
  translationBlock.hidden = !toggleTranslation.checked;
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

initSupportProfiles();
renderPasuk();
