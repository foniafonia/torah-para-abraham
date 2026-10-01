# -*- coding: utf-8 -*-
"""Rambam, Mishné Torá, Hiljot Teshuvá, capítulo 9.

El hebreo NO está aquí: viene vocalizado de `ram9.json` y no se teclea a mano.
Aquí solo va la traducción y el reparto en párrafos: `frases` dice cuántas
oraciones del hebreo original le corresponden a cada bloque, en orden. El
constructor comprueba que la suma cuadra y que al volver a unir los trozos
sale el texto original letra por letra.
"""

CAP = 9
TITULO = 'La recompensa de las mitzvot en este mundo y en el venidero'
TITULO_HE = 'שְׂכַר הַמִּצְוֹת בָּעוֹלָם הַזֶּה וּבָעוֹלָם הַבָּא'

HALAJOT = [
  {
    'titulo': 'Halajá 1 · El sentido de las bendiciones y las maldiciones',
    'bloques': [
      (2, 'Puesto que ya se ha dado a conocer que el pago de la recompensa de '
          'las mitzvot, y el bien que mereceremos si guardamos el camino del '
          'Eterno escrito en la Torá, es la vida del mundo venidero, como está '
          'dicho (Devarim 22:7): «para que te vaya bien y prolongues tus días»; '
          'y que la venganza que se toma de los malvados que abandonaron las '
          'sendas de la justicia escritas en la Torá es el <i>karet</i> [la '
          'extirpación del alma], como está dicho (Bamidbar 15:31): «será '
          'ciertamente extirpada esa alma, su culpa está en ella»…'),
      (3, '¿qué es, entonces, eso que está escrito en toda la Torá entera: «si '
          'escucháis, os llegará esto», (Vayikrá 26:14) «y si no escucháis», os '
          'ocurrirá aquello? Y todas esas cosas son de este mundo: como la '
          'hartura y el hambre, la guerra y la paz, el reino y la bajeza, el '
          'asentamiento en la tierra y el exilio, el éxito de la obra y su '
          'pérdida, y todas las demás palabras del pacto.'),
      (4, 'Todas esas cosas fueron verdad y lo serán; y cuando cumplimos todas '
          'las mitzvot de la Torá, nos llegan todos los bienes de este mundo, y '
          'cuando las transgredimos, nos sobrevienen los males escritos. Y aun '
          'así, ni esos bienes son el término del pago de la recompensa de las '
          'mitzvot, ni esos males son el término de la venganza que se toma de '
          'quien transgrede todas las mitzvot. Sino que la resolución de todas '
          'estas cosas es así:'),
      (3, 'El Santo, bendito sea, nos dio esta Torá: árbol de vida es ella. Y '
          'todo el que hace todo lo escrito en ella y la conoce con un '
          'conocimiento completo y correcto, merece por ella la vida del mundo '
          'venidero; y conforme a la magnitud de sus obras y a la abundancia de '
          'su sabiduría, así merece.'),
      (4, 'Y nos prometió en la Torá que, si la cumplimos con alegría y con buen '
          'ánimo y meditamos en su sabiduría continuamente, apartará de nosotros '
          'todas las cosas que nos impiden cumplirla —como la enfermedad, la '
          'guerra, el hambre y las semejantes a ellas—, y derramará sobre '
          'nosotros todos los bienes que fortalecen nuestras manos para cumplir '
          'la Torá —como la hartura, la paz y la abundancia de plata y oro—, '
          'para que no nos ocupemos todos nuestros días en las cosas que el '
          'cuerpo necesita, sino que nos sentemos libres a estudiar la sabiduría '
          'y a cumplir la mitzvá, para que merezcamos la vida del mundo '
          'venidero. Y así dice en la Torá, después de prometer los bienes de '
          'este mundo (Devarim 6:25): «y será justicia para nosotros», etc.'),
      (2, 'Y asimismo nos hizo saber en la Torá que, si abandonamos la Torá a '
          'sabiendas y nos ocupamos en las vanidades del tiempo —como el asunto '
          'del que está dicho (Devarim 32:15): «y engordó Ieshurún y coceó»—, el '
          'Juez de la verdad apartará de los que la abandonan todos los bienes '
          'de este mundo, que fueron los que fortalecieron sus manos para '
          'cocear, y traerá sobre ellos todos los males que les impiden adquirir '
          'el mundo venidero, para que perezcan en su maldad. Eso es lo que está '
          'escrito en la Torá (Devarim 28:47): «por cuanto no serviste al '
          'Eterno», etc.; (Devarim 28:48) «y servirás a tus enemigos, a los que '
          'el Eterno enviará contra ti».'),
      (4, 'Resulta, pues, que la explicación de todas aquellas bendiciones y '
          'maldiciones es de esta manera. Es decir: si habéis servido al Eterno '
          'con alegría y habéis guardado su camino, Él derrama sobre vosotros '
          'estas bendiciones y aleja de vosotros las maldiciones, hasta que '
          'estéis libres para haceros sabios en la Torá y ocuparos en ella, para '
          'que merezcáis la vida del mundo venidero; «y te irá bien» en el mundo '
          'que es todo él bueno, «y prolongarás los días» en el mundo que es '
          'todo él largo. Y resultáis mereciendo los dos mundos: una vida buena '
          'en este mundo, que lleva a la vida del mundo venidero. Pues si no '
          'adquiere aquí sabiduría y buenas obras, no tiene con qué merecer, '
          'como está dicho (Kohélet 9:10): «porque no hay obra, ni cuenta, ni '
          'conocimiento, ni sabiduría en la tumba». Y si habéis abandonado al '
          'Eterno y habéis errado en la comida, en la bebida, en la lujuria y en '
          'lo semejante a ellas, Él trae sobre vosotros todas estas maldiciones '
          'y aparta todas las bendiciones, hasta que vuestros días se consuman '
          'en el espanto y el miedo, y no tengáis corazón libre ni cuerpo sano '
          'para cumplir las mitzvot, de modo que perdáis la vida del mundo '
          'venidero; y resulta que habéis perdido dos mundos. Porque cuando la '
          'persona está agobiada en este mundo por la enfermedad, la guerra y el '
          'hambre, no se ocupa ni en la sabiduría ni en las mitzvot, que son '
          'aquello con lo que se merece la vida del mundo venidero.'),
    ],
  },
  {
    'titulo': 'Halajá 2 · Por qué se anhelan los días del Mashíaj',
    'bloques': [
      (2, 'Y por esto anhelaron todo Israel, sus profetas y sus sabios, los días '
          'del <i>Mashíaj</i>: para descansar de los reinos, que no les dejan '
          'ocuparse en la Torá y en las mitzvot como es debido; y para hallar '
          'sosiego y aumentar en sabiduría, a fin de merecer la vida del mundo '
          'venidero.'),
      (3, 'Porque en aquellos días crecerán el conocimiento, la sabiduría y la '
          'verdad, como está dicho (Ieshayahu 11:9): «porque la tierra se '
          'llenará del conocimiento del Eterno»; y está dicho (Irmiahu 31:33): '
          '«y no enseñará más el hombre a su hermano ni el hombre a su '
          'prójimo»; y está dicho (Iejezkel 36:26): «y quitaré el corazón de '
          'piedra de vuestra carne».'),
      (4, 'Porque aquel rey que se alzará de la simiente de David será dueño de '
          'una sabiduría mayor que la de Shlomó, y es un profeta grande, cercano '
          'a Moshé, nuestro maestro. Y por eso enseñará a todo el pueblo y les '
          'instruirá el camino del Eterno; y vendrán todas las naciones a '
          'escucharlo, como está dicho (Ieshayahu 2:2): «y será en el fin de los '
          'días que estará firme el monte de la casa del Eterno en la cumbre de '
          'los montes».'),
      (3, 'Y el término de toda la recompensa entera, y el bien último que no '
          'tiene interrupción ni merma, es la vida del mundo venidero. Pero los '
          'días del <i>Mashíaj</i> son este mundo, y el mundo sigue según su '
          'costumbre, salvo que el reino volverá a Israel. Y ya dijeron los '
          'primeros sabios: no hay entre este mundo y los días del '
          '<i>Mashíaj</i> sino la sujeción a los reinos, solamente.'),
    ],
  },
]

GLOSARIO = [
  ('olamhaba', 'הָעוֹלָם הַבָּא', 'haolam habá',
   'El mundo venidero: la recompensa última, sin interrupción ni merma.', ''),
  ('karet', 'כָּרֵת', 'karet',
   'Extirpación: que el alma sea cortada de su raíz.',
   'Extirpación. Es el castigo del que habla la Torá, y el Rambam lo pone '
   'aquí como el reverso exacto de la vida del mundo venidero.'),
  ('mashiaj', 'מָשִׁיחַ', 'Mashíaj',
   'El ungido: el rey de la casa de David que ha de venir.', ''),
  ('brit', 'דִּבְרֵי הַבְּרִית', 'divrei habrit',
   'Las palabras del pacto: las bendiciones y maldiciones de la Torá.', ''),
  ('yeshurun', 'יְשֻׁרוּן', 'Ieshurún',
   'Nombre poético de Israel; aquí, el que engorda y cocea.', ''),
  ('dayan', 'דַּיַּן הָאֱמֶת', 'Daián haEmet',
   '«El Juez de la verdad»: el Santo, bendito sea.', ''),
  ('shiabud', 'שִׁעְבּוּד מַלְכֻיּוֹת', 'shiabud maljuyot',
   'La sujeción a los reinos extranjeros.',
   'La sujeción a los reinos extranjeros: lo único que, según los primeros '
   'sabios, separa este mundo de los días del Mashíaj.'),
  ('mitzva', 'מִצְוָה', 'mitzvá',
   'Precepto; en plural, mitzvot.', ''),
  ('etzjaim', 'עֵץ חַיִּים', 'etz jaím',
   '«Árbol de vida»: así llama el Rambam a la Torá en este capítulo.', ''),
]
