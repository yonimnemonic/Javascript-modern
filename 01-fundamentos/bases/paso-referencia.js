// // los primitivos pasan por valor NO por referncia.

let a = 10;
let b = a;

a = 30;
console.log({a,b});


//todos los objetos son pasados por REFERENCIA

let juan = {nombre:'Juan'}
let ana = {...juan};
ana.nombre = 'Ana';
console.log(juan, ana)

//Devuelve {nombre: 'Ana'}{nombre: `Ana`}

const cambiaNombre = ({...persona})=>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log(peter, tony)

//con arreglos

const frutas = ['Manzana','Pera','Piña'];

const otrasFrutas = frutas.slice();

// const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table(otrasFrutas);
console.table(frutas);



//ejemplos

const names = {nombre:'Manolo'};
let cristina = {...names};
cristina.nombre = 'Cristina'

console.log(names,cristina)


