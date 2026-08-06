const formulario = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const nome = document.getElementById("nome").value.trim();

    mensagem.textContent = "";
    mensagem.className = "";

    if(nome === ""){
        mensagem.textContent = "Digite seu nome.";
        mensagem.classList.add("erro");
        return;
    }

    if(email === ""){
        mensagem.textContent = "Digite um e-mail.";
        mensagem.classList.add("erro");
        return;
    }

    if(!email.includes("@")){
        mensagem.textContent = "O e-mail deve conter o caractere @.";
        mensagem.classList.add("erro");
        return;
    }

    if(!email.includes(".")){
        mensagem.textContent = "O e-mail deve conter um domínio válido.";
        mensagem.classList.add("erro");
        return;
    }

    mensagem.textContent = "Formulário enviado com sucesso!";
    mensagem.classList.add("sucesso");

    formulario.reset();

});