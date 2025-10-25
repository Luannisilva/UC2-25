let numero 
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
     let numeros = [11,15,18,12,13]
     for (let i = 0; i < 6; i++) {
        if (maiorNumero> numero[i]) {
            maiorNumero= numeros[i]
        }
    
        console.log("O maior numero é ",maiorNumero)
        
     }