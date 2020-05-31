console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael' 
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //os valores entre 4 - 9 vao contar como undefined

console.log(aprovados) //<4 empty items>
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //javascrip nao exclui, so seta pra undefined
console.log(aprovados[1]) //essa posição fica undefined, nao reordena
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', "Ana"]
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //Excluir indice, exclui numero de elemento apartir desta posição, adicionar Ele1, adiciona Ele2
console.log(aprovados)