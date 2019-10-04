 'use strict'

var formulario = document.querySelector("#formulario");
var box = document.querySelector(".dashed");

box.style.display = "none";

formulario.addEventListener('submit', function(){
    
    console.log("submit");

    var nombre = document.querySelector("#nombre").value;
    box.style.display = "block";
    console.log(nombre);

    var s_nombre = document.querySelector("#s_nombre span");
    s_nombre.innerHTML = nombre;
});
//alert("hola");