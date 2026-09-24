const formulario = document.getElementById("formBusca");

const cidade = document.getElementById("cidade");

const listaEventos = document.getElementById("listaEventos");

const carregando = document.getElementById("carregando");

formulario.addEventListener("submit", function(event) {

event.preventDefault();

const cidadeDigitada = cidade.value.trim();

if (cidadeDigitada == "") {
    return;
}

buscarEventos(cidadeDigitada);


});

async function buscarEventos(cidade) {

listaEventos.innerHTML = "";

carregando.textContent = "Buscando eventos...";


const url =
    "https://api.stungevents.com/events?limit=12&city="
    + encodeURIComponent(cidade);


try {

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar eventos");
    }


    const dados = await resposta.json();


    carregando.textContent = "";


    if (!dados.events || dados.events.length == 0) {

        listaEventos.innerHTML =
            "<p>Nenhum evento encontrado nessa cidade.</p>";

        return;
    }


    dados.events.forEach(function(evento) {

        criarEvento(evento);

    });


} catch (erro) {

    carregando.textContent =
        "Não foi possível carregar os eventos.";

    console.log(erro);

}


}

/* CRIA O CARD DO EVENTO */

function criarEvento(evento) {

const card = document.createElement("div");

card.classList.add("card");


const titulo = document.createElement("h3");

titulo.textContent =
    evento.title || "Evento sem nome";


const local = document.createElement("p");

local.textContent =
    "Local: " +
    (evento.venue_name || "Não informado");


const data = document.createElement("p");

data.textContent =
    "Data: " +
    formatarData(evento.start_utc);


const botao = document.createElement("button");

botao.textContent = "Detalhes";


const detalhes = document.createElement("div");

detalhes.classList.add("detalhes");

detalhes.style.display = "none";


const cidadeEvento = document.createElement("p");

cidadeEvento.textContent =
    "Cidade: " +
    (evento.city || "Não informada");


const categoria = document.createElement("p");

categoria.textContent =
    "Categoria: " +
    (evento.category || "Não informada");


const descricao = document.createElement("p");

descricao.textContent =
    evento.description ||
    "Não existe descrição disponível.";


detalhes.appendChild(cidadeEvento);

detalhes.appendChild(categoria);

detalhes.appendChild(descricao);


/* Botão mostra ou esconde os detalhes */

botao.addEventListener("click", function() {

    if (detalhes.style.display == "none") {

        detalhes.style.display = "block";

        botao.textContent = "Esconder detalhes";

    } else {

        detalhes.style.display = "none";

        botao.textContent = "Detalhes";

    }

});


card.appendChild(titulo);

card.appendChild(local);

card.appendChild(data);

card.appendChild(botao);

card.appendChild(detalhes);


listaEventos.appendChild(card);


}

/* FORMATA A DATA */

function formatarData(data) {

if (!data) {
    return "Não informada";
}


const dataEvento = new Date(data);


return dataEvento.toLocaleDateString("pt-BR");


}