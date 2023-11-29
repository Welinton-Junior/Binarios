let dadosEquipe = [{
    title: "Luiz Santos",
    texto: "<li> MBA em Gestão Empresarial pela Universidade COD one </li> <li> Graduação em Economia pela Faculdade de Empresas Visionárias </li>",
    img: "../../img/Felipe.jpg"
}, {
    title: "Rafael Isac",
    texto: "<li> MBA em Gestão Estratégica de Tecnologia da Informação pela TechLeaders </li> <li> Pós-Graduação em Liderança de Equipes de T.I pela Universidade Bandicoot.</li>",
    img: "../../img/rafael.jpg"
}, {
    title: "Heitor Carvalho",
    texto: "<li> Certificação em Segurança de Redes pela Academia de Proteção Cibernética </li> <li> Pós-Graduação em Projeto de Sistemas Embarcados pela Universidade de Engenharia TechDesign. </li>",
    img: "../../img/heitor.jpg"
}, {
    title: "Welinton Jr.",
    texto: "<li> Certificação em Desenvolvimento Ágil de Software pela Academia de Métodos Modernos. </li> <li> Especialização em Desenvolvimento Web Responsivo pela Escola de Tecnologia WebMaster </li>",
    img: "../../img/weli.jpg"
}, {
    title: "Daniel  Santos",
    texto: "<li> Certificado em Big Data Analytics pela Escola de Ciência de Dados Avançada. </li> <li> Curso Avançado em Visualização de Dados pela Academia de Análise Visual. </li>",
    img: "../../img/daniel.jpg"
}];


for (let i = 0; i < dadosEquipe.length; i++) {
    document.getElementById(`tituloEquipe${i}`).innerHTML = dadosEquipe[i].title;
    document.getElementById(`textoEquipe${i}`).innerHTML = dadosEquipe[i].texto;
    document.getElementById(`img${i}`).src = dadosEquipe[i].img;

}

