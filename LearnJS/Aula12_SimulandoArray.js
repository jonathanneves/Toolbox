const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }  //objeto
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumarable: false   //função não aparece no resultado final
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) //mesma coisa so que array [] não precisa do toString()
