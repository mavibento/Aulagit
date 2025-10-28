//Cotagem de pares
//Escolha a tabuada de um número e faça contagem de
//elementos pares presentes na tabuada.
var prompt = require('prompt-sync')();
let tabuada = +prompt("Insira o numero: ")
let pares= 0
let nuPares=[]
let impar = 0
let nuImpar =[]
for( let i = 1 ; i <= 10 ; i++ ){
    console.log(`${i} x ${tabuada}= ${i* tabuada}`);
if((i * tabuada) %2 == 0){
nuPares.push(tabuada*i)
    pares++
}else{
nuImpar.push(tabuada*i)
    impar++
}
}
   console.log("os numeros pares são : ", pares);
    console.log(nuPares);
    console.log("os numeros impares são : ", impar);
    console.log(nuImpar);