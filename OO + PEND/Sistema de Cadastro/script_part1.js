const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const resultado = document.querySelector("#resultado");

class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoComDesconto;
    }

    exibirInformacoes() {
        resultado.innerHTML = `
            <div>
                <p>Nome: ${this.nome}</p>
                <p>Preço: R$ ${this.preco.toFixed(2)}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
                <p>Preço com Desconto: R$ ${this.aplicarDesconto().toFixed(2)}</p>
            </div>
        `;
    }
}

botaoCadastrar.addEventListener("click", function () {
    const novoProduto = new Produto(
        nome.value,
        parseFloat(preco.value),
        categoria.value,
        parseFloat(desconto.value)
    );

    novoProduto.exibirInformacoes();
    novoProduto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(novoProduto));

});

const dados = localStorage.getItem("produto");

if (dados) {


    const produtoSalvo = JSON.parse(dados);
    
    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );

    produto.exibirInformacoes();


}
