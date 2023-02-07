// O header deve ter cor de fundo #2e948a
const header = document.querySelector("header");

header.style = "background-color: #2E948A";

// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
const nav = document.querySelector("nav");

nav.children[0].href = "/cursos.html";

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introdução.
const divIntrodução = document.querySelector("#introducao");

divIntroducao.style = "justfy-content: space-evenly";

// Na etapa de depoimentos, o título deveria ser "O que falam de nós"
const tituloDepoimentos = document.querySelector(".titulo");

tituloDepoimentos.innerHTML = "<h3>O que falam de nós</h3>";

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
const tituloDepoimentos = document.querySelector(".titulo");

tituloBlog[1].innerHTML = "<h3>Mais conteúdo pra você</h3>";

// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas
document
.querySelectorAll(".titulo")
.forEach((titulo) => (titulo.stylr = "text-transform: uppercase;"));

// O  botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
const aPosts = document.querySelector("#todos_posts");

aPosts[].href = "/blog.html";                                                                                       //adicionar index

// Adicionar um novo curso na section que contém o id investimentos_poupando_independencia
const sectionInvestimentos = document.querySelector("#investimentos_poupando_independencia");

sectionInvestimentos.innerHTML = '<div id="independencia"><img src="/imagens/independencia_financeira.png" width="180px"alt="Independência Financeira"><h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit essecillum doloreeu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar agora</a></div>'

// O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
const form = document.querySelector("form");

form.children[0].href = "/sucesso.html";

// Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
const formInput = document.querySelector(".email");

formInput.innerHTML = '<input type="telefone" required placeholder="telefone">';

// O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box
const formTextarea = document.querySelector(".textarea");

formTextarea.style = "box-sizing: border-box";

// O botão não está do tamanho adequado, precisa ter uma largura maior
const enviar = document.querySelector("#enviar");

enviar.style = "padding: 100px;"

// Abaixo da section do formulário, adicione uma seção de comentário igual a página Home
const sectionForm = document.querySelector(".formulario");

formInput.innerHTML = <section class='titulo depoimento'><h3>Depoimentos</h3></section><section id='falam_sobre'><div class="depoimentos"><img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”<br><br> Wally, 25</p></div><div class="depoimentos"><img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Jaden Smith, 23</p></div><div class="depoimentos"> <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">  <p>  ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.” <br> <br> Whoopi Goldberg, 37 </p></div><div class="depoimentos"> <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim"> <p>”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam.” <br><br>Janes Joplin, 29</p></div></section>;