//Classificando Infrações de trânsito
//por excesso (ou falta) de velocidade
//Crie um programa que solicite ao usuário:
//1.A velocidade máxima permitida na via
//2.A velocidade registrada do condutor
//Com base nos dados informados,o programa deve analisar e
//classificar a situação conforme as seguintes regras:
//Excesso de velocidade:

//● Se a velocidade do condutor for até 20% acima da
//permitida → Infração leve
//● Se for entre 20% e 50% acima da permitida →
//Infração grave
//● Se for acima de 50% da velocidade permitida →
//Infração muito grave
//Velocidade abaixo do permitido:
//Se a velocidade do condutor for menor que a metade da
//velocidade permitida → Infração muito leve (por dirigir
//devagar demais).
//Caso nenhuma dessas condições seja atendida, o programa
//deve informar que a velocidade está dentro do limite
//permitido.
var prompt = require('prompt-sync')();
let velMax = +prompt ("Digite a velocidade maxima permitida: ")
let velReg = +prompt ("Insira a velocidade registrada: ")
let porc = (velMax * (20/100))
let porc2= (velMax * (50/100))
if(velReg > velMax +porc2){
    console.log("Infraçao grave");
}else if (velReg > velMax +porc){
    console.log("Infraçao leve");
}
    
    