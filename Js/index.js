// O header deve ter cor de fundo #2e948a
const header = document.querySelector("header");

header.style = "background-color: #2E948A";

// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
const nav = document.querySelector("nav");

nav.children[0].href = "/cursos.html";

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introdução.
const divIntroducao = document.querySelector("#introducao");

divIntroducao.style = "justfy-content: space-evenly";

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

// O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {   // adiciona o evento de submit no formulário
    event.preventDefault();     // impede que a página seja recarregada
    form.setAttribute('action', 'sucesso.html');     // altera o atributo "action" do formulário para redirecionar para "sucesso.html"
    form.submit();     // envia o formulário
});

// Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
const emailInput = document.querySelector('input[type="email"]');
const phoneInput = document.createElement('input');
phoneInput.setAttribute('type', 'tel');
phoneInput.setAttribute('name', 'phone');
phoneInput.setAttribute('placeholder', 'Telefone');
emailInput.after(phoneInput);

// O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box
const textarea = document.querySelector('#mensagem');

textarea.style.boxSizing = 'border-box';

// O botão não está do tamanho adequado, precisa ter uma largura maior
let btnEnviar = document.getElementById("enviar");

btnEnviar.style.width = "120px";

// Abaixo da section do formulário, adicione uma seção de comentário igual a página Home
const formSection = document.querySelector('.formulario');

const comentarioSection = `<section id="comentario">
                            <h2>Comentários</h2>
                            <div class="comentario">
                                <img src="imagens/avatar-mulher.jpg" alt="avatar mulher">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, quam ac auctor dignissim, sapien enim euismod nulla, eget ullamcorper elit dolor ut augue."</p>
                                <p class="nome">Larissa Santos, 28</p>
                            </div>
                            <div class="comentario">
                                <img src="imagens/avatar-homem.jpg" alt="avatar homem">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, quam ac auctor dignissim, sapien enim euismod nulla, eget ullamcorper elit dolor ut augue."</p>
                                <p class="nome">Lucas Andrade, 31</p>
                            </div>
                          </section>`;
formSection.insertAdjacentHTML('afterend', comentarioSection);
