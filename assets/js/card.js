class Card {
    constructor(idSecao, nome, descricao) {
        this._id = 0
        this._idSecao = idSecao
        this._nome = nome
        this._descricao = descricao
    }

    get id() {
        return this._id
    }

    set id(id) {
        this._id = id
    }

    get idSecao() {
        return this._idSecao
    }

    set idSecao(idSecao) {
        this._idSecao = idSecao
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get descricao() {
        return this._descricao
    }

    set descricao(descricao) {
        this._descricao = descricao
    }
}