const crearPersona = (nombre, apellido)=> ({nombre,apellido})


const persona = crearPersona('Agustín','Martínez')
console.log(persona)

function imprimeArgumentos(){
    console.log(arguments)
}

const imprimeArgumentos2 = (edad,...args)=>{
    // console.log({edad},args)
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'agustí', 'martinez');
console.log({casado, vivo, nombre,saludo})