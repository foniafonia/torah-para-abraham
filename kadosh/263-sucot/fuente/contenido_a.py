# -*- coding: utf-8 -*-
"""Gilyón «וְהָיִיתָ אַךְ שָׂמֵחַ» n.º 263, Sucot 5787.
Rab Meir Kadosh (ראש המוסדות הרב מאיר קדוש שליט"א).

Bloques, en orden de lectura. Tipos:
  masthead    línea de memoria (לע"נ), arriba de todo
  masthead2   franja de título: nombre del gilyón, horarios, fecha, contacto
  dedic       línea de dedicatoria / רפואה שלמה del encabezado
  titulo      título de artículo
  sub         subtítulo interno
  par         párrafo normal
  caja        recuadro (cuento, historia, aparte)
  halaja      item con letra hebrea de la columna de halajá
  pagina      título corto de página (el que llevan las págs. 2-4)
  pie         pie de página final (anuncios)
"""

BLOQUES = []

# ============================================================ CABECERA
BLOQUES.append({"t": "masthead",
  "he": "לע\"נ הָאַבְרֵךְ הַיָּקָר ר' משֶׁה חַיִּים ז\"ל, ולע\"נ הרה\"ג עמוס גואטה זצ\"ל שֶׁנִּרְצַח בְּט\"ז בְּתַמּוּז עַל יְדֵי בֶּן עַוְלָה",
  "es": "En memoria del querido joven R' Moshé Jaím, z”l, y en memoria del gaón Rab Amós Goeta, z”l, asesinado el 16 de Tamuz por un malvado."})

BLOQUES.append({"t": "masthead2",
  "titulo_he": "סוּכּוֹת", "subtitulo_he": "וְהָיִיתָ אַךְ שָׂמֵחַ",
  "titulo_es": "Sucot", "subtitulo_es": "«Y no serás sino feliz»",
  "horarios_he": "כְּנִיסַת שַׁבָּת: 18:16 · מוֹצָאֵי שַׁבָּת: 19:07",
  "horarios_es": "Entrada de Shabat: 18:16 · Salida: 19:07",
  "fecha_he": "י\"ד תִּשְׁרֵי תשפ\"ז · 25.9.26 · גִּילָּיוֹן מס' 263",
  "fecha_es": "14 de Tishré 5787 · 25.9.26 · Boletín n.º 263",
  "pie_he": "לְקַבָּלַת הֶעָלוֹן בַּמַּייל: KADOSHMEIR10000@gmail.com · מִפִּי רֹאשׁ הַמּוֹסָדוֹת הרב מאיר קדוש שליט\"א",
  "pie_es": "Para recibir el boletín por correo: KADOSHMEIR10000@gmail.com · De boca del jefe de las instituciones, el Rab Meír Kadosh, shlitá"})

BLOQUES.append({"t": "dedic",
  "he": "רפו\"ש לר' שמעון בן אילנה הי\"ו. מכלוף בן אסתר לוי - Angel Mojluff ben Esther Levi",
  "es": "<i>Refuá shelemá</i> para R' Shimón ben Ilaná, que viva largos días; Majlúf ben Ester Leví — Angel Mojluff ben Esther Levi."})

BLOQUES.append({"t": "dedic",
  "he": "רְפוּאָה שְׁלֵמָה לרבי משה בן שמחה וְעליה בת רחל; רחל חיה בת דינה, ג'וסלין בת איבון וְנטלי בת סילביה",
  "es": "<i>Refuá shelemá</i> para el Rab Moshé ben Simjá y Aliyá bat Rajel; Rajel Jayá bat Diná, Jocelyn bat Ivón y Nathalie bat Silvia."})

BLOQUES.append({"t": "dedic",
  "he": "לְהַצְלָחָה, רְפוּאָה שְׁלֵמָה - הַנֶּפֶשׁ, הַגּוּף וְהַנְּשָׁמָה וְזֶרַע קוֹדֶשׁ שֶׁל אריאל שלמה בן מרים חנה ותמר בת שירז הי\"ו, בְּשׂוֹרוֹת טוֹבוֹת אכיר\"צ",
  "es": "Para el éxito, <i>refuá shelemá</i> del alma, el cuerpo y el alma —y descendencia santa— de Ariel Shlomó ben Miriam Janá y Tamar bat Shiraz, que vivan largos días; con buenas noticias, <i>amén, ken yehí ratzón</i>."})

BLOQUES.append({"t": "dedic-verde",
  "he": "גִּילָּיוֹן מְיֻוחָד הַמֻּוקְדָּשׁ לְהַצְלָחַת עַם יִשְׂרָאֵל, לְהַשְׁבִּית כָּל אוֹיֵב וּמִתְנַקֵּם בְּכָל אֲתַר וַאֲתַר אכיר\"צ. רְפוּאָה וְחַיִּים לְכָל הַחוֹלִים וְהַפְּצוּעִים. \"עוֹד יְנוּבוּן בְּשֵׂיבָה, דְּשֵׁנִים וְרַעֲנַנִּים יִהְיוּ\" אכיר\"צ. לרפו\"ש של אילנה בת טאג'י תח'",
  "es": "Número especial dedicado al éxito del pueblo de Israel, a que sea aplacado todo enemigo y vengador en cualquier lugar, <i>amén, ken yehí ratzón</i>. Salud y vida para todos los enfermos y heridos. «Aún fructificarán en la vejez, lozanos y frondosos serán», <i>amén, ken yehí ratzón</i>. Por la <i>refuá shelemá</i> de Ilaná bat Tají, que viva."})

# ============================================================ ARTÍCULO 1 — página 1, columna derecha
BLOQUES.append({"t": "titulo",
  "he": "וְשָׂמַחְתָּ בְּחַגֶּךָ וְהָיִיתָ אַךְ שָׂמֵחַ",
  "es": "«Y te alegrarás en tu fiesta» y «no serás sino feliz»"})

BLOQUES.append({"t": "par",
  "he": "בְּחַג הַסֻּכּוֹת הַבְּעֶלְ\"ט מְצֻוִּוים עַל הַשִּׂמְחָה, וְנִשְׁאֶלֶת הַשְּׁאֵלָה מַדּוּעַ יֵשׁ צִוּוּי מְיֻוחָד בַּתּוֹרָה שֶׁל שִׂמְחָה דַּווְקָא בְּסֻוכּוֹת? הַתּוֹרָה מַזְכִּירָה אֶת הַחוֹבָה לִשְׂמוֹחַ בְּסֻוכּוֹת שָׁלוֹשׁ פְּעָמִיים: \"וְשָׂמַחְתָּ בְּחַגֶּךָ\" (דברים טז, יד), \"וְהָיִיתָ אַךְ שָׂמֵחַ\" (דברים טז, טו), \"וּשְׂמַחְתֶּם שִׁבְעַת יָמִים...\" (ויקרא כג, מ). שְׁאֵלָה נוֹסֶפֶת הִיא מַדּוּעַ דַּווְקָא חַג הַסֻּוכּוֹת מִתְקַיֵּים בִּתְקוּפָה זוֹ שֶׁל הַשָּׁנָה, הֲרֵי בְּנֵי יִשְׂרָאֵל יָצְאוּ מִמִּצְרַיִם בְּחֹודֶשׁ נִיסָן, לָמָּה לֹא בַּקַּיִץ אוֹ בְּחֹודֶשׁ חֶשְׁוָון שֶׁחֲסֵרִים בּוֹ מוֹעֲדִים.",
  "es": "En la fiesta de Sucot que se acerca estamos ordenados sobre la alegría, y se pregunta: ¿por qué hay un mandato especial en la Torá de alegría precisamente en Sucot? La Torá menciona la obligación de alegrarse en Sucot tres veces: «Y te alegrarás en tu fiesta» (Devarim 16:14), «y no serás sino feliz» (Devarim 16:15), «y os alegraréis siete días...» (Vaikrá 23:40). Otra pregunta es por qué precisamente la fiesta de Sucot se celebra en esta época del año: al fin y al cabo los hijos de Israel salieron de Egipto en el mes de Nisán, ¿por qué no en verano, o en el mes de Jeshván, que carece de fiestas?"})

BLOQUES.append({"t": "par",
  "he": "מֵשִׁיב בַּעַל חִידּוּשֵׁי הָרִי\"ם רַבִּי יִצְחָק מֵאִיר מִגּוּר ז\"ל: לְמַעַן יֵדְעוּ דֹרֹתֵיכֶם, כִּי בַסֻּוכּוֹת הוֹשַׁבְתִּי אֶת בְּנֵי יִשְׂרָאֵל בְּהוֹצִיאִי אוֹתָם מֵאֶרֶץ מִצְרָיִם, אֲנִי ה' אֱלֹקיכֶם. (ויקרא כג, מג) רש\"י מְפָרֵשׁ - עַנְנֵי כָבוֹד, וְרַמְבַּ\"ן מוֹסִיף - שֶׁעָשִׂיתִי לָהֶם עַנְנֵי כָבוֹד - סֻוכּוֹת לְהָגֵן עֲלֵיהֶם, שֶׁבְּמִצְוַות סוּכָּה נֶאֱמַר \"לְמַעַן יֵדְעוּ\". בִּשְׁבִיל לְקַיֵּים אֶת הַמִּצְוָוה אָנוּ זְקוּקִים לְדַעַת.",
  "es": "Responde el Jidushé HaRim, Rabí Itzjak Meír de Gur, z”l: «Para que sepan vuestras generaciones que en cabañas hice habitar a los hijos de Israel al sacarlos de la tierra de Egipto; Yo soy el Eterno, vuestro Dios» (Vaikrá 23:43). Rashí explica: nubes de gloria; y el Ramban añade: que les hice nubes de gloria —cabañas— para protegerlos, pues sobre la mitzvá de <i>sucá</i> está dicho «para que sepan». Para cumplir la mitzvá necesitamos <i>daat</i> [conocimiento, conciencia]."})

BLOQUES.append({"t": "par",
  "he": "בְּרֹוב יְמוֹת הַשָּׁנָה הָאָדָם מָלֵא חֲטָאִים וַעֲווֹנוֹת וְדַעְתּוֹ אֵינָהּ מְיֻושֶּׁבֶת עָלָיו. חַג הַסֻּוכּוֹת הוּא לְאַחַר רֹאשׁ הַשָּׁנָה וְיוֹם הַכִּיפּוּרִים, יָמִים בָּהֶם אָנוּ מְשִׁיבִים לְעַצְמֵנוּ אֶת הַדַּעַת, אָנוּ חוֹזְרִים בִּתְשׁוּבָה לִפְנֵי הקב\"ה וְיֵשׁ לָנוּ אֶת ייִשּׁוּב הַדַּעַת, וְכָךְ אָנוּ יְכוֹלִים לְקַיֵּים אֶת הַמִּצְוָוה הַחֲשׁוּבָה הַזֹּאת. אָנוּ עוֹבְרִים אֶת הַיָּמִים הַלֹּא פְּשׁוּטִים שֶׁל עֲשֶׂרֶת יְמֵי תְּשׁוּבָה וְנִכְנָסִים לְתוֹךְ הַמּוֹעֵד שֶׁבּוֹ אָנוּ מְצֻוִּוים \"וְשָׂמַחְתָּ בְּחַגֶּךָ וְהָיִיתָ אַךְ שָׂמֵחַ\". יֵשׁ לָנוּ אֶת הַיְּכֹולֶת לִשְׂמוֹחַ לִפְנֵי הקב\"ה לְאַחַר שֶׁקִּיבַּלְנוּ אֶת הַדַּעַת וְאָנוּ מְרֻכָּזִים וּמְבִינִים מַה הִיא עֲבוֹדַת הַשֵּׁם וְאֵיךְ עָלֵינוּ לַעֲבוֹד אֶת בּוֹרְאֵנוּ, לְאַחַר שֶׁהִמְלַכְנוּ אוֹתוֹ בְּרֹאשׁ הַשָּׁנָה, וְעָשִׂינוּ תְּשׁוּבָה לְפָנָיו בְּיוֹם הַכִּיפּוּרִים; אַחֲרֵי יָמִים אֵלּוּ אָנוּ יְכוֹלִים לֵיהָנוֹת מִזִּיו שְׁכִינָתוֹ בֶּאֱמֶת וְאַף יֵשׁ לָנוּ אֶת הַיְּכֹולֶת לִשְׂמוֹחַ.",
  "es": "La mayor parte del año la persona está llena de pecados y faltas, y su mente no está asentada sobre ella. La fiesta de Sucot viene después de Rosh HaShaná y Yom Kipur, días en los que recuperamos para nosotros la mente, volvemos en <i>teshuvá</i> ante el Santo, bendito sea, y tenemos la mente asentada; y así podemos cumplir esta importante mitzvá. Pasamos los días no sencillos de los Diez Días de <i>Teshuvá</i> y entramos en la fiesta en la que se nos ordena «y te alegrarás en tu fiesta y no serás sino feliz». Tenemos la capacidad de alegrarnos ante el Santo, bendito sea, después de haber recibido la mente, y estamos centrados y entendemos qué es el servicio de Dios y cómo debemos servir a nuestro Creador, después de haberlo coronado Rey en Rosh HaShaná y de haber hecho <i>teshuvá</i> ante Él en Yom Kipur; después de estos días podemos disfrutar de verdad del resplandor de Su presencia, y además tenemos la capacidad de alegrarnos."})

BLOQUES.append({"t": "par",
  "he": "בְּנוֹסָף דָּרְשׁוּ הַמְּפָרְשִׁים שֶׁבְּנֵי יִשְׂרָאֵל יָשְׁבוּ בְּסֻוכּוֹת שֶׁל מַמָּשׁ, וְכָל זֹאת הִתְחִיל בַּיָּמִים בָּהֶם מַתְחִילִים לְהִתְחַדֵּשׁ הַגְּשָׁמִים, וְהֵם בד\"כ יְמֵי תִּשְׁרֵי, וְהֶחָג מִתְקַיֵּים דַּווְקָא בִּתְקוּפָה זוֹ שֶׁל הַשָּׁנָה וְלֹא בְּחֹודֶשׁ נִיסָן, בּוֹ יָצְאוּ בְּנֵי יִשְׂרָאֵל מִמִּצְרַיִם, כְּדֵי שֶׁלֹּא יֹאמְרוּ שֶׁיְּצִיאָה לַסֻּכּוֹת הִיא סְתָם הֲגָנָה מִפְּנֵי הַשֶּׁמֶשׁ וְיֵרָאֶה כְּאִילּוּ עַם יִשְׂרָאֵל יָצָא לְאֵיזֶה חֻפְשָׁה/פִּיקְנִיק חַס וְשָׁלוֹם. עַם יִשְׂרָאֵל יוֹצֵא בְּחֹודֶשׁ נִיסָן לִגְאֻולָּה וְזוֹכֶה לְנִיסִּים רַבִּים. אֶחָד הַנִּיסִּים הוּא עַנְנֵי הַכָּבוֹד הַמַּקִּיפִים אוֹתוֹ, דּוֹאֲגִים לוֹ לִשְׁמִירָה וּלְצֵל וְאַף לְיִשּׁוּר הַדֶּרֶךְ; עַם יִשְׂרָאֵל צוֹעֵד בַּמִּדְבָּר וּלְמַעֲשֶׂה הַצְּעִידָה הִיא עַל מִשְׁטָח יָשָׁר, הַמִּשְׁטָח יָשָׁר בִּזְכוּת עַנְנֵי הַכָּבוֹד. יְלָדִים קְטַנִּים לֹא יָדְעוּ מַה זֶּה הַר - כְּשֶׁאַהֲרֹן נִפְטַר כָּתוּב בַּתּוֹרָה \"וַיֹּאמֶר ה' אֶל מֹשֶׁה וְאֶל אַהֲרֹן בְּהֹר הָהָר עַל גְּבוּל אֶרֶץ אֱדוֹם לֵאמֹר... וַיֵּאָסֵף אַהֲרֹן אֶל עַמָּיו\" (במדבר כ, כ\"ב). פַּעַם רִאשׁוֹנָה שֶׁהֵם רָאוּ הָהָר זֶה הָיָה בְּמוֹת אַהֲרֹן, שֶׁרָאוּ אֶת הָהָר מִתְגַּלֶּה מִתּוֹךְ עַנְנֵי הַכָּבוֹד. הַהַשָּׂגָה הַפְּרָטִית בַּמִּדְבָּר, הַדְּאָגָה לְעַם שָׁלֵם לְכָל הַצְּרִיכִים שֶׁלּוֹ - לְבוּשׁ, מַיִם, אֹכֶל, צֵל, שֵׁינָה וְהַיְּכֹולֶת לִלְמֹוד תּוֹרָה בְּנַחַת. כָּל זֹאת זָכוּ בְּנֵי יִשְׂרָאֵל בְּמֶשֶׁךְ 40 שָׁנָה בְּהַשְׁגָּחָה פְּרָטִית. צָרְכֵי הָאָדָם מִתְמַלְּאִים רַק כְּשֶׁאָנוּ נִשְׁעָנִים עַל הַחֲסָדִים שֶׁל בּוֹרֵא עוֹלָם, אָנוּ זוֹכִים לִדְאָגָה אֲמִיתִּית.",
  "es": "Además, los comentaristas explicaron que los hijos de Israel habitaron en cabañas de verdad, y todo esto empezó en los días en que empiezan a renovarse las lluvias, que suelen ser los días de Tishré; y la fiesta se celebra precisamente en esta época del año y no en el mes de Nisán, en el que los hijos de Israel salieron de Egipto, para que no se dijera que salir a las cabañas era solo protección ante el sol y pareciera que el pueblo de Israel había salido de vacaciones o de picnic, Dios no lo permita. El pueblo de Israel sale en el mes de Nisán hacia la redención y merece muchos milagros. Uno de los milagros son las Nubes de Gloria que lo rodean, que cuidan de su protección y de su sombra, e incluso allanan el camino: el pueblo de Israel marcha por el desierto y, de hecho, la marcha es sobre una superficie llana, superficie llana gracias a las Nubes de Gloria. Los niños pequeños no sabían qué era un monte —cuando Aharón falleció está escrito en la Torá: «Y dijo el Eterno a Moshé y a Aharón en el monte Hor, en la frontera de la tierra de Edom, diciendo... y Aharón se reunió con su pueblo» (Bemidbar 20:22)—. La primera vez que vieron el monte fue en la muerte de Aharón, que vieron el monte revelarse desde dentro de las Nubes de Gloria. El logro particular en el desierto, el cuidado de todo un pueblo en todas sus necesidades —vestido, agua, comida, sombra, sueño y la capacidad de estudiar Torá con tranquilidad—, todo eso lo merecieron los hijos de Israel durante 40 años por providencia particular. Las necesidades del hombre se colman solo cuando nos apoyamos en las bondades del Creador del mundo: entonces merecemos un cuidado verdadero."})

BLOQUES.append({"t": "par",
  "he": "הַיְּשִׁיבָה בַּסֻּוכָּה נוֹתֶנֶת לָנוּ אֶת הַהַרְגָּשָׁה שֶׁל אַרְעִיּוּת/זְמַנִּיּוּת בָּעוֹלָם, אָנוּ יוֹצְאִים מִמְּגוּרֵי הַקֶּבַע שֶׁלָּנוּ לִשְׁבוּעַ יָמִים וְחַיִּים מִחוּץ לַבַּיִת, לֹא בִּתְנָאִים שֶׁאָנוּ רְגִילִים אֲלֵיהֶם. בְּסֻוכּוֹת אָנוּ זוֹכְרִים אֵיךְ בְּנֵי יִשְׂרָאֵל חָיוּ יוֹם יוֹם. הַחֲזָרָה לַבַּיִת לְאַחַר חַג הַסֻּכּוֹת נוֹתֶנֶת לָנוּ אֶת תְּחוּשַׁת הַתּוֹדָה לְבוֹרֵא עוֹלָם עַל שֶׁפַע הַחֲסָדִים וְעַל הַשֶּׁפַע הַגַּשְׁמִי שֶׁיֵּשׁ לָנוּ, וְכַמָּה אָנוּ צְרִיכִים לִהְיוֹת שְׂמֵחִים בְּחֶלְקֵנוּ. גַּם בּוֹרֵא עוֹלָם \"שָׂמֵחַ בְּחֶלְקוֹ\", שֶׁעַם יִשְׂרָאֵל מְקַיֵּם אֶת מִצְוַות הַיְּשִׁיבָה בַּסֻּוכָּה, הַדָּבָר עוֹשֶׂה נַחַת רוּחַ.",
  "es": "Habitar en la <i>sucá</i> nos da la sensación de provisionalidad, de lo temporal en el mundo: salimos de nuestra vivienda fija durante una semana y vivimos fuera de casa, no en las condiciones a las que estamos acostumbrados. En Sucot recordamos cómo vivían los hijos de Israel día a día. La vuelta a casa después de la fiesta de Sucot nos da el sentimiento de gratitud al Creador del mundo por la abundancia de bondades y por la abundancia material que tenemos, y cuánto debemos estar contentos con nuestra suerte. También el Creador del mundo «se alegra con Su suerte» de que el pueblo de Israel cumpla la mitzvá de habitar en la <i>sucá</i>: la cosa Le produce satisfacción."})
