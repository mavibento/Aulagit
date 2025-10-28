var prompt = require('prompt-sync')();
let numero = +prompt ("Digite um numero: ")
function negativo (n1){

    if(n1 < 0){
    return "--- O numero é negativo ---"
}else{
    return "+++ O numero é positivo +++"
}
    }
    console.log(negativo(numero));
    


