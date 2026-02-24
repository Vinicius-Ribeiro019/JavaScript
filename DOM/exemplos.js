document.getElementById("conteudo").innerHTML = "<p>Olá, DOM!<p>";
document.getElementById("mensagem").textContent = "texto simples, sem HTML.(element.textContent)";
document.getElementById("foto").setAttribute("src", "image.png");
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");

let url = document.getElementById("link").getAttribute("href");
console.log(url);


