// Fazer um sistema que peça ao usuario 2 valores
// e peça qual operação ele deseja realizar
// porem o sistema so deve parar se o usuario
// digitar uma operaçao 
var prompt = require('prompt-sync')();
const n1 = +prompt("Digite um valor: ")
const n2 = +prompt("Digite outro valor: ")
let operacao
    function somar (n1,n2){
          return (`Soma: ${n1 + n2}`)
    }function subtrair(n1,n2){
        return(`Subtração: ${n1 - n2}`);
    }function multiplicar(n1,n2){
        return(`Multiplicação: ${n1 * n2}`)
    }function dividir(n1,n2){
        return(`Divisao: ${n1/n2}`)
    }
    while(true){
        operacao = prompt("Escolha uma operação + - / *: ")
        if(operacao == "+"){
            console.log(somar(n1,n2));
            continue
        }else if(operacao == "-"){
            console.log(subtrair(n1,n2));
            continue
        }else if(operacao == "*"){
            console.log(multiplicar(n1,n2));
            continue
        }else if(operacao == "/"){
            console.log(dividir(n1,n2));
            continue
        }else{
            console.log("Operação Incorreta");
            break
        }
    }
        
    
    

        
    

    
    
        
    