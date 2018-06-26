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

/*

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

*/





//string 
const nombre1 ='pedro';
const nombre2 = new String('pedro');

console.log(typeof nombre2);
console.log(nombre2);


//numeros

const numero1 = 20;
const numero2 = new Number(20);


//booleanos

const boolean1 = true;
const boolean2 = new Boolean(true);
//funciones

const funcion1 = function(a,b) {
    return a+b;
}

const funcion2 = new Function('a','b','return 1 + 2');

//Objetos

const persona1 = {
    nombre : 'juan'
}

const persona2 = new Object({nombre: 'juan'});


//arreglos

const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2);