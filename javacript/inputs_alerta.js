// parte de llamada de  todo lo que vamos a utilizar
let from = document.getElementById("formulario")
//importacion de funcion de  verifiacar base de datos

// esta parte es la parte de quitar  cosa o modifcar poner  con DOM

from.addEventListener("submit",  function (evento) {
    let datos =  true
    evento.preventDefault()
     if (datos) {
       return true, window.location.href = "http://127.0.0.1:5500/estructura/html_discord/discord.html"
     }else{
        return false,  window.location.href = "http://127.0.0.1:5500/estructura/register.html"
     }
})

const inputs = document.querySelectorAll("input");
const bnt = document.getElementById("send");

bnt.addEventListener("click", function () {
    inputs.forEach((input) => {

        if (input.value.trim() === "") {
            input.classList.add("error");
        } 
    });
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            input.classList.remove("error");
        }
    });
});


