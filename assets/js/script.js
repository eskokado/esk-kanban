const kenzieKanban = new Workspace(1, "Esk Kanban")

const secao = new Secao(kenzieKanban.idSecao, "nova secao");

kenzieKanban.adicionarSecao(secao)

const areaSecoes = document.querySelector(".app_secoes")
kenzieKanban.secoes.forEach(imprimirSecoes)

//**********************************/
// INICIALIZANDO APLICAÇÃO
//***********************************/

const buttonNovaSecao = document.querySelector('.app_add_secao .app_container_add_secao button')

buttonNovaSecao.addEventListener('click', adicionarSecao)

function abrirAddCard() {
    this.nextElementSibling.classList.toggle("hidden") 
}

function adicionarSecao() {
    const inputNovaSecao = document.querySelector('.app_add_secao .app_container_add_secao input')
    const nomeSecao = inputNovaSecao.value

    inputNovaSecao.value = ''

    if (validacao(nomeSecao) !== false) {
        const novaSecao = new Secao(kenzieKanban.idSecao, nomeSecao)
        kenzieKanban.adicionarSecao(novaSecao);
        imprimirSecoes(novaSecao)
    } else {
        mostrarMensagemValidacao()
    }

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
    listaCards.classList.add("dropzone")

    const li = document.createElement("li")
    li.draggable = true

    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('dragenter', handleDragEnter);
    li.addEventListener('dragleave', handleDragLeave);
    li.addEventListener('dragend', handleDragEnd);
    li.addEventListener('drop', handleDrop);
    
    listaCards.appendChild(li)

    appSecao.appendChild(header)
    appSecao.appendChild(listaCards)    
    appSecao.appendChild(footer)
    areaSecoes.appendChild(appSecao)

    resetarControles();
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

    if (validacao(nomeCard) !== false) {
        const novoCard = new Card(secaoId, nomeCard, descricaoCard);
            
        kenzieKanban.adicionarCard(secaoId, novoCard);
    
        templateCards(novoCard);
    } else {
        mostrarMensagemValidacao()
    }

}

function validacao(inputText){
    const valorTexto  = inputText.trim()

    if(valorTexto !== ""){
       return valorTexto
    }

    return false
}

