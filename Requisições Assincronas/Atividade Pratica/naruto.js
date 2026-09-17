const botao = document.querySelector("#buscarPersonagem");
const resultado = document.querySelector("#resultado");
const idPersonagem = document.querySelector("#idPersonagem");

botao.addEventListener("click", buscarPersonagem);

async function buscarPersonagem() {

    const id = idPersonagem.value;

    if (id === "") {
        resultado.innerHTML = `
            <p class="erro">
                Digite um ID para pesquisar.
            </p>
        `;
        return;
    }

    try {

        resultado.innerHTML = "<p>Carregando personagem...</p>";

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado.");
        }

        const personagem = await resposta.json();

        resultado.innerHTML = `
            <div class="card">

                <h2>${personagem.name}</h2>

                <img src="${personagem.images[0]}" 
                     alt="${personagem.name}">

                <div class="info">

                    <p><strong>ID:</strong> ${personagem.id}</p>

                    <p><strong>Sexo:</strong> 
                        ${personagem.personal?.sex || "Desconhecido"}
                    </p>

                    <p><strong>Time:</strong> 
                        ${personagem.personal?.team || "Desconhecido"}
                    </p>

                    <p><strong>Anime:</strong> 
                        ${personagem.debut?.anime || "Desconhecido"}
                    </p>

                    <p><strong>Natureza do Chakra:</strong> 
                        ${personagem.natureType
                            ? personagem.natureType.join(", ")
                            : "Desconhecida"}
                    </p>

                    <p><strong>Jutsus:</strong> 
                        ${personagem.jutsu
                            ? personagem.jutsu.slice(0, 5).join(", ")
                            : "Nenhum"}
                    </p>

                </div>

            </div>
        `;

    } catch (erro) {

        console.error("Erro:", erro);

        resultado.innerHTML = `
            <p class="erro">
                Erro ao buscar personagem. Verifique o ID informado.
            </p>
        `;
    }
}