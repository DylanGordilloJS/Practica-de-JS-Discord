// parte de llamada de  todo lo que vamos a utilizar
let from = document.getElementById("formulario")

//importacion de funcion de  verifiacar base de datos

// esta parte es la parte de quitar  cosa o modifcar poner  con DOM
from.addEventListener("submit",  function (evento) {
    evento.preventDefault()
    let datos =  false
     if (datos) {
       return true ,  window.location.href = "https://open.spotify.com/"
     }else{
         window.location.href = "http://127.0.0.1:5500/estructura/register.html"
     }
})

