//criar um objeto de uma lampada 
//criar funções de ligar e desligar
//essas funções devem validar se a lampada ja está ligada ou não
let lampada = {
    ligada : true,
    ligar : function(){
        if (this.ligada == false){
            return this.ligada = true
        }else{
        return `Já esta ligada` 
        }

    },
    desligar : function(){
        if (this.ligada == true){
            return this.ligada = false
        }else{
            return`Já está desligada`
        }
    }
}
    console.log(lampada);
    console.log(`===Funçao ligar`);
    console.log(lampada.ligar());
    console.log(`Função desligar`);
    console.log(lampada.desligar());
    console.log(lampada);
    
    
    
     
    