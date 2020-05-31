//Reduce = reduz os valores em um só
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 10, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Realizando soma de todas as notas
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    //Acumulador = callback - valor anterior, atual = indice atual
    console.log(acumulador, atual)
    return acumulador + atual
}, 10 /*Valor inicial da lista*/)

console.log(resultado)