//Adicionando e removendo elementos
//Peça ao usuário para inserir um número e exiba a tabuada
//desse número de 1 a 10, utilizando
//FOR.
var prompt = require('prompt-sync')();
let numero = +prompt("Insira um numero: ")
let i = 0
while(i < 10){
i++
console.log(`${numero} x ${i} = ${numero * i}`);

}
