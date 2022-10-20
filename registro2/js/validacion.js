/*let form = document.querySelector("form");
let name = document.getElementById("nombre");
let lastName = document.getElementById("apellido");
let email = document.getElementById("email");
let terminos = document.getElementById("terminos");
const registrarme = document.getElementById("registrarme");*/
  
const forms = document.querySelectorAll('.needs-validation');
let password = document.getElementById("password1");
let repeatPassword = document.getElementById("password2");

let realCheck = document.getElementById("terminos");
let fakeCheck = document.getElementById("input-check");

function checkTyC(){
  if (realCheck.checked === true && !fakeCheck.checked){
    fakeCheck.checked = true;
  } else{
    fakeCheck.checked = false;
  }
  console.log(fakeCheck.checked);
 /* was-validated
  is-invalid*/
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
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

      if ( (password.value.length > 5 && repeatPassword.length > 5) && (repeatPassword.value === password.value) ){
        password.classList.remove("is-invalid");
        password.classList.add('was-validated') 

        repeatPassword.classList.remove("is-invalid");
        repeatPassword.classList.add('was-validated')

      }
      else {

          password.classList.add('is-invalid')
          repeatPassword.classList.add('is-invalid')
      }
      console.log("password.value.length > 5 && repeatPassword.length > 5", password.value.length > 5 && repeatPassword.length > 5, "\nrepeatPassword.value === password.value", repeatPassword.value === password.value);

        form.classList.add('was-validated')
      }, false)
    })
  })()
