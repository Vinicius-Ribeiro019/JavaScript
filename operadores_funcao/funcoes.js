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
