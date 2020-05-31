var nome = window.prompt('Qual é seu nome?')
var nome = "Jonathan".fontcolor("white");
document.write('Olá, <strong>'+nome+'</strong>! Seu nome tem '+nome.length+'<br>')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length}<br>`)

var n1 = 1545.5
document.write('Valor: ' + n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

document.getElementById("myH2").style.color = "#fff";