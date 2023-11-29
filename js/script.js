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

    if (horas < 10) {
        zeroH = "0";
    } else {
        zeroH = "";
    }

    if (minutos < 10) {
        zeroM = "0";
    } else {
        zeroM = "";
    }


    if (segundos < 10) {
        zeroS = "0";
    } else {
        zeroS = "";
    }


    let horario = `${zeroH}${horas}:${zeroM}${minutos}:${zeroS}${segundos}`

    relogio.innerHTML = horario;

}, 1000)




let dadosServicos = [{
    title: "Sistema Web",
    texto: "Soluções Web personalizadas, atendendo às necessidades, baseadas em experiência, linguagens, frameworks e aplicações mobile."
}, {
    title: "Análise de <br> dados e BI",
    texto: "Aplicação dedicada e personalizada na estruturação, coleta e análise de dados para fins decisórios e estratégicos."
}, {
    title: "Suporte Técnico <br> e  Manuntenção ",
    texto: "Suporte técnico contínuo e serviços de manutenção para garantir operação confiável."
}, {
    title: "Treinamento e Capacitação",
    texto: "Disponibilizamos Treinamento e capacitações aos clientes para que utilizem efetivamente as soluções implementadas."
}]

let dadosCamposServicosLenght = document.querySelectorAll('.tituloCard');

for(i = 0; i < dadosCamposServicosLenght.length; i++) {
    document.getElementById(`tituloCard${i}`).innerHTML = dadosServicos[i].title;
    document.getElementById(`txtCard${i}`).innerHTML = dadosServicos[i].texto;
}







let dadosEmpresa = [{
    tamanho: "Pequeno",
    texto: "Oferecemos soluções acessíveis, intuitivas e eficazes que potencializam operações de ponta a ponta com excelente custo-benefício. São perfeitas para atender às exigências legais, cumprir prazos e preservar a integridade das informações, garantindo conformidade e proteção.",
}, {
    tamanho: "Médio",
    texto: "Nossas soluções integradas oferecem maior confiabilidade e agilidade no processamento de informações, aumentando a precisão na tomada de decisões. O sistema é flexível, permitindo a otimização eficiente dos recursos."
}, {
    tamanho: "Grande",
    texto: "A solução mais abrangente e sólida para operação e gestão integrada em tecnologia da informação. Fornecemos ferramentas inovadoras que simplificam as operações, impulsionando produtividade e eficiência. Tenha acesso a insights essenciais e tome decisões ágeis e assertivas, apoiadas por indicadores confiáveis."
}]

let dadosEmpresaLenght = document.querySelectorAll('.tamanho');

for(i = 0; i < dadosEmpresaLenght.length; i++) {
    document.getElementById(`tamanho${i}`).innerHTML = dadosEmpresa[i].tamanho;
    document.getElementById(`textoEmpresa${i}`).innerHTML = dadosEmpresa[i].texto;
}
