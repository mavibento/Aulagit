//Descobrindo o dia da semana
//Crie um programa que solicite ao usuário que digite um
//número de 0 a 6 usando o prompt-sync.
//Cada número representa um dia da semana, sendo:
//● 0 → Domingo
//● 1 → Segunda-feira
//● 2 → Terça-feira
//● 3 → Quarta-feira
//● 4 → Quinta-feira
//● 5 → Sexta-feira
// 6 → Sábado
var prompt = require('prompt-sync')();
let digite = +prompt("Digite um numero:: ")
let i = 0
if(digite == 0){
    console.log("Hoje é domingo!!");
    
}else if (digite==1){
    console.log("Hoje é segunda!!");
    
}else if (digite==2){
    console.log("Hoje é terça!!");
    
}else if (digite==3){
    console.log("Hoje é quarta!!");
    
}else if (digite==4){
    console.log("Hoje é quinta!!");
    
}else if (digite==5){
    console.log("Hoje é sexta!!");
    
}else if (digite==6){
    console.log("Hoje é sábado!!");
    
}