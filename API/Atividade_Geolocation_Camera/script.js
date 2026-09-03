const btnLocalizacao = document.querySelector("#btnLocalizacao");
const btnCamera = document.querySelector("#btnCamera");

btnLocalizacao.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            document.querySelector("#latitude").textContent =
                posicao.coords.latitude;

            document.querySelector("#longitude").textContent =
                posicao.coords.longitude;

            document.querySelector("#precisao").textContent =
                posicao.coords.accuracy + " metros";
        },

        function(erro) {
            alert("Não foi possível obter a localização.");
        }

    );

});

btnCamera.addEventListener("click", () => {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    .then(function(stream) {

        const video = document.querySelector("#camera");
        video.srcObject = stream;

    })

    .catch(function(erro) {

        console.log("Erro ao acessar a câmera:", erro);
        alert("Não foi possível acessar a câmera.");

    });

});