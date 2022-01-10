const fher = {
    nombre: 'fernando',
    edad : 30,
    imprimir(){
        console.log(`nombre:${this.nombre} - edad: ${this.edad}`)
    }
}
const pedro = {
    nombre: 'Pedro',
    edad : 15,
    imprimir(){
        console.log(`nombre:${this.nombre} - edad: ${this.edad}`)
    }
}
fher.imprimir()
pedro.imprimir()



function Persona (nombre, edad){
    console.log('Se ejectuto está linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`nombre:${this.nombre} - edad: ${this.edad}`)
    }

}
const maria = new Persona('Maria', 18)
console.log(maria)
maria.imprimir();
maria.edad;