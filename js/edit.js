import {AlunoService} from './Services/Aluno.service.js'
import {EditAlunoView} from './Views/EditAluno.view.js'
import {EditAlunoController} from './Controllers/EditAluno.controller.js'
import {MateriasService} from './Services/Materias.service.js'

const alunosService = new AlunoService()

const paramsString = window.location.search   
const URLparams = new URLSearchParams(paramsString)
const id = parseInt(URLparams.get("id"))

const aluno = alunosService.searchById(id)

document.getElementById("first_name").value = aluno.nome

const editAlunoView = new EditAlunoView(document.querySelector("[data-edit-aluno-form]"), 
new MateriasService().materias)
     
const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunosService)

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    const nome = document.querySelector("#first_name").value

    editAlunoController.edit(aluno, nome)
    window.location.assign("index.html") // para voltar para a home assim que as notas forem alteradas
})