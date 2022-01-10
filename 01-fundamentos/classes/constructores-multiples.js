

class Persona {

    static porObjeto( {nombre, apellido, pais}){
        return new Persona( nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre} apellido: ${this.apellido} , ${this.pais}`)
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'flores',
      pais      = 'Honduras';

      const fher = {
          nombre:   'AGustí',
          apellido: 'Martínez',
          pais:     'AGustí',
      }

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto( fher );

persona1.getInfo()
persona2.getInfo()