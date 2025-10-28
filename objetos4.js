//criar um objeto telefone
//com uma funçao de tocar , ela deve retornar um TRIM, TRIMM!
var prompt = require('prompt-sync')();
let telefone = {
    numero : "9998767700",
    credito : 10,
    tocar : function(){
        return `trim, trimmm..`
    }, 
    trocarNumero:function(numero){
        this.numero = numero

    },
    ligar: function(telefone){
        if (this.credito > 0){
            this.credito--
            return `Ligando para ${telefone}`
        }else{
            `Sem credito`
        }
    }
    }
    const numeroTel = prompt("Digite seu novo numero ")
    telefone.trocarNumero(numeroTel)
    console.log(telefone.numero);
    console.log(telefone.tocar());
    console.log(telefone.ligar);
    console.log(telefone.credito);
    
    
    
    


