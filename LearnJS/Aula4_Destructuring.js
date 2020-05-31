//Acessando atributos com Destructuring

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa  //tira de dentro do objeto pessoa nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //não foi definido
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro,'-',numero,cep)      //virgula deixa espaço, + nao deixa espaço

const { conta: { ag, num } } = pessoa
console.log(ag, num) //ERRO: Cannot destructure property não existe em Pessoa