/*let form = document.querySelector("form");
let name = document.getElementById("nombre");
let lastName = document.getElementById("apellido");
let email = document.getElementById("email");
let terminos = document.getElementById("terminos");
const registrarme = document.getElementById("registrarme");*/

const forms = document.querySelectorAll(".needs-validation");
let password = document.getElementById("password1");
let repeatPassword = document.getElementById("password2");

let realCheck = document.getElementById("terminos");
let fakeCheck = document.getElementById("input-check");
const button = document.getElementById("registrarme");

function checkTyC() {
  if (realCheck.checked === true && !fakeCheck.checked) {
    fakeCheck.checked = true;
  } else {
    fakeCheck.checked = false;
  }
  console.log(fakeCheck.checked);
  /* was-validated
  is-invalid*/
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity() || !validate()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function validate() {
  if (password.checkValidity() && password.value === repeatPassword.value) {
    repeatPassword.setCustomValidity("");
    return true;
  } else {
    repeatPassword.setCustomValidity("Contraseña mal");
    return false;
  }
}

let passwords = [password, repeatPassword];
for (const p of passwords) {
  p.addEventListener("input", validate)
}