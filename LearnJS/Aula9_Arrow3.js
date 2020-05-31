let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) //TRUE --- No browser = window é objeto global 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //FALSE
comparaComThis(obj) //TRUE

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //FALSE
comparaComThisArrow(module.exports) //TRUE - para arrow function

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)    //FALSE - Não vai mudar, o this aponta para o objeto da função que foi escrita
comparaComThisArrow(module.exports) //TRUE