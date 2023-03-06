// O header deve ter cor de fundo #2e948a
const header = document.querySelector("header");

header.style = "background-color: #2E948A";

// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
const nav = document.querySelector("nav");

nav.children[0].href = "/cursos.html";

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introdução.
const divIntroducao = document.querySelector("#introducao");

divIntroducao.style = "justify-content: space-evenly";

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós"
const tituloDepoimentos = document.querySelector(".titulo");

tituloDepoimentos.innerHTML = "<h3>O que falam sobre nós</h3>";

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
const tituloBlog = document.querySelectorAll(".titulo");

tituloBlog[1].innerHTML = "<h3>Mais conteúdo pra você</h3>";

// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas
document.querySelectorAll(".titulo")
.forEach((titulo) => (titulo.style = "text-transform: uppercase;"));

// O  botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
const aPosts = document.querySelector("#todos_posts");

aPosts.href = "/blog.html";                                                                                       

// Adicionar um novo curso na section que contém o id investimentos_poupando_independencia
const investimentos_poupando_independencia = document.getElementById("investimentos_poupando_independencia");

investimentos_poupando_independencia.insertAdjacentHTML("beforeend", `
    <div id="independencia">
        <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
        <h2>Independência Financeira</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <a class="comecar_agora" href="./curso.html">começar agora</a>
    </div>
`);
