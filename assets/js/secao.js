class Secao{
    constructor(id, nome) {
        this._id = id
        this._nome = nome
        this._cards = []
        this._idCard = 0
    }

    get id() {
        return this._id
    }

    set id(id) {
        this._id = id
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get cards() {
        return this._cards
    }

    get idCard() {
        return this._idCard
    }

    adicionarCard(card) {
        card.id = this._idCard
        card.idSecao = this._id
        this._cards.push(card)
        this._idCard++
    }

    removerCard(idCard) {
        let cardRemove = this._cards.find((card) => card.id == idCard)
        let indexCardRemove = this._cards.indexOf(cardRemove)
        this._cards.splice(indexCardRemove, 1)
    }
}