//Evitando this que varia
function Pessoa(){
    this.idade = 0
    const self = this

    setInterval(function(){
        this.idade++
        console.log(self.idade) //evita o erro do this mudar
    }/*.bind(this)*/, 1000)    //dispara a cada 1 segundo
    //bind aponta para pessoa e não gera erro
}
//Ou usa bind ou usa const self = this
//Arrow Function tambem resolve

new Pessoa