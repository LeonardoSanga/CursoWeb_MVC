import {AlunoService} from './Services/Aluno.service.js'
import {AlunosView} from './Views/Alunos.view.js'
import {AlunosController} from './Controllers/Alunos.controller.js'
import {MateriasService} from './Services/Materias.service.js'

const alunosService = new AlunoService()

//alunos.forEach(aluno => {
//    alunosService.add(new AlunoModel(aluno))
//});


const alunoView = new AlunosView(document.querySelector("[data-table-alunos]"),
new MateriasService().materias
)

const alunosController = new AlunosController(alunosService, alunoView)

// Adicionar alunos
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault() // impedindo o formulário de ser enviado
    const nome = document.getElementById("first_name").value

    alunosController.add({nome})
}) 

document.querySelector("#search_name").addEventListener("input", function(){
  const name = this.value
  sessionStorage.setItem("search", name)

  if(name.length > 2 || name.length === 0 /* quando excluir, limpa-se o filtro */) [
    alunosController.search(name)
  ]
})

// fazendo com que, ao voltar da página de edição, após ter filtrado por um nome, a filtragem permaneça
const inputEvent = new Event("input")
const inputEvent_IE = document.createEvent("Event")
inputEvent_IE.initEvent("input", true, true)
if(sessionStorage.getItem("search")) {
  document.querySelector("#search_name").value = sessionStorage.getItem("search")
  //document.querySelector("#search_name").dispatchEvent(inputEvent)
  document.querySelector("#search_name").dispatchEvent(inputEvent_IE)
}