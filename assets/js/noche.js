// Verificar el estado actual del modo nocturno al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }
});

function toggleMode() {
    var body = document.body;
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }

}






function enableDarkMode() {
    var body = document.body;
    var mainContent = document.getElementById("mainContent");
    var id_cambio_modo_1 = document.getElementById("id_cambio_modo_1");
    var id_cambio_modo_2 = document.getElementById("id_cambio_modo_2");
    var id_cambio_modo_3 = document.getElementById("id_cambio_modo_3");


    var id_cambio_texto = document.getElementById("id_cambio_texto");


    body.classList.add("dark-mode");
    mainContent.classList.add("dark-mode");
    id_cambio_modo_1.classList.add("dark-mode");
    id_cambio_modo_2.classList.add("dark-mode");
    id_cambio_modo_3.classList.add("dark-mode");


    id_cambio_texto.classList.add("dark-mode");

    // Guardar preferencia en localStorage
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    var body = document.body;
    var mainContent = document.getElementById("mainContent");
    var id_cambio_modo_1 = document.getElementById("id_cambio_modo_1");
    var id_cambio_modo_2 = document.getElementById("id_cambio_modo_2");
    var id_cambio_modo_3 = document.getElementById("id_cambio_modo_3");


    var id_cambio_texto = document.getElementById("id_cambio_texto");


    body.classList.remove("dark-mode");
    mainContent.classList.remove("dark-mode");
    id_cambio_modo_1.classList.remove("dark-mode");
    id_cambio_modo_2.classList.remove("dark-mode");
    id_cambio_modo_3.classList.remove("dark-mode");


    id_cambio_texto.classList.remove("dark-mode");

    // Guardar preferencia en localStorage
    localStorage.setItem("darkMode", "disabled");
}



