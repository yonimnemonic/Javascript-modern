// Entra en un sito web  para consultar si está abieto hoy... 

const dia = 1; //0: domingo, 1: lunes ...
const horaActual = 10;

let horaApertura;
let mensaje;

// if( dia === 0 || dia === 6){
//     console.log('Es fin de semana')
//     horaApertura = 9;
// }else{
//     console.log('Día de la semana')
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes( dia )) ? 9 : 11;

// if(horaActual >= horaApertura){
//     mensaje='Está abierto';
// }else{
//     mensaje = 'Está cerrado, hoy abrimos a las' + horaApertura;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : 'Está cerrado, hoy abrimos a las' + horaApertura;

console.log({horaApertura, mensaje})

/// PRO TIPS

const elMayor = (a, b)=> ( a > b ) ? a : b;

const tieneMembresia = (miebro) => (miebro) ? '2$':'10$';


console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loki',
    // ( ()=> 'Nick Fury')()
    elMayor(15,33),
]

console.log(amigosArr);

const nota = 90;
const grado = nota => 95 ? 'A+':
              nota => 90 ? 'A' :  
              nota => 85 ? 'B+':  
              nota => 80 ? 'B' : 'F';  

console.log({nota, grado})