const header = document.querySelector("header");

header.style = "background-color: #2E948A";

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
phoneInput.setAttribute('placeholder', 'telefone');
emailInput.after(phoneInput);


// O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box
// cria um novo elemento "style"
var styleElement = document.createElement("style");
// define o conteúdo CSS para o novo elemento
styleElement.textContent = "form, textarea { box-sizing: border-box; }";
// adiciona o atributo "box-sizing" ao conteúdo CSS
styleElement.setAttribute("type", "text/css");
// adiciona o novo elemento "style" ao elemento "head" da página
document.head.appendChild(styleElement);


// O botão não está do tamanho adequado, precisa ter uma largura maior
let btnEnviar = document.getElementById("enviar");

btnEnviar.style.width = "120px";

// Abaixo da section do formulário, adicione uma seção de comentário igual a página Home
const formSection = document.querySelector('.formulario');

const comentarioSection = `
<section class='titulo depoimento'>
<h3>Depoimentos</h3>
</section>

<section id='falam_sobre'>
<div class="depoimentos">
    <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>

<style>
    section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 10px auto;
    margin-left: 8%;
    margin-block-end: 2%;
    }

    h3 {
        color: #009688;
        font-size: 30px;
        margin-left: 50px;
    }

    .depoimentos {
        width: 570px;
        display: flex;
        align-items: center;
        padding: 10px 50px;
    }

    img {
        margin-right: 20px;
    }

    p {
        margin: 25px 0px;
    }

    </style>`;

formSection.insertAdjacentHTML('afterend', comentarioSection);