function rand(n){

    return(Math.floor(Math.random() * n + 1 ));
    }
    
var texto_idea = new Array();
texto_idea[0] = "La tonalidad de azul que vemos refractada en el cielo es Cerúleo.";
texto_idea[1] = "Pareidolia es el término para encontrarle forma a las nubes y objetos en general.";
texto_idea[2] = "El 15 de junio de 1215 se firmó la carta magna de Inglaterra.";
texto_idea[3] = "El dramaturgo William Shakespeare falleció el 23 de abril de 1616.";
texto_idea[4] = "Existe una fobia por tener que ir a trabajar y se llama Ergofobia.";
texto_idea[5] = "La cama donde duerme una pareja es denominada como Tálamo.";
texto_idea[6] = "La ambrosía era una bebida que le daba la inmortalidad a los dioses griegos.";
texto_idea[7] = "El símbolo de la medicina es la vara de Asclepio, artefacto que utilizaba el dios Asclepio.";
texto_idea[8] = "Marte tiene dos lunas, Fobos y Deimos, nombres dados por los hijos de Afrodita y Ares.";
texto_idea[9] = "La marca de carros Rolls Royce esconde un paraguas en la puerta de sus vehículos.";
texto_idea[10] = "Las gotas de lluvia caen a una velocidad de entre 14 y 30 km/h.";
texto_idea[11] = "El punto rojo que las personas hindúes se ponen en la frente se llama Bindi.";
texto_idea[12] = "Uruguay ganó el mundial de fútbol en 1930.";
texto_idea[13] = "Nicolás II fue el último Zar de Rusia.";
texto_idea[14] = "La bomba que cayó sobre Hiroshima se llama Litle Boy y detonó el 6 de agosto de 1945.";



function celular_texto_idea_aleatorio(){
    document.getElementById("id_texto_aleatorio_index").textContent=texto_idea[rand(15)-1];
    document.getElementById("id_texto_aleatorio").textContent=texto_idea[rand(15)-1];
}

celular_texto_idea_aleatorio();





function celular_index_bloque_1(){
    document.getElementById("id_celular_parejas").style.background="none";
    document.getElementById("id_celular_naturaleza").style.background="none";
    document.getElementById("id_celular_comida").style.background="none";

    document.getElementById("id_celular_nuevo").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_1").textContent="Nuevo";
    document.getElementById("id_celular_imagen_bloque_1").src="assets/img/nuevo.png";

    document.getElementById("id_celular_descripcion_de_bloques_1").textContent="¿Buscar aprendes cosas nuevas? Checa lo más nuevo que tenemos para ti y tu mente.";
}

function celular_index_bloque_4(){
    document.getElementById("id_celular_nuevo").style.background="none";
    document.getElementById("id_celular_parejas").style.background="none";
    document.getElementById("id_celular_naturaleza").style.background="none";

    document.getElementById("id_celular_comida").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_1").textContent="Comida";
    document.getElementById("id_celular_imagen_bloque_1").src="assets/img/comida.png";

    document.getElementById("id_celular_descripcion_de_bloques_1").textContent="Pon aprueba y consiente a tus papilas gustativas con la ambrosía culinaria que hay en estos lugares.";
}

function celular_index_bloque_3(){
    document.getElementById("id_celular_nuevo").style.background="none";
    document.getElementById("id_celular_parejas").style.background="none";
    document.getElementById("id_celular_comida").style.background="none";

    document.getElementById("id_celular_naturaleza").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_1").textContent="Naturaleza";
    document.getElementById("id_celular_imagen_bloque_1").src="assets/img/hoja.png";

    document.getElementById("id_celular_descripcion_de_bloques_1").textContent="Entra en contacto con la naturaleza y libera tu mente de la rutina diaria en estos lugares verdes.";
}

function celular_index_bloque_2(){
    document.getElementById("id_celular_nuevo").style.background="none";
    document.getElementById("id_celular_comida").style.background="none";
    document.getElementById("id_celular_naturaleza").style.background="none";

    document.getElementById("id_celular_parejas").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_1").textContent="Parejas";
    document.getElementById("id_celular_imagen_bloque_1").src="assets/img/pareja.png";

    document.getElementById("id_celular_descripcion_de_bloques_1").textContent="Sal con esa persona especial y descubran juntos las maravillas de la vida que les están esperando.";
}





function celular_index_bloque_5(){
    document.getElementById("id_celular_turismo").style.background="none";
    document.getElementById("id_celular_moda").style.background="none";
    document.getElementById("id_celular_cultura").style.background="none";

    document.getElementById("id_celular_tecnologia").style.background="linear-gradient(#ec8b6b, #ed6e9f)";


    document.getElementById("id_celular_texto_bloque_2").textContent="Tecnología";
    document.getElementById("id_celular_imagen_bloque_2").src="assets/img/tecnologia.png";

    document.getElementById("id_celular_descripcion_de_bloques").textContent="Evita que la tecnología te supere. Demuestra que sabes del tema y aprende como usarla a tu favor.";
}

function celular_index_bloque_6(){
    document.getElementById("id_celular_tecnologia").style.background="none";
    document.getElementById("id_celular_turismo").style.background="none";
    document.getElementById("id_celular_cultura").style.background="none";

    document.getElementById("id_celular_moda").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_2").textContent="Moda";
    document.getElementById("id_celular_imagen_bloque_2").src="assets/img/moda.png";

    document.getElementById("id_celular_descripcion_de_bloques").textContent="Más que ropa y lujo, es un arte. Aprende todo acerca de esta industria y conviértete en un experto.";
}

function celular_index_bloque_7(){
    document.getElementById("id_celular_tecnologia").style.background="none";
    document.getElementById("id_celular_moda").style.background="none";
    document.getElementById("id_celular_turismo").style.background="none";

    document.getElementById("id_celular_cultura").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_2").textContent="Culura";
    document.getElementById("id_celular_imagen_bloque_2").src="assets/img/cultura.png";

    document.getElementById("id_celular_descripcion_de_bloques").textContent="La cultura es indispensable para comprender todo lo que nos rodea. Lleva más allá tus conocimientos con estos nuevos datos.";
}

function celular_index_bloque_8(){
    document.getElementById("id_celular_tecnologia").style.background="none";
    document.getElementById("id_celular_moda").style.background="none";
    document.getElementById("id_celular_cultura").style.background="none";

    document.getElementById("id_celular_turismo").style.background="linear-gradient(#ec8b6b, #ed6e9f)";

    document.getElementById("id_celular_texto_bloque_2").textContent="Turismo";
    document.getElementById("id_celular_imagen_bloque_2").src="assets/img/turismo.png";

    document.getElementById("id_celular_descripcion_de_bloques").textContent="¿Se te acabaron los lugares para visitar? Aquí podrás encontrar nuevas propuestas que serán de tu agrado.";
}

function celular_menu(){
    document.getElementById("celular_contenedor_general").style.left="-100%";
    document.getElementById("id_menu_de_opciones").style.display="flex";
}

if (window.cache){

    caches.open('').then(cache =>{

        cache.add('index.html');
        cache.add('assets/css/main.css');
        cache.add('assets/js/acciones.js');
        cache.add('assets/js/celular.js');
        cache.add('assets/js/main.js');
        cache.add('assets/img/main.js');

        cache.add('assets/img/hoja.png');
        cache.add('assets/img/comida.png');
        cache.add('assets/img/pareja.png');
        cache.add('assets/img/nuevo.png');
        cache.add('assets/img/cultura.png');
        cache.add('assets/img/tecnologia.png');
        cache.add('assets/img/turismo.png');
        cache.add('assets/img/moda.png');

    });
}

function celular_lupa_principal(){
    document.getElementById("id_bloque_busqueda").style.display="flex";
}

function buscardor_universal_index(){
    let textoTBuscadorUniversal = document.getElementById('id_buscardor_universal_index').value;
    let conversionUniversal = textoTBuscadorUniversal.toLowerCase();

    let BU_1 = "colecciones";
    let BU_2 = "destacado";
    let BU_3 = "dato";
    let BU_3_1 = "datos";
    let BU_4 = "nuevo";
    let BU_5 = "diccionario";
    let BU_6 = "tecnologia";
    let BU_7= "redactores";


    if (conversionUniversal == BU_1){

        location.href="#id_colecciones";

        console.log("correcto");
    }

    if (conversionUniversal == BU_2){

        location.href="#id_destacado";

        console.log("correcto");
    }

    if (conversionUniversal == BU_3 || conversionUniversal == BU_3_1){

        location.href="#id_dato";

        console.log("correcto");
    }

    if (conversionUniversal == BU_4){

        location.href="#id_celular_texto_bloque_1";

        console.log("correcto");
    }

    if (conversionUniversal == BU_5){

        location.href="#id_diccionario";

        console.log("correcto");
    }

    if (conversionUniversal == BU_6){

        location.href="#id_celular_texto_bloque_2";

        console.log("correcto");
    }

    if (conversionUniversal == BU_7){

        location.href="#id_redactores";

        console.log("correcto");
    }
}





function buscar_palabra(){
    var textoTitulo2 = document.getElementById('id_palabra').value;
    var conversion = textoTitulo2.toLowerCase();

    console.log(conversion);

    var comparacion_1 = "talamo";
    var comparacion_2 = "tálamo";
    var comparacion_3 = "ambrosia";
    var comparacion_4 = "ambrosía";

    if (conversion == comparacion_1 || conversion == comparacion_2){

        document.getElementById("id_diccionario_definicion").textContent="Tálamo, término otorgado a la cama donde duerme una pareja.";

        console.log("correcto");
    }

    if (conversion == comparacion_3 || conversion == comparacion_4){

        document.getElementById("id_diccionario_definicion").textContent="La ambosía era una bebida que consumían las deidades griegas para ser inmortales.";

        console.log("correcto");
    }
}
