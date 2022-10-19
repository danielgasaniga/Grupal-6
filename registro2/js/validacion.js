/* let form = document.querySelector("form")
let name = document.getElementById("nombre")
let lastName = document.getElementById("apellido")
let email = document.getElementById("email")
let contraseña = document.getElementById("password1")
let repetirContraseña = document.getElementById("password2")
let terminos = document.getElementById("terminos")
const registrarme = document.getElementById("registrarme")

form.addEventListener("submit", function(e){
    e.preventDefault()
    if(name.value.length === 0){
        icono_name.classList.add('icono_error');
        text_name.classList.add("text");
        name.style.border="0.5px solid red";
        console.log(form)
    }
}) */

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()