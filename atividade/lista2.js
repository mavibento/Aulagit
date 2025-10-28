//Tabuada de um número
//Peça ao usuário para inserir um número e exiba a tabuada
//desse número de 1 a 10, utilizando FOR
var prompt = require('prompt-sync')();
let mult = +prompt(" Digite a tabuada: ")
for (let i = 1;  i <= 10; i++) {
    console.log(`${i} x ${mult} = ${i * mult}`);
}
    



