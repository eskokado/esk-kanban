
/************************** 
TEMPLATE CARD
***************************/
function templateCards(card) {
    
    console.log(card)
    const secao = document.querySelector(`.app_secao[data-id="${card.idSecao}"] ul`)

    const btnDeleteCard = document.createElement("button")
    btnDeleteCard.dataset.id = card.id
    btnDeleteCard.dataset.idSecao = card.idSecao

    btnDeleteCard.addEventListener("click", excluirCard)

    const li = document.createElement("li")
    li.classList.add("lis")
    li.draggable = true

    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('dragenter', handleDragEnter);
    li.addEventListener('dragleave', handleDragLeave);
    li.addEventListener('dragend', handleDragEnd);
    li.addEventListener('drop', handleDrop);

    const h2 = document.createElement("h2")
    h2.innerText = card.nome
    const p  = document.createElement("p")
    p.innerText = card.descricao
    li.appendChild(btnDeleteCard)
    li.appendChild(h2)
    li.appendChild(p)

    secao.appendChild(li)
}

function excluirCard(){
    const idCard  = this.dataset.id
    const idSecao = this.dataset.idSecao

    kenzieKanban.removerCard(idCard,idSecao)
    this.parentElement.remove()
}

/************************** 
 TEMPLATE HEADER SEÇÃO
***************************/
function appSecaoHeader(secaoNome){
    
    const appSecaoHeader = document.createElement("div")
    appSecaoHeader.classList.add("app_secao_header")

    const input = document.createElement("input")
    input.value = secaoNome
    input.type  = "text"
    input.placeholder = "Nome seção"
    appSecaoHeader.appendChild(input)
    
    return appSecaoHeader
}


/************************** 
 TEMPLATE  FOOTER 
***************************/
function appSecaoFooter(secaoId){
    const appSecaoFooter = document.createElement("div")
    appSecaoFooter.classList.add("app_secao_footer")

    const templateFooter = `<button>Adicionar novo card</button>
    <div class='app_secao_footer_card hidden'>
    <input type='text' name='tituloCard' placeholder='Título do card'>
    <textarea placeholder='Descrição' name='descricaoCard' id='descricaoCard' value='Descrção do card'></textarea>
    <button class='app_secao_footer_salvar_card' id='${secaoId}'>Add</button></div>`
    appSecaoFooter.innerHTML = templateFooter
    return appSecaoFooter
}


// -----------------------------------//
// CONTROLES
// -----------------------------------//

const appButtonabrirSecao = document.querySelector('.app_add_secao .app_button_add_secao')
const appContainerAddSecao = document.querySelector('.app_add_secao .app_container_add_secao')

appButtonabrirSecao.addEventListener('click', function() {
    appContainerAddSecao.classList.toggle('hidden')
})

function abrirAddCard() {
    this.nextElementSibling.classList.toggle("hidden") 
}

function resetarAbrirAddCard(elemento) {
    elemento.removeEventListener('click', abrirAddCard)
    elemento.addEventListener('click', abrirAddCard)
}

function resetarSalvarCard(elemento) {
    elemento.removeEventListener('click', salvarCard)
    elemento.addEventListener('click', salvarCard)
}

function resetarControles(){
    const botaoAbrirAddCard = document.querySelectorAll(".app_secao_footer > button")
    botaoAbrirAddCard.forEach(resetarAbrirAddCard)

    const botaoAddCard = document.querySelectorAll(".app_secao_footer_salvar_card")
    botaoAddCard.forEach(resetarSalvarCard)
}


function mostrarMensagemValidacao(){
    const mensagem = document.querySelector('#app .mensagem-validacao');
    mensagem.classList.add('mostrar');
    setTimeout(function(){
        mensagem.classList.remove('mostrar');
    }, 3500)
}

// -----------------------------------//
// DRAG E DROP
// -----------------------------------//


function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}


  let items = document.querySelectorAll('.lis');
  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

    return false;
  }