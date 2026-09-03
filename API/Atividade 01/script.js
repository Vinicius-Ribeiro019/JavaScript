const botao = document.querySelector("#btnAdicionar");
const afazer = document.querySelector("#afazer");
const fazendo = document.querySelector("#fazendo");
const finalizado = document.querySelector("#Finalizado");

let contadorTarefa = 0;

let tarefas = [];

//Função para adionar tarefa
botao.addEventListener("click", () => {
    let nomeTarefa = prompt("Digite o nome da tarefa:");
    if(nomeTarefa) {
        criarTarefa(nomeTarefa);
        salvarTarefas();
    }
});
// Função para criar as tarefas
function criarTarefa(texto, coluna="afazer"){

    const tarefa = document.createElement("div");

    tarefa.classList.add("tarefa");

    tarefa.id = "tarefa-" + Date.now();


    const textoTarefa = document.createElement("span");

    textoTarefa.innerText = texto;


    const botaoExcluir = document.createElement("button");

    botaoExcluir.innerText = "🗑";

    botaoExcluir.classList.add("botao-excluir");


    botaoExcluir.addEventListener(
        "click",
        excluirTarefa
    );


    tarefa.appendChild(textoTarefa);

    tarefa.appendChild(botaoExcluir);


    tarefa.setAttribute(
        "draggable",
        true
    );


    tarefa.addEventListener(
        "dragstart",
        function(event){

            event.dataTransfer.setData(
                "text",
                event.target.id
            );

        }
    );


    document.querySelector("#"+coluna)
    .appendChild(tarefa);

}

// Drag and Drop — permitir drop nas 3 colunas
[afazer, fazendo, finalizado].forEach(function(coluna) {
    coluna.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    coluna.addEventListener("drop", function(event){

    event.preventDefault();


    const id = event.dataTransfer.getData("text");


    const elemento = document.getElementById(id);


    coluna.appendChild(elemento);


    coluna.classList.remove("destino");


    elemento.classList.add("movido");


    setTimeout(function(){

        elemento.classList.remove("movido");

    },500);


    salvarTarefas();

});
});
// Função para salvar as tarefas 
function salvarTarefas(){

    tarefas = [];


    document.querySelectorAll(".tarefa")
    .forEach(function(tarefa){

        tarefas.push({

            id: tarefa.id,

            texto: tarefa.querySelector("span").innerText,

            coluna: tarefa.parentElement.id

        });

    });


    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );

}
// fUnção que carrega as tarefas quando carrega a pagina
function carregarTarefas(){

    let dados = localStorage.getItem("tarefas");


    if(dados){

        tarefas = JSON.parse(dados);


        tarefas.forEach(function(item){

            criarTarefa(
                item.texto,
                item.coluna
            );

        });

    }

}

function excluirTarefa(event){

    const tarefa = event.target.parentElement;


    tarefa.remove();


    salvarTarefas();

}

carregarTarefas();

/*Parte visual*/

[afazer, fazendo, finalizado].forEach(function(coluna) {
    coluna.addEventListener("dragover", function(event) {
        event.preventDefault();
    });
});

[afazer, fazendo, finalizado].forEach(function(coluna) {


    coluna.addEventListener("dragover", function(event) {

        event.preventDefault();

        coluna.classList.add("destino");

    });


    coluna.addEventListener("dragleave", function(){

        coluna.classList.remove("destino");

    });


});