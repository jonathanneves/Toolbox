//Map por tras dos panos
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

//JSON
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }']

// Retorna um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // recebe um json como parametro e retorna como objeto
const apenasPreco = produto => produto.preco    // recebe objeto produto e retorna preço

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)