const forms = document.getElementById("form");
const password = document.getElementById("password1");
const repeatPassword = document.getElementById("password2");

const realCheck = document.getElementById("terminos");
const fakeCheck = document.getElementById("input-check");
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
})();

function validate() {
  if (password.checkValidity() && password.value === repeatPassword.value) {
    return true;
  } else {
    return false;
  }
}

let passwords = [password, repeatPassword];
for (const p of passwords) {
  p.addEventListener("input", validate)
}