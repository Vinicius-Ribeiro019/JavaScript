// seleciona os elementos de formulário que vamos usar
let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let usuarioSalvo = document.querySelector("#usuario-salvo");
let inputNome = document.querySelector('#nome');
let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#senha');
let inputConfirmarSenha = document.querySelector('#confirmar-senha');
let telefonesContainer = document.querySelector('#telefones-container');
let botaoAdicionarTelefone = document.querySelector('#adicionar-telefone');
let forcaSenha = document.querySelector('#forca-senha');
let botaoSenha = document.querySelector('#botaoSenha');
let botaoSenha2 = document.querySelector('#botaoSenha2');

// guarda os dados do último cadastro bem-sucedido para evitar duplicatas
let ultimoUsuario = null;

// função que calcula a força da senha baseado no comprimento
function calcularForcaSenha(senha) {
    let comprimento = senha.length;
    // senha com 4 caracteres ou menos = fraca
    if (comprimento <= 4) {
        return { texto: "Fraca", cor: "red" };
    } 
    // senha de 5 a 7 caracteres = média
    else if (comprimento <= 7) {
        return { texto: "Média", cor: "orange" };
    } 
    // senha com 8 ou mais caracteres = boa
    else {
        return { texto: "Boa", cor: "green" };
    }
}

// evento que mostra a força da senha em tempo real enquanto o usuário digita
inputSenha.addEventListener('input', function() {
    let senha = inputSenha.value;
    let forca = calcularForcaSenha(senha);
    // mostra a força apenas se tiver digitado algo
    forcaSenha.textContent = senha ? `Força da senha: ${forca.texto}` : "";
    forcaSenha.style.color = forca.cor;
});

// função que adiciona um novo campo de telefone dinamicamente
function adicionarNovoTelefone() {
    // cria um container para o input e o botão de deletar
    let novoItem = document.createElement('div');
    novoItem.className = 'telefone-item';
    
    // cria o input de telefone
    let novoInput = document.createElement('input');
    novoInput.type = 'text';
    novoInput.className = 'telefone';
    novoInput.placeholder = 'Digite seu telefone';
    
    // cria o botão de deletar
    let botaoDeletar = document.createElement('button');
    botaoDeletar.type = 'button';
    botaoDeletar.className = 'btn-deletar';
    botaoDeletar.textContent = '✕';
    botaoDeletar.title = 'Deletar este telefone';
    
    // evento para deletar o telefone quando clicar no botão
    botaoDeletar.addEventListener('click', function(e) {
        e.preventDefault();
        // remove o item (input + botão) do container
        novoItem.remove();
    });
    
    // adiciona o input e o botão ao item
    novoItem.appendChild(novoInput);
    novoItem.appendChild(botaoDeletar);
    
    // adiciona o item ao container de telefones
    telefonesContainer.appendChild(novoItem);
}

// evento do botão adicionar telefone
botaoAdicionarTelefone.addEventListener('click', function(e) {
    e.preventDefault(); // evita que o formulário seja enviado
    adicionarNovoTelefone(); // chama a função para adicionar
});

// evento do botão cadastrar que valida todos os dados
botao.addEventListener("click", function () {
    // lê os valores dos campos do formulário
    let nome = inputNome.value.trim();
    let email = inputEmail.value.trim();
    let senha = inputSenha.value;
    let confirmarSenha = inputConfirmarSenha.value;

    // coleta todos os telefones preenchidos
    let telefones = [];
    let inputsTelefone = document.querySelectorAll('.telefone');
    inputsTelefone.forEach(input => {
        let tel = input.value.trim();
        if (tel) telefones.push(tel); // adiciona apenas se não estiver vazio
    });

    // validações básicas antes de cadastrar
    let erro = "";

    // valida nome
    if (!nome) {
        erro = "O nome não pode ficar vazio.";
    } 
    // valida email
    else if (!email.includes("@")) {
        erro = "O email precisa conter @.";
    } 
    // valida telefone - verifica se tem pelo menos 1
    else if (telefones.length === 0) {
        erro = "Pelo menos um telefone é obrigatório.";
    } 
    // valida se todos os telefones contêm apenas números
    else {
        for (let tel of telefones) {
            if (!tel.match(/^\d+$/)) {
                erro = "Todos os telefones devem conter apenas números.";
                break;
            }
        }
    }

    // continua validação se não teve erro anterior
    if (!erro) {
        if (!senha) {
            erro = "A senha não pode ficar vazia.";
        } else if (senha !== confirmarSenha) {
            erro = "As senhas não coincidem.";
        } 
        // verifica se o usuário já foi cadastrado (mesmos dados)
        else if (ultimoUsuario && ultimoUsuario.email === email && 
                 JSON.stringify(ultimoUsuario.telefones.sort()) === JSON.stringify(telefones.sort()) && 
                 ultimoUsuario.senha === senha) {
            erro = "Já existe um usuário com o mesmo email, telefones e senha.";
        }
    }

    // se tiver erro, mostra a mensagem em vermelho
    if (erro) {
        mensagem.textContent = erro;
        mensagem.style.color = "red";
        usuarioSalvo.textContent = "";
        return;
    }

    // se passou em todas as validações, exibe mensagem de sucesso em verde
    mensagem.textContent = "Usuário cadastrado!";
    mensagem.style.color = "green";

    // salva os dados do usuário para exibir abaixo e para a verificação de duplicatas
    ultimoUsuario = {
        nome: nome,
        email: email,
        telefones: telefones, // agora um array de telefones
        senha: senha
    };

    // exibe os dados do usuário salvo na tela
    usuarioSalvo.innerHTML = `
        <strong>Usuário salvo:</strong><br>
        Nome: ${nome}<br>
        Email: ${email}<br>
        Telefones: ${telefones.join(', ')}
    `;
});

// evento que mostra/oculta a senha no primeiro campo ao clicar no ícone
botaoSenha.addEventListener("click", function() {
    // se está escondido, mostra o texto da senha
    if (inputSenha.type === "password") {
        inputSenha.setAttribute("type", "text");
        botaoSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } 
    // se está visível, esconde novamente
    else {
        inputSenha.setAttribute("type", "password");
        botaoSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});

// evento que mostra/oculta a senha no campo de confirmação
botaoSenha2.addEventListener("click", function() {
    // se está escondido, mostra o texto da senha
    if (inputConfirmarSenha.type === "password") {
        inputConfirmarSenha.setAttribute("type", "text");
        botaoSenha2.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } 
    // se está visível, esconde novamente
    else {
        inputConfirmarSenha.setAttribute("type", "password");
        botaoSenha2.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});