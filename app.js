//Object Literal
/*
const cliente = {
     nombre : 'juan',
     saldo : 600,
     tipoCliente : function(){
          let tipo;

          if(this.saldo > 1000){
               tipo = 'Gold';
           }else if (this.saldo > 500){
               tipo = 'platinium';
           }else {
               tipo = 'normal';
          }
          return tipo;
     }
}

console.log(cliente.tipoCliente());

*/
//Metodo alternativo

function Cliente(nombre, saldo){
     this.nombre = nombre;
     this.saldo = saldo;
     this.tipoCliente = function(){
          let tipo;
          if(this.saldo > 1000){
               tipo = 'Gold';
           }else if (this.saldo > 500){
               tipo = 'platinium';
           }else {
               tipo = 'normal';
          }
          return tipo;

     }
}

const persona = new Cliente('Pedro', 20000);

console.log(persona);