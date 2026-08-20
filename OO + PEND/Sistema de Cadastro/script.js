class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * (this.desconto / 100));
    }
}

class Estoque {

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(index) {
        this.produtos.splice(index, 1);
        this.exibirNaTela();
    }

    exibirNaTela() {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = "";

        this.produtos.forEach((produto, index) => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: R$${produto.aplicarDesconto().toFixed(2)}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <button onclick="estoque.excluirProduto(${index})">
                        Excluir
                    </button>
                    <hr>
                </div>
            `;
        });
    }
}

const estoque = new Estoque();

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

botaoCadastrar.addEventListener('click', function () {

    const novoProduto = new Produto(
        nome.value,
        parseFloat(preco.value),
        categoria.value,
        parseFloat(desconto.value)
    );

    estoque.adicionarProduto(novoProduto);
    estoque.exibirNaTela();

    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});