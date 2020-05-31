const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 10, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsista?
const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log("Todos são Bolsista?",alunos.map(a => a.bolsista).reduce(todosBolsista))
/*const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(!atual)
        return false
    else
        return acumulador
});*/

//Desafio 2: Algum aluno é bolsista?
const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log("Algum Bolsista?",alunos.map(a => a.bolsista).reduce(algumBosista))