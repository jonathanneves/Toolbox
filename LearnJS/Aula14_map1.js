const nums = [1,2,3,4,5]

// MAP = For com propósito

let resultadoDobro = nums.map(function(e){
    return e * 2
})

//let resultado = nums.map(o => o*2);
console.log(resultadoDobro, nums)

const soma10 = e => e + 10  //uma função em variável 
const triplo = e => e * 3 
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)  //array chamando função de uma variavel tres vezes
console.log(resultado)