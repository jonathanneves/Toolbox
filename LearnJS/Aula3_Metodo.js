const saudacao  =  'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

// OBjetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    preso: 90,
    endereco: {
        logradouro: "Rua Nego Ney",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)