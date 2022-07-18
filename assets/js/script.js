const kenzieKanban = new Workspace(1, "Esk Kanban")

let appButtonabrirSecao = document.querySelector('.app_add_secao .app_button_add_secao')
let appContainerAddSecao = document.querySelector('.app_add_secao .app_container_add_secao')

appButtonabrirSecao.addEventListener('click', function() {
    appContainerAddSecao.classList.toggle('hidden')
})

function abrirAddCard() {
    this.nextElementSibling.classList.toggle("hidden") 
}

const secao = new Secao(kenzieKanban.idSecao, "nova secao");

kenzieKanban.adicionarSecao(secao)

const areaSecoes = document.querySelector(".app_secoes")
kenzieKanban.secoes.forEach(imprimirSecoes)

const buttonNovaSecao = document.querySelector('.app_add_secao .app_container_add_secao button')

buttonNovaSecao.addEventListener('click', adicionarSecao)

const buttonNovoCard = document.querySelectorAll('.app_secao_footer > button')
buttonNovoCard.forEach(resetarAbrirAddCard)

function abrirAddCard() {
    this.nextElementSibling.classList.toggle("hidden") 
}

function adicionarSecao() {
    const inputNovaSecao = document.querySelector('.app_add_secao .app_container_add_secao input')
    const nomeSecao = inputNovaSecao.value

    const novaSecao = new Secao(kenzieKanban.idSecao, nomeSecao)
    kenzieKanban.adicionarSecao(novaSecao);
    imprimirSecoes(novaSecao)
}

function imprimirSecoes(secao){
    const nomeSecao  = secao.nome

    const idSecao = secao.id;

    const header = appSecaoHeader(nomeSecao)
    const footer = appSecaoFooter(idSecao)

    const appSecao = document.createElement("div")
    appSecao.classList.add("app_secao")

    // passar o id para o elemento appSeção
    appSecao.dataset.id = idSecao

    const  listaCards = document.createElement("ul")

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    resetarControles();
}

function resetarAbrirAddCard(elemento) {
    elemento.removeEventListener('click', abrirAddCard)
    elemento.addEventListener('click', abrirAddCard)
}

function resetarSalvarCard(elemento) {
    elemento.removeEventListener('click', salvarCard)
    elemento.addEventListener('click', salvarCard)
}

function salvarCard() {
    const secaoId = this.id;
    const parent = this.parentElement;

    const inputNomeCard = parent.querySelector('input');
    const inputDescricaoCard = parent.querySelector('textarea');

    const nomeCard = inputNomeCard.value;
    const descricaoCard = inputDescricaoCard.value;

    inputNomeCard.value = '';
    inputDescricaoCard.value = '';

    const novoCard = new Card(secaoId, nomeCard, descricaoCard);
        
    kenzieKanban.adicionarCard(secaoId, novoCard);

    templateCards(novoCard);
}

function resetarControles(){
    const botaoAbrirAddCard = document.querySelectorAll(".app_secao_footer > button")
    botaoAbrirAddCard.forEach(resetarAbrirAddCard)

    const botaoAddCard = document.querySelectorAll(".app_secao_footer_salvar_card")
    botaoAddCard.forEach(resetarSalvarCard)
}
