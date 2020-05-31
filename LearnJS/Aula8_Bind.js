const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //so funciona com this.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //ERRO: conflito entre funcional e Orientado Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)  //Ele amarra um objeto como dono da execução do metodo, resolve problema do This
falarDePessoa() //Sem Erro
