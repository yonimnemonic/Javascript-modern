

const dia = 3;

switch(dia){
    case 0:
        console.log('Domingo');
        break // si no ponemos el break salta automáticamente a la siguiente condición.
    case 1:
        console.log('Lunes');
        break
    case 2:
        console.log('Martes');
        break
    case 3:
        console.log('Miercoles');
        break
    case 4:
        console.log('Jueves');
        break
    case 5:
        console.log('Viernes');
        break
    case 6:
        console.log('Sábado');
        break
    default:
        console.log('No es ningún dia de la semana!')
}