var contenedor = document.getElementById('contenedor');
var ico_menu = document.getElementById('ico_menu');


function activar(){
    contenedor.classList.add("activar");
}


ico_menu.addEventListener('click',activar);