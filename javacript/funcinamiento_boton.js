// base de datos  actua como memora 
let Usuario_Datos = new Map(); 

Usuario_Datos.set("prueba123@gmail.com", { email: "prueba123@gmail.com", password: "2222"});
// comprobacion de  inputs  en fomulario 
function verifcar_Base_datos() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  if (Usuario_Datos.has(email)) {
          let usuario = Usuario_Datos.get(email);  
          
          if (usuario.password === password) {
              return true;
          }
      }
     return false
}
//  selecionar todo   el formulario con sus inputs
let  from = document.getElementById("loginForm")
// hacer que  un evento que solo quite la funcion de (submit)  
// por defecto  se actuliza los datos  osea el elemtto (submit)
from.addEventListener("submit", function (evento){
      evento.preventDefault()
      let usuarioLogiado = verifcar_Base_datos()
      if(usuarioLogiado) {
          window.location.href = "http://127.0.0.1:5500/estructura/html_discord/discord.html"
      }
})

const btn = document.getElementById("enviar")
const inputs = document.querySelectorAll("input")

btn.addEventListener("click", function () {
    inputs.forEach((input) => {
        if(input.value.trim() === "") {
            input.classList.add("error")
        }
    })
})

inputs.forEach((input) => {
    input.addEventListener("input" , () => {
        if(input.value.trim() !== "") {
            input.classList.remove("error")
        }
    })
})