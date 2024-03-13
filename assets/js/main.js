function facebook(){
    location.href="https://www.facebook.com/ateneax.oficial";
}

window.onload = function() {
    var video = document.getElementById('video');
    video.onended = function() {
        video.currentTime = 0; // Reiniciar el video al final
        video.play(); // Reproducir el video nuevamente
    };
    document.getElementById('video-container').style.display = 'block'; // Mostrar el contenedor de video una vez que el video esté listo
};

function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    
var cambia_imagen = new Array();
cambia_imagen[0] = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjniCi3rPXLhZzStBQILYTdDAufg-gsnsrLq20WfSUWuvQHNxhuZv00QgUuyDIkSTrs1AGuj4XLXBhhYlcge_ZIAJRd8suEg1KOxeLQZQBbIZA68jkRvO87IBShB65zbLuWvUmMEcU75ayMWxNA_2BXESHOF8uPy12u83WZOylvO0Hk3dj-5VCRX0VeaO8/s320/restaurantesateneax2.webp";
cambia_imagen[1] = "https://blogger.googleusercontent.com/img/a/AVvXsEgRIXodhejtnJLYFvUVvYfmi0wncs2tt40xkw8dxiozecj4AOV7tEnrcnFSPfb3bVk98u-Dl8ZduXuM4d-OeuqhyNX9-WjMCl65zDhhwrDUNH8bMx01-8MgwmfyeKA0u75DpvD1dPE2tO7VzbiqnuA8NNJ84YGczfvqvG2soi8pXK4MAOM40MDGiNaQMaU";
cambia_imagen[2] = "https://media.timeout.com/images/105928081/750/422/image.jpg";
cambia_imagen[3] = "https://thehappening.com/wp-content/uploads/2019/12/terraza-chacha.jpg";

var cambia_imagen_index = new Array();
cambia_imagen_index[0] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_11.jpg";
cambia_imagen_index[1] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_10.jpg";
cambia_imagen_index[2] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_8.jpg";
cambia_imagen_index[3] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_7.jpg";

var cambia_imagen_index_lo_mas_visto = new Array();
cambia_imagen_index_lo_mas_visto[0] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_2.jpg";
cambia_imagen_index_lo_mas_visto[1] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_7.jpg";
cambia_imagen_index_lo_mas_visto[2] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_6.jpg";
cambia_imagen_index_lo_mas_visto[3] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_5.jpg";

var cambia_imagen_index_recomendadas = new Array();
cambia_imagen_index_recomendadas[0] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_1.jpg";
cambia_imagen_index_recomendadas[1] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_3.jpg";
cambia_imagen_index_recomendadas[2] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_8.jpg";
cambia_imagen_index_recomendadas[3] = "https://ateneax.github.io/assets/img/miniaturas/miniatura_4.jpg";

function tecnologia(){
    location.href="archivos/tecnologia.html";
}

function tecnologia_2(){
    location.href="../archivos/tecnologia.html";
}

function tecnologia_3(){
    location.href="../tecnologia.html";
}

function cultura(){/* dentro del index */
    location.href="archivos/cultura.html";
}

function cultura_2(){/* _2 dentro de las secciones, menu pues */
    location.href="../archivos/cultura.html";
}

function cultura_3(){/* _3 dentro de la nota */
    location.href="../cultura.html";
}

function moda(){
    location.href="archivos/moda.html";
}

function moda_2(){
    location.href="../archivos/moda.html";
}

function moda_3(){
    location.href="../moda.html";
}

function turismo(){
    location.href="archivos/turismo.html";
}

function turismo_2(){
    location.href="../archivos/turismo.html";
}

function turismo_3(){
    location.href="../turismo.html";
}

function inicio(){
    location.href="index.html";
}

function inicio_2(){
    location.href="../index.html";
}

function inicio_3(){
    location.href="../../index.html";
}


function index(){
    location.href="../index.html";
}

function proximamente(){
    location.href="archivos/muypronto.html";
}

function salir_menu_celulares(){
    document.getElementById("id_desplegar_menu").style.display="none";
}

function opcion_LFPDPPP(){
    document.getElementById("id_opcion_LFPDPPP").style.background="#f65190";
    document.getElementById("id_opcion_contenedor_LFPDPPP").style.display="flex";

}

function turismo_restaurantes(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Restaurantes";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Si estás buscando el lugar perfecto para comer, ya sea en grupo, solo, en familia o con tu pareja, te recomendamos visitar estos lugares que, muy seguramente, te serán de gran utilidad.";

    document.getElementById("id_turismo_102").style.background="none";
    document.getElementById("id_turismo_103").style.background="none";
    document.getElementById("id_turismo_104").style.background="none";
    document.getElementById("id_turismo_105").style.background="none";
    document.getElementById("id_turismo_101").style.background="linear-gradient(#f98c5a,75%,#af552b)";
    document.getElementById("img1").src=cambia_imagen[rand(4)-1];

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniaturas/miniatura_4.jpg";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniaturas/miniatura_8.jpg";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function turismo_viajes(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Viajes";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Explora nuevos lugares y descubre las maravillas del mundo que están reservadas para ti. Si quieres conocerlas necesitas echarle un vistazo a nuestras selecciones.";

    document.getElementById("id_turismo_103").style.background="none";
    document.getElementById("id_turismo_104").style.background="none";
    document.getElementById("id_turismo_105").style.background="none";
    document.getElementById("id_turismo_101").style.background="none";
    document.getElementById("id_turismo_102").style.background="linear-gradient(#f98c5a,75%,#af552b)";
    document.getElementById("img1").src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjhKEs4Dj8-jiG0tdguJres3IoB6UHFMg6D0HeZtOn2njMwgqYnbjIh0woaQSRayCX6xaEkWLfDqvsbOJ_qne7ZObHhJMsKQGda5oyOYIRWu60PDue9AZdJvD9v7kas_JmCd-nNB26FPGXT0piVzauFIPkcfTtCC-nPzWHrbmR4L6DgsW97LDfW6WvfUM/s320/viajesateneax.jpg";

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniaturas/miniatura_5.jpg";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniaturas/miniatura_7.jpg";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function turismo_artracciones(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Atracciones";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Aventúrate a vivir nuevas emociones en la con la variedad de atracciones que México esconde entre sus calles. Aquí te dejamos lo mejor de todas ellas.";

    document.getElementById("id_turismo_102").style.background="none";
    document.getElementById("id_turismo_103").style.background="linear-gradient(#f98c5a,75%,#af552b)";
    document.getElementById("id_turismo_104").style.background="none";
    document.getElementById("id_turismo_105").style.background="none";
    document.getElementById("id_turismo_101").style.background="none";
    document.getElementById("img1").src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_On_RKGZMu8dDoIvY1tvQh0ML7_OuEzTFdKQYnYHRgHZUiVkC_Dxw_ehybeTqtvKUAarpW0hDusq_HPy7LYXEBGJJw3R8E1ZxRlL3hUKFC4uPvxYOtrIRwRr0hknmHCr1SWrFjL98kZtfDuiLB5YeN6OpdSEouHgo6hr5urHPc3Dt11Oi9b8gz_V-e-c/s320/atraccionesateneax.jpeg";

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function turismo_hospedaje(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Hospedaje";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="¿Buscas un lugar donde puedas hospedarte y que te deje una experiencia inolvidable? Los mejores hoteles de México están en nuestra sección de Hospedaje.";

    document.getElementById("id_turismo_102").style.background="none";
    document.getElementById("id_turismo_103").style.background="none";
    document.getElementById("id_turismo_104").style.background="none";
    document.getElementById("id_turismo_105").style.background="linear-gradient(#f98c5a,75%,#af552b)";
    document.getElementById("id_turismo_101").style.background="none";
    document.getElementById("img1").src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeWV6tJQSFhYYaQySTobUOuHnrQtOIbPi8oA_20N3PwOkKIpkzUdGvms7E_R12Utcw4OTKenyQLvfAXAS-_4CHTqz84HqnqCjLNI81aLSTxucMajNxn7KD124qotsGh2ndjinupl3C98nsErDctWLpZhBp9meVQ-PDbpQcOZAjGQVaax8xeegqSbtKKnA/s320/hospedajeateneax.jpeg";

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function turismo_eventos(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Eventos";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Disfruta de un hermoso e increíble momento antes de que este termine. Aquí te dejamos una lista de lugares que puedes visitar por tiempo limitado.";

    document.getElementById("id_turismo_102").style.background="none";
    document.getElementById("id_turismo_103").style.background="none";
    document.getElementById("id_turismo_104").style.background="linear-gradient(#f98c5a,75%,#af552b)";
    document.getElementById("id_turismo_105").style.background="none";
    document.getElementById("id_turismo_101").style.background="none";
    document.getElementById("img1").src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyl3255eiS7Yy3zGv2Ed7JB2HFjI6vJHA0iZR7waY1wx0928RtidMaYs8PFUSEW3YGLTpiZVXcRuSDRDYdEnoF1Rqkxa7ZQ1zY7RvvDSWRMNuLKGbZj0-ElV421_Haf9A6jxoafzIlRI3ZOQOOYc5Mh6gyy-SAw5MBr5CZX_QEEoimM3uI0SHEMLYY-us/s320/eventosateneax.jpeg";

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function index_nuevo(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Nuevo";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="No te pierdas de lo más nuevo de Ateneax. Échale un vistazo a nuestro contenido más reciente y empieza a nutrir tu mente mientras te mantienes informado.";

    document.getElementById("id_index_105").style.background="none";
    document.getElementById("id_index_104").style.background="none";
    document.getElementById("id_index_103").style.background="none";
    document.getElementById("id_index_102").style.background="none";
    document.getElementById("id_index_101").style.background="linear-gradient(#ec8b6b, #ed6e9f)";
    document.getElementById("img1_index").src=cambia_imagen_index[rand(4)-1];

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function index_lomasvisto(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Lo más visto";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Disfruta de un hermoso e increíble momento antes de que este termine. Aquí te dejamos una lista de lugares que puedes visitar por tiempo limitado.";

    document.getElementById("id_index_105").style.background="none";
    document.getElementById("id_index_104").style.background="none";
    document.getElementById("id_index_103").style.background="linear-gradient(#ec8b6b, #ed6e9f)";
    document.getElementById("id_index_102").style.background="none";
    document.getElementById("id_index_101").style.background="none";
    document.getElementById("img1_index").src=cambia_imagen_index_lo_mas_visto[rand(4)-1];

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function index_mejorpuntuadas(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Mejor puntuadas";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Disfruta de un hermoso e increíble momento antes de que este termine. Aquí te dejamos una lista de lugares que puedes visitar por tiempo limitado.";

    document.getElementById("id_index_105").style.background="none";
    document.getElementById("id_index_104").style.background="linear-gradient(#ec8b6b, #ed6e9f)";
    document.getElementById("id_index_103").style.background="none";
    document.getElementById("id_index_102").style.background="none";
    document.getElementById("id_index_101").style.background="none";
    document.getElementById("img1").src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyl3255eiS7Yy3zGv2Ed7JB2HFjI6vJHA0iZR7waY1wx0928RtidMaYs8PFUSEW3YGLTpiZVXcRuSDRDYdEnoF1Rqkxa7ZQ1zY7RvvDSWRMNuLKGbZj0-ElV421_Haf9A6jxoafzIlRI3ZOQOOYc5Mh6gyy-SAw5MBr5CZX_QEEoimM3uI0SHEMLYY-us/s320/eventosateneax.jpeg";

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





function index_recomendadas(){
    document.getElementById("id_texto_titulo_tarjeta_universal").textContent="Recomendadas";
    document.getElementById("id_texto_descripcion_tarjeta_universal").textContent="Disfruta de un hermoso e increíble momento antes de que este termine. Aquí te dejamos una lista de lugares que puedes visitar por tiempo limitado.";

    document.getElementById("id_index_105").style.background="linear-gradient(#ec8b6b, #ed6e9f)";
    document.getElementById("id_index_104").style.background="none";
    document.getElementById("id_index_103").style.background="none";
    document.getElementById("id_index_102").style.background="none";
    document.getElementById("id_index_101").style.background="none";
    document.getElementById("img1_index").src=cambia_imagen_index_recomendadas[rand(4)-1];

    document.getElementById("id_turismo_viajes_1").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_2").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_3").src="https://ateneax.github.io/assets/img/miniatura.png";
    document.getElementById("id_turismo_viajes_4").src="https://ateneax.github.io/assets/img/miniatura.png";
}





defecto()

function defecto(){
    document.getElementById("opcion_activa_menu").style.background="#f3f3f3";
    document.getElementById("opcion_activa_menu").style.border="2px #505050 solid";
    document.getElementById("opcion_activa_menu_texto").style.color="#252525";
}


function desplegar_menu_celulares(){
    document.getElementById("id_desplegar_menu").style.display="flex";
    document.getElementById("id_menu").style.animation="girar_menu";
    document.getElementById("id_cuerpo").style.overflow="hidden";
}



function toggleDivs() {
    var contenedor1 = document.getElementById("contenedor1");
    var contenedor2 = document.getElementById("contenedor2");
    var fechadesplazadora = document.getElementById("boton");

    if (contenedor1.style.display === "none") {
      contenedor1.style.display = "flex";
      contenedor2.style.display = "flex";
      fechadesplazadora.style.rotate = "180deg";
    } else {

      contenedor1.style.display = "none";
      contenedor2.style.display = "none";
      fechadesplazadora.style.rotate = "0deg";
    }
  }