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
