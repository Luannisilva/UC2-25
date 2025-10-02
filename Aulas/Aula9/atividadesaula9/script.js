const a = true
const b = false
const c = true

console.log( a && b)

console.log( b && c)
console.log(a && c)
console.log(a && b && c)

console.log( a || b)

console.log( b || c)
console.log(a || c)
console.log(a || b || c)

console.log( ! a  ,!b)

console.log( !b ,! c)
console.log(!a ,! c)
console.log(!a ,! b ,!c)


nome =prompt("qual seu nome")
anoDeNacimento =prompt("qual foi o ano q vc nasceu")
anoAtual = prompt("em que ano estamos")
idade =   anoAtual - anoDeNacimento 
idadeEmDoisMilECinquenta = 2050 - anoDeNacimento
maiorDeIdade = idade >= 18

console.log("seu nome é",nome ," voce  tem " ,idade," anos",
" voce é  maior de idade", maiorDeIdade," em 2050 voce vai  ter",idadeEmDoisMilECinquenta)



