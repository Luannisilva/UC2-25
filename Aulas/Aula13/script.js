/*let numero 
let soma = 0 
 while (numero!== 0 ) {
    numero = Number (prompt(" digite  um numero"))
    soma+= numero
    
 }
 console.log(`o resultado é : ${soma}`)

 let c = 1 
 do {
    console.log("O valor de C é",c)
    c++
 } while (c <= 6);

 for (let i = 0; i<= 9  ; i++) {
  console.log("o valor de i é ",i)
     }
 let meuArray = [10,4,7,8,200,77]
     for (let i = 0; i <6 ; i++) {
        console.log(meuArray[i])
       // const element = array[i];
        
     }
let maiorNumero = 0
     let numeros = [11,15,18,14,12,13]
     for (let i = 0; i < 6; i++) {
        if (numero[i]> maiorNumero) {
            maiorNumero = numeros[i]
        }
    
        
     }
     console.log("O maior numero é ",maiorNumero)

     let numerosPares = 0
     let numeros1 = [11,15,18,14,12,13]
     for (let i = 0; i <= 5; i++) {
        if (numeros1[i]%2===0) {
            numerosPares += numeros1[i]
        }
    
     } 
     console.log("A soma dos numeros pares é  ",numerosPares)

 const meuArray2 = [100,7,4,8,10,3,20,777,2000,1000]
 for (const numero of meuArray2) {
   console.log("O numero é:",numero)
 } 
 
  const arrayEx = ["oi","sumido","tudo","bem?","saudades"]
  var frase = ""
  for (const string of arrayEx) {
   frase+=arrayEx
   
 }

 console.log(frase) */


 let numerosPares = 0
 let numeros1 = [11,15,18,14,12,13]


for (const numero1 of numeros1) {
   if (numeros1%2===0) {
      numerosPares += numeros1
}}

console.log("A soma dos numeros pares é  ",numeros1)

let palavraMaior = 0 
let frase = ["O sucesso é a soma de pequenos esforços repetidos todos os dias e Ser corajoso não é não ter medo, é avançar apesar dele"]
for (let palavra of frase) {
   let comprimento = palavra.length;
   if (comprimento > palavraMaior) {
    
      palavraMaior = comprimento;
      frase = palavra;
  } else if (comprimento === palavraMaior) {
      
      frase.push(palavra);
  }
}

console.log("Palavras mais longas:", frase)

    

    let valor = 0 
    for (let i =0 ; i < 5 ; i++){
      valor+=i
    }
    console.log(valor)
