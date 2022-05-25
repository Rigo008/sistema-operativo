


function activar(){
    var contenedor = document.getElementById('contenedor');
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2 = document.getElementById('ico_menu2');
    contenedor.classList.add("activar");
    ico_menu.classList.add("desactivar")
    ico_menu2.classList.add("activar")
}




function desactivar(){
    var contenedor = document.getElementById('contenedor');
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2 = document.getElementById('ico_menu2');
    contenedor.classList.remove("activar");
    ico_menu.classList.remove("desactivar")
    ico_menu2.classList.remove("activar")
}

function salir(){
    var ventana = document.getElementById('ventana');
   
  
    ventana.classList.remove("activar2")
}

function minimizar(){
    var ventana = document.getElementById('ventana');
   
  
    ventana.classList.remove("activar2")
}


function activar2(){
    var ventana = document.getElementById('ventana');
   
  
    ventana.classList.add("activar2")
}



function maximizar() {
    var ventana = document.getElementById('ventana');
   var ventana1 = document.getElementById('ventana1');
   var ventana2 = document.getElementById('ventana2');
   ventana.classList.add("maximizar")
   ventana1.classList.add("cerrar")
   ventana2.classList.add("activar2")
}

function encoger() {
    var ventana = document.getElementById('ventana');
   var ventana1 = document.getElementById('ventana1');
   var ventana2 = document.getElementById('ventana2');
   ventana.classList.remove("maximizar")
   ventana1.classList.remove("cerrar")
   ventana2.classList.remove("activar2")
}


