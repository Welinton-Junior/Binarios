let primeiro = document.getElementById('primeiro');
let segundo = document.getElementById('segundo');
let terceiro = document.getElementById('terceiro');

primeiro.style.cssText = "color: gray; transition: 1s";
segundo.style.cssText = "color: gray; transition: 2s";
terceiro.style.cssText = "color: gray; transition: 3s"; 

function mudarCor(element) {
    if (element.style.color === "gray") {
        element.style.color = "white";
    } else {
        element.style.color = "gray";
    }
}

setInterval(() => mudarCor(primeiro), 1000);
setInterval(() => mudarCor(segundo), 2000);
setInterval(() => mudarCor(terceiro), 3000);


let relogio = document.getElementById("relogio");

setInterval(() => {

    let dataAtual = new Date();

    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    let zeroH = "";
    let zeroM = "";
    let zeroS = "";

    if(horas < 10) {
        zeroH = "0";
    } else {
        zeroH = "";
    }

    if(minutos < 10) {
        zeroM = "0";
    } else {
        zeroM = "";
    }


    if(segundos < 10) {
        zeroS = "0";
    } else {
        zeroS = "";
    }


    let horario = `${zeroH}${horas}:${zeroM}${minutos}:${zeroS}${segundos}`

    relogio.innerHTML = horario;

},1000)


