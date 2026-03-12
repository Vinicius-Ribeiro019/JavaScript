// Atividade 1
let azul = document.querySelector(".azul");
let vermelho = document.querySelector(".vermelho");
let texto = document.querySelector("#texto");

azul.addEventListener("click", function() {
  texto.style.color = "blue";
});

vermelho.addEventListener("click", function() {
  texto.style.color = "red";
});

// Atividade 2
let mostrar = document.querySelector("#mostrar");
let mensagem = document.querySelector("#mensagem");

mostrar.addEventListener("click", function() {
  mensagem.classList.toggle("oculto");
});


// Atividade 3
let inputTexto = document.querySelector("#inputTexto");
let contador = document.querySelector("#contador");

inputTexto.addEventListener("input", function() {
  let caracteres = inputTexto.value.length;
  contador.textContent = caracteres + " caracteres";
});

// Atividade 4
let btnContador = document.querySelector("#btnContador");
let valorContador = document.querySelector("#valorContador");
let contagem = 0;

btnContador.addEventListener("click", function() {
  contagem++;
  valorContador.textContent = contagem;
});

// Atividade 5 e 6
let novoItem = document.querySelector("#novoItem");
let btnAdicionar = document.querySelector("#btnAdicionar");
let listaItens = document.querySelector("#listaItens");

btnAdicionar.addEventListener("click", function() {
  let texto = novoItem.value;
  
  if (texto.trim() !== "") {
    let novoItemLista = document.createElement("li");
    novoItemLista.textContent = texto + " - Excluir";

    novoItemLista.addEventListener("click", function() {
      let confirmar = confirm("Deseja excluir o item?");

      if (confirmar) {
        listaItens.removeChild(novoItemLista);
      }
    });

    listaItens.appendChild(novoItemLista);
    
    novoItem.value = "";
  }
});

// Desafio HARD
let nome = document.querySelector("#nome");
let enviar = document.querySelector("#enviar");
let feedback = document.querySelector("#feedback");

enviar.addEventListener("click", function() {

  if (nome.value.trim() === "") {
    feedback.textContent = "O campo nome é obrigatório!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Nome enviado com sucesso!";
    feedback.style.color = "green";
  }

});
