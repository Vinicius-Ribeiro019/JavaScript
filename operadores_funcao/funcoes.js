function saudacao() {
    console.log("Olá, Javascript!");
}

saudacao();

function somar(a, b) {
    return a + b;
}

console.log(somar(3, 5));

function saudacaonome(nome) {     
    console.log("Olá, " + nome);      
}

saudacaonome("Vinicius");

let peso = 70;
let altura = 1.75;

function caulcarIMC(peso, altura) {
    return peso / (altura * altura);
}

let imc = caulcarIMC(peso, altura);
console.log("Seu IMC é: " + imc);

function parimpar(num) {
    if (num % 2 === 0) {
            return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parimpar(5));

console.log("*********** FUNÇÕES NATIVAS **********");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth());
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos", data.getMinutes());


mostrarDataHora();

console.log("Desafio: "+data.getHours(), ".", data.getMinutes(), ".", data.getSeconds(), "", data.getDate(), "/",
 data.getMonth() + 1, "/", data.getFullYear());

}

console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("Quadrado:", Math.pow(numero));
    console.log("Valor absoluto:", Math.abs(numero));
}

calcularOperacoes(7.8)

(console.log("-----Funções String-----"));

function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");

function Verificacao(frase) {
    console.log(frase.includes("JavaScritp"));
}

Verificacao("Eu estudo javascript");

function JuntaString(nome,curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(JuntaString("Vinicius", "Front-end"));