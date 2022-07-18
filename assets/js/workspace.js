class Workspace {
    constructor(id, nome) {
        this._id = id
        this._nome = nome
        this._secoes = []

        this._idSecao = 0
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

    get secoes() {
        return this._secoes
    }

    get idSecao() {
        return this._idSecao
    }

    adicionarSecao(secao) {
        secao.id = this._idSecao
        this._secoes.push(secao)
        this._idSecao++
    }
}