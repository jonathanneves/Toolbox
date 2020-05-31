const produtos = [
    { nome: 'Notebook',preco: 2499, fragil: true },
    { nome: 'iPad',preco: 4199, fragil: true },
    { nome: 'Copo de Vidro',preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico',preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p){
    return false //p.preco > 2400
}))

const ehCaro = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil // == true nao precisa

console.log(produtos.filter(ehCaro).filter(ehFragil))
