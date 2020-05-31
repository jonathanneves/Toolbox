const filhas = ['Vanessa', 'Cibalena']
const filhos = ['João', 'Anakkin']
const todos = filhas.concat(filhos, 'Fulano')   //junta lista Filhas com Filhos e adiciona 'Fulano' junto
console.log(todos)

console.log(['Valor:'].concat([1,2], [3,4], 5, [[6,7]])) //juntando uma lista vazia com varios arrays diferentes
//Observa que ele automaticamente coloca a matriz [[6,7]] em uma só array dentro da lista inteira