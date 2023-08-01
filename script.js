const numero= parseFloat(prompt('Informe um numero'))
const numUser= document.getElementById('numero-usuario')
const raiz= document.getElementById('raiz-quadrada')
const int= document.getElementById('inteiro-true')
numUser.innerHTML = numero
raiz.innerHTML = Math.sqrt(numero)
int.innerHTML = Number.isInteger(numero)