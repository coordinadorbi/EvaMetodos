var contaQ = 0,
	activo = 0,
	reflexivo = 0,
	teorico = 0,
	pragmatico = 0,
	numberQ = 1,
	activo = 0,
	reflexivo = 0,
	teorico = 0,
	pragmatico = 0,
	i = 0,
	effectNumber = 0,
	response,
	sizeQuestion,
	isCarateristicasOn = false,
	isPreguntaResponderOn = false,
	isAprendeMejorOn = false,
	isCuestaTrabajoOn = false,
	isRecuerdaOn = false,
	stEstilo = "",
	stImagen = "",
	stAlt = "",
	stPreferencia = "",
	stNivelEres = "",
	stEres = "",
	stPorcentajePrefe = "",
	stCaracteristicas = "",
	stPreguntaResponder = "",
	stAprendeMejor = "",
	stCuestaTrabajo = "",
	stRecomendaciones = "",
	limit_mbInterDer = 0,
	limit_bInterIzq = 0,
	limit_bInterDer = 0,
	limit_mInterIzq = 0,
	limit_mInterDer = 0,
	limit_aInterIzq = 0,
	limit_aInterDer = 0,
	limit_maInterIzq = 0,

	/*questions = [
		"1_Tengo fama de decir lo que pienso claramente y sin rodeos."
 ]*/

	questions = [
	 "1_Tengo fama de decir lo que pienso claramente y sin rodeos.",
	 "2_Estoy seguro lo que es bueno y lo que es malo, lo que está bien y lo que está mal.",
	 "3_Muchas veces actúo sin mirar las consecuencias.",
	 "4_Normalmente trato de resolver los problemas metódicamente y paso a paso.",
	 "5_Creo que los formalismos coartan y limitan la actuación libre de las personas.",
	 "6_Me interesa saber cuáles son los sistemas de valores de los demás y con qué criterios actúan.",
	 "7_Pienso que el actuar intuitivamente puede ser siempre tan válido como actuar reflexivamente.",
	 "8_Creo que lo más importante es que las cosas funcionen.",
	 "9_Procuro estar al tanto de lo que ocurre aquí y ahora.",
	 "10_Disfruto cuando tengo tiempo para preparar mi trabajo y realizarlo a conciencia.",

	 "11_Estoy a gusto siguiendo un orden, en las comidas, en el estudio, haciendo ejercicio regularmente.",
	 "12_Cuando escucho una nueva idea en seguida comienzo a pensar cómo ponerla en práctica.",
	 "13_Prefiero las ideas originales y novedosas aunque no sean prácticas.",
	 "14_Admito y me ajusto a las normas sólo si me sirven para lograr mis objetivos.",
	 "15_Normalmente encajo bien con personas reflexivas, analíticas y me cuesta sintonizar con personas demasiado espontáneas, imprevisibles.",
	 "16_Escucho con más frecuencia que hablo.",
	 "17_Prefiero las cosas estructuradas a las desordenadas.",
	 "18_Cuando poseo cualquier información, trato de interpretarla bien antes de manifestar alguna conclusión.",
	 "19_Antes de tomar una decisión estudio con cuidado sus ventajas e inconvenientes.",
	 "20_Me crezco con el reto de hacer algo nuevo y diferente.",

	 "21_Casi siempre procuro ser coherente con mis criterios y sistemas de valores. Tengo principios y los sigo.",
	 "22_Cuando hay una discusión no me gusta ir con rodeos.",
	 "23_Me disgusta implicarme afectivamente en mi ambiente de trabajo. Prefiero mantener relaciones distantes.",
	 "24_Me gustan más las personas realistas y concretas que las teóricas.",
	 "25_Me cuesta ser creativo/a, romper estructuras.",
	 "26_Me siento a gusto con personas espontáneas y divertidas.",
	 "27_La mayoría de las veces expreso abiertamente cómo me siento.",
	 "28_Me gusta analizar y dar vueltas a las cosas.",
	 "29_Me molesta que la gente no se tome en serio las cosas.",
	 "30_Me atrae experimentar y practicar las últimas técnicas y novedades.",

	 "31_Soy cauteloso/a a la hora de sacar conclusiones.",
	 "32_Prefiero contar con el mayor número de fuentes de información. Cuantos más datos reúna para reflexionar, mejor.",
	 "33_Tiendo a ser perfeccionista.",
	 "34_Prefiero oír las opiniones de los demás antes de exponer la mía.",
	 "35_Me gusta afrontar la vida espontáneamente y no tener que planificar todo previamente.",
	 "36_En las discusiones me gusta observar cómo actúan los demás participantes.",
	 "37_Me siento incómodo con las personas calladas y demasiado analíticas.",
	 "38_Juzgo con frecuencia las ideas de los demás por su valor práctico.",
	 "39_Me agobio si me obligan a acelerar mucho el trabajo para cumplir un plazo.",
	 "40_En las reuniones apoyo las ideas prácticas y realistas.",

	 "41_Es mejor gozar del momento presente que deleitarse pensando en el pasado o en el futuro.",
	 "42_Me molestan las personas que siempre desean apresurar las cosas.",
	 "43_Aporto ideas nuevas y espontáneas en los grupos de discusión.",
	 "44_Pienso que son más consistentes las decisiones fundamentadas en un minucioso análisis que las basadas en la intuición.",
	 "45_Detecto frecuentemente la inconsistencia y puntos débiles en las argumentaciones de los demás.",
	 "46_Creo que es preciso saltarse las normas muchas más veces que cumplirlas.",
	 "47_A menudo caigo en la cuenta de otras formas mejores y más prácticas de hacer las cosas.",
	 "48_En conjunto hablo más que escucho.",
	 "49_Prefiero distanciarme de los hechos y observarlos desde otras perspectivas.",
	 "50_Estoy convencido/a que debe imponerse la lógica y el razonamiento.",

	 "51_Me gusta buscar nuevas experiencias.",
	 "52_Me gusta experimentar y aplicar las cosas.",
	 "53_Pienso que debemos llegar pronto al grano, al meollo de los temas.",
	 "54_Siempre trato de conseguir conclusiones e ideas claras.",
	 "55_Prefiero discutir cuestiones concretas y no perder el tiempo con charlas vacías.",
	 "56_Me impaciento con las argumentaciones irrelevantes e incoherentes en las reuniones.",
	 "57_Compruebo antes si las cosas funcionan realmente.",
	 "58_Hago varios borradores antes de la redacción definitiva de un trabajo.",
	 "59_Soy consciente de que en las discusiones ayudo a los demás a mantenerse centrados en el tema, evitando divagaciones.",
	 "60_Observo que, con frecuencia, soy uno de los más objetivos y desapasionados en las discusiones.",

	 "61_Cuando algo va mal, le quito importancia y trato de hacerlo mejor.",
	 "62_Rechazo ideas originales y espontáneas si no las veo prácticas.",
	 "63_Me gusta sopesar diversas alternativas antes de tomar una decisión.",
	 "64_Con frecuencia miro hacia adelante para prever el futuro.",
	 "65_En los debates prefiero desempeñar un papel secundario antes que ser el líder o el que más participa.",
	 "66_Me molestan las personas que no siguen un enfoque lógico.",
	 "67_Me resulta incómodo tener que planificar y prever las cosas.",
	 "68_Creo que el fin justifica los medios en muchos casos.",
	 "69_Suelo reflexionar sobre los asuntos y problemas.",
	 "70_El trabajar a conciencia me llena de satisfacción y orgullo.",

	 "71_Ante los acontecimientos trato de descubrir los principios y teorías en que se basan.",
	 "72_Con tal de conseguir el objetivo que pretendo soy capaz de herir sentimientos ajenos.",
	 "73_No me importa hacer todo lo necesario para que sea efectivo mi trabajo.",
	 "74_Con frecuencia soy una de las personas que más anima las fiestas.",
	 "75_Me aburro enseguida con el trabajo metódico y minucioso.",
	 "76_La gente con frecuencia cree que soy poco sensible a sus sentimientos.",
	 "77_Suelo dejarme llevar por mis intuiciones.",
	 "78_Si trabajo en grupo procuro que se siga un método y un orden.",
	 "79_Con frecuencia me interesa averiguar lo que piensa la gente.",
	 "80_Esquivo los temas subjetivos, ambiguos y poco claros."]

	 //

	/* inners = [
	 "bounceIn",
	 "bounceInDown",
	 "bounceInLeft",
	 "bounceInRight",
	 "bounceInUp",
	 "fadeIn",
	 "fadeInDown",
	 "fadeInDownBig",
	 "fadeInLeft",
	 "fadeInLeftBig",
	 "fadeInRight",
	 "fadeInRightBig",
	 "fadeInUp",
	 "fadeInUpBig",
	 "flipInX",
	 "flipInY",
	 "lightSpeedIn",
	 "rotateIn",
	 "rotateInDownLeft",
	 "rotateInDownRight",
	 "rotateInUpLeft",
	 "rotateInUpRight",
	 "rollIn",
	 "zoomIn",
	 "zoomInDown",
	 "zoomInLeft",
	 "zoomInRight",
	 "zoomInUp",
	 "slideInDown",
	 "slideInLeft",
	 "slideInRight",
	 "slideInUp"
	 ],

	 outers = [
	 "bounceOut",
	 "bounceOutDown",
	 "bounceOutLeft",
	 "bounceOutRight",
	 "bounceOutUp",
	 "fadeOut",
	 "fadeOutDown",
	 "fadeOutDownBig",
	 "fadeOutLeft",
	 "fadeOutLeftBig",
	 "fadeOutRight",
	 "fadeOutRightBig",
	 "fadeOutUp",
	 "fadeOutUpBig",
	 "flipOutX",
	 "flipOutY",
	 "lightSpeedOut",
	 "rotateOut",
	 "rotateOutDownLeft",
	 "rotateOutDownRight",
	 "rotateOutUpLeft",
	 "rotateOutUpRight",
	 "rollOut",
	 "zoomOut",
	 "zoomOutDown",
	 "zoomOutLeft",
	 "zoomOutRight",
	 "zoomOutUp",
	 "slideOutDown",
	 "slideOutLeft",
	 "slideOutRight",
	 "slideOutUp"
	 ]*/
	;

	function calculatePreferences(theStyle)
	{
		switch(theStyle)
		{
			case'activ':

				limit_mbInterDer = 6;
				limit_bInterIzq = 7;
				limit_bInterDer = 8;
				limit_mInterIzq = 9;
				limit_mInterDer = 12;
				limit_aInterIzq = 13;
				limit_aInterDer = 14;
				limit_maInterIzq = 15;

				if(activo <= limit_mbInterDer)
				{
					stPreferencia = "<b>Muy baja</b>";
					stNivelEres = "<b>Eres poco</b>: ";
				}else if (activo>=limit_bInterIzq && activo<=limit_bInterDer) {
					stPreferencia = "<b>Baja</b> ";
					stNivelEres = "<b>Te cuesta trabajo ser</b>: ";
				}else if (activo>=limit_mInterIzq && activo<=limit_mInterDer) {
					stPreferencia = "<b>Moderada</b>";
					stNivelEres = "<b>Regularmente eres</b>: ";
				}else if (activo>=limit_aInterIzq && activo<=limit_aInterDer) {
					stPreferencia = "<b>Alta</b>";
					stNivelEres = "<b>Prefieres ser</b>: ";
				}else if (activo>=limit_maInterIzq && activo<=20) {
					stPreferencia = "<b>Muy alta</b>";
					stNivelEres = "<b>Eres muy</b>: ";
				}

			break;

			case'teori':

				limit_mbInterDer = 6;
				limit_bInterIzq = 7;
				limit_bInterDer = 9;
				limit_mInterIzq = 10;
				limit_mInterDer = 13;
				limit_aInterIzq = 14;
				limit_aInterDer = 15;
				limit_maInterIzq = 16;

				if(teorico <= limit_mbInterDer)
				{
					stPreferencia = "<b>Muy baja</b>";
					stNivelEres = "<b>Eres poco</b>: ";
				}else if (teorico>=limit_bInterIzq && teorico<=limit_bInterDer) {
					stPreferencia = "<b>Baja</b> ";
					stNivelEres = "<b>Te cuesta trabajo ser</b>: ";
				}else if (teorico>=limit_mInterIzq && teorico<=limit_mInterDer) {
					stPreferencia = "<b>Moderada</b>";
					stNivelEres = "<b>Regularmente eres</b>: ";
				}else if (teorico>=limit_aInterIzq && teorico<=limit_aInterDer) {
					stPreferencia = "<b>Alta</b>";
					stNivelEres = "<b>Prefieres ser</b>: ";
				}else if (teorico>=limit_maInterIzq && teorico<=20) {
					stPreferencia = "<b>Muy alta</b>";
					stNivelEres = "<b>Eres muy</b>: ";
				}

			break;

			case'pragm':

				limit_mbInterDer = 8;
				limit_bInterIzq = 9;
				limit_bInterDer = 10;
				limit_mInterIzq = 11;
				limit_mInterDer = 13;
				limit_aInterIzq = 14;
				limit_aInterDer = 15;
				limit_maInterIzq = 16;

				if(pragmatico <= limit_mbInterDer)
				{
					stPreferencia = "<b>Muy baja</b>";
					stNivelEres = "<b>Eres poco</b>: ";
				}else if (pragmatico>=limit_bInterIzq && pragmatico<=limit_bInterDer) {
					stPreferencia = "<b>Baja</b> ";
					stNivelEres = "<b>Te cuesta trabajo ser</b>: ";
				}else if (pragmatico>=limit_mInterIzq && pragmatico<=limit_mInterDer) {
					stPreferencia = "<b>Moderada</b>";
					stNivelEres = "<b>Regularmente eres</b>: ";
				}else if (pragmatico>=limit_aInterIzq && pragmatico<=limit_aInterDer) {
					stPreferencia = "<b>Alta</b>";
					stNivelEres = "<b>Prefieres ser</b>: ";
				}else if (pragmatico>=limit_maInterIzq && pragmatico<=20) {
					stPreferencia = "<b>Muy alta</b>";
					stNivelEres = "<b>Eres muy</b>: ";
				}

			break;

			case'refle':

				limit_mbInterDer = 10;
				limit_bInterIzq = 11;
				limit_bInterDer = 13;
				limit_mInterIzq = 14;
				limit_mInterDer = 17;
				limit_aInterIzq = 18;
				limit_aInterDer = 19;

				if(reflexivo <= limit_mbInterDer)
				{
					stPreferencia = "<b>Muy baja</b>";
					stNivelEres = "<b>Eres poco</b>: ";
				}else if (reflexivo>=limit_bInterIzq && reflexivo<=limit_bInterDer) {
					stPreferencia = "<b>Baja</b>";
					stNivelEres = "<b>Te cuesta trabajo ser</b>: ";
				}else if (reflexivo>=limit_mInterIzq && reflexivo<=limit_mInterDer) {
					stPreferencia = "<b>Moderada</b>";
					stNivelEres = "<b>Regularmente eres</b>: ";
				}else if (reflexivo>=limit_aInterIzq && reflexivo<=limit_aInterDer) {
					stPreferencia = "<b>Alta</b>";
					stNivelEres = "<b>Prefieres ser</b>: ";
				}else if (reflexivo == 20) {
					stPreferencia = "<b>Muy alta</b>";
					stNivelEres = "<b>Eres muy</b>: ";
				}

			break;
		}
	}

	function calculatePreferencesActive()
	{
		calculatePreferences('activ');

			$('#nivelActivo').html(stPreferencia);
			$('#eresActivo').html(stNivelEres);

	}

	function calculatePreferencesTheoric()
	{
		calculatePreferences('teori');

			$('#nivelTeorico').html(stPreferencia);
			$('#eresTeorico').html(stNivelEres);
	}

	function calculatePreferencesPragmatic()
	{
		calculatePreferences('pragm');

			$('#nivelPragmatico').html(stPreferencia);
			$('#eresPragmatico').html(stNivelEres);
	}

	function calculatePreferencesReflexive()
	{
		calculatePreferences('refle');

			$('#nivelReflexivo').html(stPreferencia);
			$('#eresReflexivo').html(stNivelEres);
	}

	function showResults()
	{

		//set values to activo
		$('#nivelActivo').html();

		$("#contenedorInterpreta").removeClass().addClass('bounceOutRight animated');
		setTimeout(function(){
			$("#contenedorInterpreta").removeClass().addClass('hideit');
		}, 500);

		setTimeout(function(){
			$("#notis, #resultados").removeClass().addClass('man bounceInLeft animated');
		}, 500);

	}

	function hideResults()
	{
			$("#notis, #resultados").removeClass().addClass("bounceOutLeft animated");
			setTimeout(function(){
				$("#notis, #resultados").removeClass().addClass('hideit');
			}, 500);
	}

	function drawInterpretation(estiloSelec, preferencia)
	{

		var mbInterDer = 0;
		var bInterIzq = 0;
		var bInterDer = 0;
		var mInterIzq = 0;
		var mInterDer = 0;
		var aInterIzq = 0;
		var aInterDer = 0;
		var maInterIzq = 0;

		//console.log("ES: " + estiloSelec + " preferencia: " + preferencia);

		switch (estiloSelec) {

			case 'pA':

					mbInterDer = 6;
					bInterIzq = 7;
					bInterDer = 8;
					mInterIzq = 9;
					mInterDer = 12;
					aInterIzq = 13;
					aInterDer = 14;
					maInterIzq = 15;

					stEstilo = "Activo";
					stImagen = "assets/img/ea2.png";
					stAlt = "Estilo activo";
					video = 'activo.html';
					stEres = "Animador, Improvisador, Descubridor, Arriesgado, Espontáneo.";
					theColor = '#E26B0A';

					stCaracteristicas = ""+
					"Los alumnos activos <b>se involucran totalmente</b> y sin prejuicios en las <b>experiencias nuevas</b>.<br><br>" +
					"<b>Disfrutan</b> el momento presente y se dejan llevar por los acontecimientos.<br><br>" +
					"<b>Suelen ser entusiastas ante lo nuevo</b> y tienden a actuar primero y pensar después en las consecuencias.<br><br>"+
					"<b>Llenan sus días de actividades</b> y tan pronto disminuye el encanto de una de ellas se lanzan a la siguiente.<br><br>"+
					"<b>Les aburre ocuparse de planes a largo plazo y consolidar los proyectos</b>, les gusta trabajar rodeados de gente, pero siendo el centro de las actividades.";

					stPreguntaResponder = "¿Cómo?";
					stAprendeMejor = "" +
					"Cuando se lanzan a una <b>actividad</b> que les presente un desafío.<br><br>" +
					"Cuando realizan <b>actividades cortas</b> y de resultado inmediato.<br><br>" +
					"Cuando hay <b>emoción, drama y crisis</b>.";

					stCuestaTrabajo = "" +
					"Cuando tienen que <b>adoptar un papel pasivo</b>.<br><br>" +
					"Cuando tienen que <b>asimilar, analizar e interpretar datos</b>.<br><br>" +
					"Cuando tienen que <b>trabajar solos</b>.";

					stRecomendaciones = "" +
					"Sugerencias de cómo mejorar el estilo<br><br>" +
					"1. Hacer algo nuevo al menos una vez por semana (llevar algo llamativo al lugar de estudio; leer un periódico con opiniones contrarias a las suyas; cambiar los muebles de sitio).<br><br>" +
					"2. Practicar el iniciar conversaciones con personas no conocidas (en reuniones grandes, forzarse a iniciar y sostener conversaciones con todos los presentes, si es posibles y exponer nuestras ideas).<br><br>" +
					"3. Deliberadamente fragmentar el día cambiando actividades cada media hora (hacer el cambio lo más diverso posible; después de una actividad cerebral hacer una tarea rutinaria o mecánica).<br><br>" +
					"4. Forzarse a ocupar el primer plano (presentarse como voluntario para hablar, presidir reuniones.<br><br>" +
					"5. Someterse a la prueba de hacer aportaciones sustanciales en los diez primeros minutos.<br><br>" +
					"Pregúntate constantemente<br><br>" +
					"1. ¿Aprenderé algo nuevo, algo que no sabía o no podía hacer antes?<br><br>" +
					"2. ¿Habrá amplia variedad de actividades? No quiero tener que escuchar mucho tiempo sentado sin hacer nada.<br><br>" +
					"3. ¿Se aceptará que intente algo nuevo, cometa errores, me divierta?<br><br>" +
					"4. ¿Encontraré algunos problemas y dificultades que sean un reto para mí?<br><br>" +
					"5. ¿Habrá otras personas de mentalidad similar a la mía con las que poder dialogar?";
				break;

			case 'pT':

					mbInterDer = 6;
					bInterIzq = 7;
					bInterDer = 9;
					mInterIzq = 10;
					mInterDer = 13;
					aInterIzq = 14;
					aInterDer = 15;
					maInterIzq = 16;

					stEstilo = "Teórico";
					stImagen = "assets/img/et.png";
					stAlt = "Estilo teórico";
					video = 'teorico.html';
					stEres = "Metódico, Lógico, Objetivo, Crítico, Estructurado.";
					theColor = "#CC9900";

					//console.log("ES: " + estiloSelec + " preferencia: " + preferencia);
					//console.log();

					stCaracteristicas = "" +
					"Los alumnos teóricos <b>adaptan e integran las observaciones</b> que realizan en teorías complejas y bien fundamentadas lógicamente.<br><br>" +
					"<b>Piensan de forma secuencial y paso a paso</b>, integrando hechos dispares en teorías coherentes.<br><br>" +
					"Les gusta <b>analizar y sintetizar la información</b> y su sistema de valores premia la lógica y la racionalidad.<br><br>" +
					"Se <b>sienten incómodos</b> con los <b>juicios subjetivos</b>, las <b>técnicas de pensamiento</b> lateral y las <b>actividades faltas de lógica clara</b>.";

					stPreguntaResponder = "¿Qué?";

					stAprendeMejor = "" +
					"A partir de <b>modelos, teorías, sistemas con ideas y conceptos</b> que presenten un desafío.<br><br>" +
					"Cuando tienen <b>oportunidad de preguntar e indagar</b>.";

					stCuestaTrabajo = "" +
					"Con actividades que impliquen <b>ambigüedad e incertidumbre.</b><br><br>" +
					"En situaciones que enfaticen las <b>emociones y los sentimientos.</b><br><br>" +
					"Cuando tienen que <b>actuar sin un fundamento teórico.</b>";

					stRecomendaciones = "" +
					"Sugerencias de cómo mejorar el estilo<br><br>" +
					"1. Leer algo denso que estimule el pensamiento durante 30 minutos diarios. Luego intentar resumir lo leído en palabras propias.<br><br>" +
					"2. Practicar el detectar incoherencias o puntos débiles en argumentos de otros, en informes, etc. Tomar dos periódicos de ideologías distintas y hacer regularmente un análisis comparativo entre sus diferencias.<br><br>" +
					"3. Tomar una situación compleja y analizarla para señalar por qué se realizó de esa forma, lo que pudo haberse hecho distinto y en qué momento (situaciones históricas o de la vida cotidiana; análisis de cómo se utilizó el propio tiempo; análisis de todas las personas con las que interactúa durante un día).<br><br>" +
					"4. Resumir teorías, hipótesis y explicaciones de acontecimientos dados por otras personas (ecología, sociología, ciencias naturales, conducta humana, etc., un tema con muchas contradicciones). Tratar de comprender y ver si pueden agrupar las teorías similares.<br><br>" +
					"5. Practicar la estructuración de situaciones de manera que sean ordenadas (estructurar el horario, las tareas, las sesiones, una reunión; establecer una finalidad clara; planificar el comienzo).<br><br>" +
					"6. Inventar procedimientos para resolver problemas.<br><br>" +
					"7. Practicar la manera de hacer preguntas exigentes que vayan al fondo de la cuestión, que estén encaminadas a averiguar por qué ha ocurrido algo. Rechazar propuestas vagas y faltas de concreción.<br><br>" +

					"Pregúntate constantemente<br><br>" +
					"1. ¿Habrá muchas oportunidades de preguntar?<br><br>" +
					"2. ¿Los objetivos y las actividades del programa revelan una estructura y finalidad clara?<br><br>" +
					"3. ¿Encontraré ideas complejas capaces de enriquecerme?<br><br>" +
					"4. ¿Son sólidos y valiosos los conocimientos y métodos que van a utilizarse?<br><br>" +
					"5. ¿El nivel del grupo será similar al mío?";

			break;

			case 'pP':

					mbInterDer = 8;
					bInterIzq = 9;
					bInterDer = 10;
					mInterIzq = 11;
					mInterDer = 13;
					aInterIzq = 14;
					aInterDer = 15;
					maInterIzq = 16;

					stEstilo = "Pragmático";
					stImagen = "assets/img/ep.png";
					stAlt = "Estilo pragmático";
					video = 'pragmatico.html';
					stEres = "Experimentador, Práctico, Directo, Eficaz, Realista.";
					theColor = "#666699";

					stCaracteristicas = "" +
					"A los alumnos pragmáticos les gusta <b>probar ideas, teorías y técnicas nuevas, y comprobar</b> si funcionan en la práctica.<br><br>" +
					"Les gusta buscar <b>ideas y ponerlas en práctica inmediatamente</b>, les aburren e impacientan las largas conversaciones sobre el mismo tema.<br><br>" +
					"Son básicamente gente práctica, apegada a la realidad, a la que le gusta tomar decisiones y resolver problemas.<br><br>" +
					"Los problemas son un <b>desafío y siempre están buscando una manera mejor</b> de hacer las cosas.";

					stPreguntaResponder = "¿Qué pasaría si...?";

					stAprendeMejor = "" +
					"Con actividades que <b>relacionen la teoría y la práctica</b>.<br><br>" +
					"Cuando <b>ven a los demás hacer algo</b>.<br><br>" +
					"Cuando tienen la posibilidad de poner en <b>práctica inmediatamente</b> lo que han aprendido.";

					stCuestaTrabajo = "" +
					"Cuando lo que <b>aprenden no se relacionan</b> con sus necesidades inmediatas.<br><br>" +
					"Con aquellas <b>actividades que no tienen una finalidad</b> aparente.<br><br>" +
					"Cuando lo que <b>hacen no está relacionado</b> con la 'realidad'.";

					stRecomendaciones = "" +
					"Sugerencias de cómo mejorar el estilo<br><br>" +
					"1. Poner en práctica algo nuevo (realiza un proyecto, siembra un árbol, visita un lugar diferente sin planearlo).<br><br>" +
					"2. Inicia plática con personas no conocidas sin pensarlo.<br><br>" +
					"3. Cambia tu rutina, (cambia rutas de traslado una vez a la semana).<br><br>" +
					"4. Si ves algo que te interesa aplícalo o impleméntalo (manualidades, decoración del hogar).<br><br>" +
					"5. Búscale aplicación práctica a lo que veas o aprendas se práctico).<br><br>" +
					"6. Innova algo.<br><br>" +
					"7. Toma decisiones basándote en principios científicos u hechos objetivos.<br><br>" +
					"8. No tengas miedo a equivocarte.<br><br>" +

					"Pregúntate constantemente<br><br>" +
					"1. ¿Habrá posibilidades de practicar y experimentar?<br><br>" +
					"2. ¿Habrá suficientes indicaciones prácticas y concretas?<br><br>" +
					"3. ¿Se abordarán problemas reales y me ayudarán a resolver los míos?";
			break;

			case 'pR':

					mbInterDer = 10;
					bInterIzq = 11;
					bInterDer = 13;
					mInterIzq = 14;
					mInterDer = 17;
					aInterIzq = 18;
					aInterDer = 19;

					stEstilo = "Reflexivo";
					stImagen = "assets/img/er.png";
					stAlt = "Estilo reflexivo";
					video = 'reflexivo.html';
					stEres = "Ponderado, Concienzudo, Receptivo, Analítico, Exhaustivo.";
					theColor = "#558ED5";

					stCaracteristicas = "" +
					"Los alumnos reflexivos tienden a adoptar la postura de un <b>observador</b> que analiza sus experiencias desde muchas perspectivas distintas.<br><br>" +
					"<b>Recogen datos y los analizan detalladamente antes de llegar a una conclusión.</b> Para ellos lo más importante es esa recogida de datos y su análisis concienzudo, así que procuran posponer las conclusiones todo lo que pueden.<br><br>" +
					"Son <b>precavidos y analizan</b> todas las implicaciones de cualquier acción antes de ponerse en movimiento.<br><br>" +
					"En las reuniones <b>observan y escuchan antes de hablar</b>, procurando pasar desapercibidos.";

					stPreguntaResponder = "¿Por qué?";

					stAprendeMejor = "" +
					"Cuando adoptan la postura del <b>observador</b>.<br><br>" +
					"Cuando pueden ofrecer <b>observaciones y analizar la situación</b>.<br><br>" +
					"Cuando pueden <b>pensar antes de actuar</b>.";

					stCuestaTrabajo = "" +
					"Cuando se les fuerza a <b>convertirse en el centro de la atención</b>.<br><br>" +
					"Cuando se les <b>apresura de una actividad a otra</b>.<br><br>" +
					"Cuando tienen que <b>actuar sin poder planificar</b> previamente.";

					stRecomendaciones = "" +
					"<b>Sugerencias de cómo mejorar el estilo</b><br><br>" +
					"1. Practicar la observación. Estudiar el comportamiento de las personas (anotar quién habla más, quién interrumpe, con qué frecuencia resume el profesor, etc.; estudiar el comportamiento no verbal, cuando las personas miran el reloj, cruzan los brazos, muerden el lápiz, etc.).<br><br>" +
					"2. Llevar un diario personal. Reflexionar sobre los acontecimientos del día y ver si se pueden obtener conclusiones de ellos.<br><br>" +
					"3. Practicar la revisión después de una reunión o acontecimiento (repasar la secuencia de los acontecimientos, lo que fue bien, lo que se podría mejorar; registrar en cinta un diálogo y reproducirlo al menos dos veces; enlistar lecciones aprendidas de esa forma).<br><br>" +
					"4. Investigar algo que exija una difícil recolección de datos de diferentes fuentes. Pasar varias horas en la biblioteca consultando ficheros.<br><br>" +
					"5. Practicar la manera de escribir con sumo cuidado (escribir ensayos sobre distintos temas; escribir un artículo o informe sobre algo).<br><br>" +
					"6. Guardar lo ya escrito durante una semana y luego forzarse a volver para mejorarlo.<br><br>" +
					"7. Tomar un asunto controvertido y elaborar argumentos equilibrados desde dos puntos de vista. Hacer listas a favor y en contra de un determinado curso, diálogo, tema de conversación, etc.<br><br>" +
					"8. Prevenir las personas deseosas de lanzarse a la acción, para que consideren alternativas y prevean las consecuencias.<br><br>" +

					"<b>Pregúntate constantemente</b><br><br>" +
					"1. ¿Tendré tiempo suficiente para analizar, asimilar, y preparar?<br><br>" +
					"2. ¿Habrá oportunidades y factibilidad para reunir la información pertinente?<br><br>" +
					"3. ¿Podré oír los puntos de vista de otras personas, preferiblemente de opiniones diferentes?<br><br>" +
					"4. ¿Me veré sometido a presión para actuar improvisadamente?";
			break;
		}

		if(estiloSelec == 'pR'){

			if(preferencia <= mbInterDer)
			{
				stPreferencia = "Muy baja";
				stNivelEres = "Eres poco: ";
				stPorcentajePrefe = "10%";
			}else if (preferencia>=bInterIzq && preferencia<=bInterDer) {
				stPreferencia = "Baja";
				stNivelEres = "Te cuesta trabajo ser: ";
				stPorcentajePrefe = "20%";
			}else if (preferencia>=mInterIzq && preferencia<=mInterDer) {
				stPreferencia = "Moderada";
				stNivelEres = "Regularmente eres: ";
				stPorcentajePrefe = "40%";
			}else if (preferencia>=aInterIzq && preferencia<=aInterDer) {
				stPreferencia = "Alta";
				stNivelEres = "Prefieres ser: ";
				stPorcentajePrefe = "20%";
			}else if (preferencia == 20) {
				stPreferencia = "Muy alta";
				stNivelEres = "Eres muy: ";
				stPorcentajePrefe = "10%";
			}

		}else{

			if(preferencia <= mbInterDer)
			{
				stPreferencia = "Muy baja";
				stNivelEres = "Eres poco: ";
				stPorcentajePrefe = "10%";
			}else if (preferencia>=bInterIzq && preferencia<=bInterDer) {
				stPreferencia = "Baja ";
				stNivelEres = "Te cuesta trabajo ser: ";
				stPorcentajePrefe = "20%";
			}else if (preferencia>=mInterIzq && preferencia<=mInterDer) {
				stPreferencia = "Moderada";
				stNivelEres = "Regularmente eres: ";
				stPorcentajePrefe = "40%";
			}else if (preferencia>=aInterIzq && preferencia<=aInterDer) {
				stPreferencia = "Alta";
				stNivelEres = "Prefieres ser: ";
				stPorcentajePrefe = "20%";
			}else if (preferencia>=maInterIzq && preferencia<=20) {
				stPreferencia = "Muy alta";
				stNivelEres = "Eres muy: ";
				stPorcentajePrefe = "10%";
			}

		}

		if (stPreferencia === "Alta" || stPreferencia === "Muy alta") {
			$("#parrafo_Recomendaciones").removeClass('showit').addClass('hideit');
		}else {
			$("#parrafo_Recomendaciones").removeClass('hideit').addClass('showit');
		}


		$("#tipoEstilo").html('Estilo ' + stEstilo);
		$("#estiloImg").attr("src", stImagen).attr("alt", stAlt);
		$("#nivelPreferencia").html(stPreferencia).css('color', theColor);
		$('#video').attr('href', video);
		$("#pEres").html(stNivelEres + stEres);
		$("#pCaracteristicas").html(stCaracteristicas);
		$("#pPreguntaResponder").html(stPreguntaResponder);
		$("#pAprendeMejor").html(stAprendeMejor);
		$("#pCuestaTrabajo").html(stCuestaTrabajo);
		$("#pRecomendaciones").html(stRecomendaciones);
		$("#contenedorInterpreta").addClass('showit bounceInRight animated');
	}

function randomNumberFromRange(min,max)
{
    effectNumber = (Math.floor(Math.random()*(max-min+1)+min));

		return effectNumber;
}

function randomQuestion()
{
		max = questions.length;
		realSize = max - 1;

		if(max > 0){
			numberQuestion = Math.floor(Math.random()*(realSize-0+1)+0);
		}else {

		}

		var questionXplode = questions[numberQuestion].split("_");
		var questionRemove = questions[numberQuestion];

		questions.splice($.inArray(questionRemove, questions), 1);

		$("#pregunta").html(questionXplode[1]);
		$("#numberQ").val(questionXplode[0]);
		$("#contaQ").html(contaQ);

}

function changeQ(){

	max = questions.length;
	realSize = max - 1;
	contaQ++;

	if (realSize == -1) {

		porcentajeA = (activo * 100) / 20;

		if(isNaN(porcentajeA)){
				porcentajeA = 0;
			}

			if (porcentajeA === 0) {
					$("#porcentajeActivo").width('0.5%');
					$("#porcentajeActivo").html('0 de valoración');
			}
			else{
					//$("#porcentajeActivo").width(porcentajeA + '%');
					$("#porcentajeActivo").css('width', porcentajeA + '%');
					$("#porcentajeActivo").html(activo + ' de valoración');
					//alert("pa: " + porcentajeA);
			}

			porcentajeT = (teorico * 100) / 20;

			if(isNaN(porcentajeT)){
					porcentajeT = 0;
				}

				if (porcentajeT === 0) {
						$("#porcentajeTeorico").width('0.5%');
						$("#porcentajeTeorico").html('0 de valoración');
				}
				else{
						//$("#porcentajeActivo").width(porcentajeA + '%');
						$("#porcentajeTeorico").css('width', porcentajeT + '%');
						$("#porcentajeTeorico").html(teorico + ' de valoración');
				}

				porcentajeP = (pragmatico * 100) / 20;

				if(isNaN(porcentajeP)){
						porcentajeP = 0;
					}

					if (porcentajeP === 0) {
							$("#porcentajePragmatico").width('0.5%');
							$("#porcentajePragmatico").html('0 de valoración');
					}
					else{
							//$("#porcentajeActivo").width(porcentajeA + '%');
							$("#porcentajePragmatico").css('width', porcentajeP + '%');
							$("#porcentajePragmatico").html(pragmatico + ' de valoración');
					}

					porcentajeR = (reflexivo * 100) / 20;

					if(isNaN(porcentajeR)){
							porcentajeR = 0;
						}

						if (porcentajeR === 0) {
								$("#porcentajeReflexivo").width('0.5%');
								$("#porcentajeReflexivo").html('0 de valoración');
						}
						else{
								//$("#porcentajeActivo").width(porcentajeA + '%');
								$("#porcentajeReflexivo").css('width', porcentajeR + '%');
								$("#porcentajeReflexivo").html(reflexivo + ' de valoración');
						}

		$("#questions, #buttons, #contentContaQ").removeClass().addClass('hideit fadeOut animated');

		setTimeout(function(){
			$("#notis").removeClass().addClass('fadeIn animated').html("Resultados");
			$("#resultados").removeClass().addClass('showit fadeIn animated');
		//	$("#questions").removeClass().addClass('showit fadeIn animated').load('graphics.html');
	}, 300);
	}else {
		if (max > 0) {
			numberQuestion = Math.floor(Math.random()*(realSize-0+1)+0);
		}else {

		}

		var questionXplode = questions[numberQuestion].split("_");
		var questionRemove = questions[numberQuestion];

		questions.splice($.inArray(questionRemove, questions), 1);

		$("#numberQ").val(questionXplode[0]);
		$("#contaQ").html(contaQ + '/80');
		$("#questions").addClass('fadeOut animated');

		setTimeout(function(){
				$("#questions").removeClass().addClass('fadeIn animated');
				$("#pregunta").html(questionXplode[1]);
		}, 1100);

		setTimeout(function(){
			$("#questions").removeClass("hideit").addClass("showit");
		}, 1000);

	}
}

function hideIni(){

	$("#notis").addClass('hideit');
	$("#instrucciones").addClass('hideit');
	$("#q1").addClass('showit bounceInLeft animated');
	$("#questions").removeClass().addClass('showit bounceInRight animated');
	setTimeout(function(){$("#buttons, #contentContaQ").removeClass().addClass('showit bounceInRight animated');},100);
	$('#contaQ').html(contaQ+'/80');

}

function showDetails(headParagraph){

	var keyWord = headParagraph.split('_');
	var isVarOn = false;

	switch(keyWord[1]){

		case'Caracteristicas':
			isVarOn = isCarateristicasOn;
			isCarateristicasOn = !isVarOn;
		break;

		case'PreguntaResponder':
			isVarOn = isPreguntaResponderOn;
			isPreguntaResponderOn = !isVarOn;
		break;

		case'AprendeMejor':
			isVarOn = isAprendeMejorOn;
			isAprendeMejorOn = !isVarOn;
		break;

		case'CuestaTrabajo':
			isVarOn = isCuestaTrabajoOn;
			isCuestaTrabajoOn = !isVarOn;
		break;

		case'Recomendaciones':
			isVarOn = isCuestaTrabajoOn;
			isCuestaTrabajoOn = !isVarOn;
		break;

		case'Recuerda':
			isVarOn = isRecuerdaOn;
			isRecuerdaOn = !isVarOn;
		break;
	}

	if (isVarOn === false) {
			$('#'+keyWord[1]+'').removeClass().addClass('showit fadeIn animated');
			varOn = true;
			return false;
	}

	if(isVarOn === true){
			$('#'+keyWord[1]+'').removeClass().addClass('fadeOut animated');
			setTimeout(function(){
				$('#'+keyWord[1]+'').addClass('hideit');
			},1000);
			return false;
	}
}

function popitup(url) {
	newwindow=window.open(url,'name','height=320,width=480');
	if (window.focus) {newwindow.focus()}
	return false;
}

$(document).ready(function(){

	$('#btnPrint').click(function(){
		window.open('assets/gears/exgra.php?iv='+ activo +'&px='+teorico+'&py='+pragmatico+'&oz='+reflexivo+'&la='+$('#nivelActivo').text()+'&lt='+$('#nivelTeorico').text()+'&lp='+$('#nivelPragmatico').text()+'&lr='+$('#nivelReflexivo').text()+'&cust=0&pe=x&na=x&gr=x&cta=x&aps=x&mail=x&se=x&peri=x', '_blank');
	});

	$('#btnPrintCustom').click(function(){
		window.open('assets/gears/exgra.php?iv='+ activo +'&px='+teorico+'&py='+pragmatico+'&oz='+reflexivo+'&cta='+$('#cta').val()+'&aps='+$('#aps').val()+'&na='+$('#na').val()+'&mail='+$('#mail').val()+'&pe='+$('#pe').val()+'&gr='+$('#gr').val()+'&se='+$('#se').val()+'&la='+$('#nivelActivo').text()+'&lt='+$('#nivelTeorico').text()+'&lp='+$('#nivelPragmatico').text()+'&lr='+$('#nivelReflexivo').text()+'&cust=1'+'&peri='+$('#peri').val(), '_blank');
	});

	$("#btnStart").click(function(event){

		event.preventDefault();
		contaQ++;

		$("#notis").addClass('bounceOutLeft');
		setTimeout(function(){$("#i0").addClass('bounceOutLeft');},50);
		setTimeout(function(){$("#i1").addClass('bounceOutLeft');},100);
		setTimeout(function(){$("#i2").addClass('bounceOutLeft');},200);
		setTimeout(function(){$("#i3").addClass('bounceOutLeft');},300);
		setTimeout(function(){$("#i4").addClass('bounceOutLeft');},400);
		setTimeout(function(){$("#i5").addClass('bounceOutLeft');},500);
		setTimeout(function(){$("#i6").addClass('bounceOutLeft');},600);
		setTimeout(function(){$("#btnStart").addClass('bounceOutLeft');},700);
		setTimeout(function(){$('#lista').addClass('hideit')}, 1100)
		setTimeout(function(){hideIni();},1100);

		randomQuestion();

	});

	$("#btnSi").click(function(){

		var number_Q = $("#numberQ").val();

		//alert(number_Q);

		switch(number_Q){
			// Activos 3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77
			case '3':
			case '5':
			case '7':
			case '9':
			case '13':
			case '20':
			case '26':
			case '27':
			case '35':
			case '37':
			case '41':
			case '43':
			case '46':
			case '48':
			case '51':
			case '61':
			case '67':
			case '74':
			case '75':
			case '77':

			activo++;

			break;

			// Reflexivos 10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79
			case '10':
			case '16':
			case '18':
			case '19':
			case '28':
			case '31':
			case '32':
			case '34':
			case '36':
			case '39':
			case '42':
			case '44':
			case '49':
			case '55':
			case '58':
			case '63':
			case '65':
			case '69':
			case '70':
			case '79':

			reflexivo++;

			break;

			// Teorico 2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80
			case '2':
			case '4':
			case '6':
			case '11':
			case '15':
			case '17':
			case '21':
			case '23':
			case '25':
			case '29':
			case '33':
			case '45':
			case '50':
			case '54':
			case '60':
			case '64':
			case '66':
			case '71':
			case '78':
			case '80':

			teorico++;

			break;

			// pragmatico 1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76
			case '1':
			case '8':
			case '12':
			case '14':
			case '22':
			case '24':
			case '30':
			case '38':
			case '40':
			case '47':
			case '52':
			case '53':
			case '56':
			case '57':
			case '59':
			case '62':
			case '68':
			case '72':
			case '73':
			case '76':

			pragmatico++;

			break;
		}

		changeQ();
		calculatePreferencesActive();
		calculatePreferencesTheoric();
		calculatePreferencesPragmatic();
		calculatePreferencesReflexive();
	});

	$("#btnNo").click(function(){
		changeQ();
		calculatePreferencesActive();
		calculatePreferencesTheoric();
		calculatePreferencesPragmatic();
		calculatePreferencesReflexive();
	});

		$("#contenedorResultados").click(function(){
			hideResults();
			estilo = $(this).find('p').attr('id');
			//activo = $("#rActivo").val();
			setTimeout(function(){
					drawInterpretation(estilo, activo);
			},500);
		});

		$("#contenedorTeorico").click(function(){
			hideResults();
			estilo = $(this).find('p').attr('id');
			//teorico = $("#rTeorico").val();
			setTimeout(function(){
					drawInterpretation(estilo, teorico);
			},500);
		});

		$("#contenedorPragmatico").click(function(){
			hideResults();
			estilo = $(this).find('p').attr('id');
			//pragmatico = $("#rPragmatico").val();
			setTimeout(function(){
					drawInterpretation(estilo, pragmatico);
			},500);
		});

		$("#contenedorReflexivo").click(function(){
			hideResults();
			estilo = $(this).find('p').attr('id');
			//reflexivo = $("#rReflexivo").val();
			setTimeout(function(){
					drawInterpretation(estilo, reflexivo);
			},500);
		});

		$("#parrafo_Caracteristicas").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_PreguntaResponder").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_AprendeMejor").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_CuestaTrabajo").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_Recomendaciones").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_Recuerda").click(function(){
			var pHead = $(this).attr('id');
			showDetails(pHead);
		});

		$("#parrafo_Regresar").click(function(){
			showResults();
		});

		$("#parrafo_RegresarUp").click(function(){
			showResults();
		});

});
