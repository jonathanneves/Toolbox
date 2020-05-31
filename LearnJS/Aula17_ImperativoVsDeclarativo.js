//Realizando média dos alunos
const alunos = [
    { nome: 'João', nota: 7.3 },
    { nome: 'Maria', nota: 9.2 },
]

// Imperativo = so é usado uma unica vez
let total1 = 0
for( let i = 0; i < alunos.length; i++ ){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo = pode reusar onde quiser
const getNota = aluno => aluno.nota
const soma = (total1, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1 (DECLARATIVO)