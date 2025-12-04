let Usuario_Datos = new Map();

Usuario_Datos.set("prueba123@gmail.com", { email: "prueba123@gmail.com", password: "2222"});

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

let  from = document.getElementById("loginForm")

from.addEventListener("submit", function (evento){
      evento.preventDefault()
      let usuarioLogiado = verifcar_Base_datos()
      if(usuarioLogiado) {
          window.location.href = "https://gemini.google.com/app/e368ff3ad61f7014?hl=es"
      }
})


