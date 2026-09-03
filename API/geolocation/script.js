navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        console.log("Precisão:" + position.coords.accuracy);
    },
    function(erro) {
        console.log("Não foi possível obter a localização:", );
    }
)