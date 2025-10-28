let cachorro ={
    pelo: "Marrom",
    idade : 2 ,
    nome : "Pingo",
    temPulga: true,
    idoso: false,
    validarFelicidade: function(){
    if( this.temPulga === false) {
        return `O Pingo está alegre!!!!`
    }else{
        return `O Pingo está choroso!!`
    }
    },
    validarIdoso : function(){
        if (this.idoso === false){
            return `O Pingo é jovem ...`
        }else{
            return `O Pingo é idoso...`
        }
        
        
    },
    aumentarIdade: function(){
        return (this.idade++)
    }
}
console.log(cachorro.validarFelicidade());
console.log(cachorro.validarIdoso());
cachorro.aumentarIdade()
console.log(cachorro);



