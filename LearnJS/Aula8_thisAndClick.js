//Function normal, this varia
function f1() { console.log (this === window) }
f1()
//Quando clicar no body ele executa a função f1
document.getElementsByTagName('body')[0].onclick = f1

//Arrow Function - this nao varia diferente da function normal
const f3 = (/*parametro*/) => console.log(this===window)
f3()
//Quando clicar no body ele executa a função f3
document.getElementsByTagName('body')[0].onclick = f3