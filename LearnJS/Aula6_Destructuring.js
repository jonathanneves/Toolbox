function rand({ min = 0, max = 1000}) {     //Parametro, valor default 0 e 1000
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)
}

//console.log(rand({max: 50, min: 40}))
const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min:995 }))
console.log(rand({}))
//console.log(rand())