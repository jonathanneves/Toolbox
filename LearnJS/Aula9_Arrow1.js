let dobro = function(a){
    return 2 * a
}

//Arrow Function
dobro = (a) => {
    return 2 * a
}

//Arrow resumido, usado em funçao de 1 linha
dobro = a => 2 * a  // return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

//Dois exemplos sem parametro
ola = () => 'Olá'
ola = _ => 'Olá'    // possui um param
console.log(ola())