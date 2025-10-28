//Repetindo uma mensagem
//Peça ao usuário para inserir um número N e repita a
//mensagem 'Olá!' N vezes.
var prompt = require('prompt-sync')();
let numero = +prompt ("Digite um numero: ")
for(let i = 0 ; i < numero ; i++){
    console.log("Olá");
    
}