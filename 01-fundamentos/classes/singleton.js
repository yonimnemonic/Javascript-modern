

class Singleton{

    static instancia; //undefined
    nombre = '';
    constructor (nombre = ' '){
        const a = undefined;

        if (!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.intancia = this;
        this.nombre = nombre;

        // return this;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);