let dadosClientes = [{
    texto: '"Soluções digitais excepcionais! Desde 2021, nossa parceria só cresce."',
    img: "../../img/imgClientes/1.jpg"
}, {
    texto: '"A empresa trouxe inovação em hardware e aprendizado remoto. Top!"',
    img: "../../img/imgClientes/2.jpg"
}, {
    texto: '"Capacitação de qualidade, suporte em hardware impecável. Recomendo!"',
    img: "../../img/imgClientes/3.jpg"
}, {
    texto: '"Cliente desde 2021, sempre recebemos soluções além das expectativas."',
    img: "../../img/imgClientes/4.jpg"
}, {
    texto: '"Incrível como a empresa atendeu nossas necessidades durante a pandemia."',
    img: "../../img/imgClientes/5.jpg"
}, {
    texto: '"A parceria de 2021 em diante só fortaleceu nossas operações digitais."',
    img: "../../img/imgClientes/6.jpg"
}];


for (let i = 0; i < dadosClientes.length; i++) {
    document.getElementById(`textoClientes${i}`).innerHTML = dadosClientes[i].texto;
    document.getElementById(`clienteImg${i}`).src = dadosClientes[i].img;
}

