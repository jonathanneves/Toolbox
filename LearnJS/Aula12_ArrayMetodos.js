const pilotos = ['Vettel', 'Alonso', 'Raikkonen', "Massa"]
pilotos.pop() //Remove último elemento!
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento no final!
console.log(pilotos)

pilotos.shift() //Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Senna') // Adiciona um novo elemento no início
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //partir da posição 2, adiciona esses dois
console.log(pilotos)

// remover
pilotos.splice(3, 1) //Remove elemento da posição 3, um único elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice 2 até o final
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // [a,b,c,d,e] -> [b,c,d]    // Vai ate indice 4 mas não inclui ele
console.log(algunsPilotos2)