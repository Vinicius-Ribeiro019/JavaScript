// Atividade 8 - Validação de Campos
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginButton = document.querySelector("#loginButton");
let mensagemEmail = document.querySelector("#mensagemEmail");

loginButton.addEventListener("click", function () {

  if (email.value.includes("@") && email.value.includes(".")) {
    mensagemEmail.textContent = "Email válido";
  } else {
    console.log("Email inválido");
    mensagemEmail.textContent = "Email inválido";
  }

});

password.addEventListener("input", function () {

  if (password.value.length < 6) {
    mensagemSenha.textContent = "Senha fraca";
    mensagemSenha.style.color = "red";
  } else if (password.value.length >= 6 && password.value.length < 12) {
    mensagemSenha.textContent = "Senha aceitável";
    mensagemSenha.style.color = "orange";
  } else {
    mensagemSenha.textContent = "Senha forte";
    mensagemSenha.style.color = "green";
  }

});