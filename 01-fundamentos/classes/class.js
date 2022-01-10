

class Persona {
    //por defecto vienen con 'use strict'
    //propioedades
    //metodos y propiedades estáticas se pueden utilizar sin instanciar el objeto.
    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje (){
        console.log(this.nombre)
        console.log('hoal a todos soy un metodo statico')
    }

     nombre = '';
     codigo = '';
     frase = '';
     comida = '';

    constructor(nombre, frase, codigo){// es un metodo que se ejecuta una vez se instancia un objeto persona.
        console.log('Hola!')// el constructor a difercia de una función corriente si empre retorna algo
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //get set

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `la comida favoritas de Spidey es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} mi código es ${this.codigo}`);
    }
    miFrase(){
        console.log(`Mi frase es: ${this.frase}`)
    }

}

const spiderman = new Persona('Agustí','que pasa nen','ADIEKD');


// const ironman = new Persona('Toni','que pasa nen','4525A');
// Persona._conteo = 2;


console.log('Conteo persona', Persona._conteo)

console.log( Persona.conteo)
console.log(Persona.mensaje())

// console.log( ironman)
// ironman.quienSoy();
// ironman.miFrase();
// spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// console.log( spiderman.getComidaFavorita)
