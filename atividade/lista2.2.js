//Subindo uma escada
//Imagine que você está subindo uma escada. Cada degrau tem
//uma altura fixa de 30 cm. Escreva
//um programa que solicite ao usuário inserir a altura
//total da escada em centímetros e calcule
//quantos degraus são necessários para alcançar o topo.
var prompt = require('prompt-sync')();
let alt = +prompt("Digite a altura: ")
let altescada = ( alt / 30)
console.log(`Serão necessarios ${Math.ceil(altescada)} degraus para  alcançar o topo!!`);



