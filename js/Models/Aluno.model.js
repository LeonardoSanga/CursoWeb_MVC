import { avarege } from './../calc.js'

export class AlunoModel {
    constructor({nome, _id, notas} = {notas: {} }) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generateId()
        this.notas = {...notas} // para não referenciar o mesmo local na memória (cópia)

        if(this._id > AlunoModel.maxId) { // o id normalmente é gerado no lado do servidor
            AlunoModel.maxId = this._id
        }

        this.media = {}

        this.generateAvarege()
    }

    generateId() {
        return AlunoModel.maxId + 1;
    }

    generateAvarege() {
        for(let materia in this.notas) {
            this.media[materia] = avarege(...this.notas[materia]) // espalhados
        }
    }
}

AlunoModel.maxId = 0