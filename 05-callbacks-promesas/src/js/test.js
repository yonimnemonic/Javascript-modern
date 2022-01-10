
const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciona alergica a las picaduras de arañas'
    },
}


export const testPromise = (id)=>{
    const heroe = heroes[id]
    return new Promise((resolve, reject)=>{

        if (true) {
            resolve(`El heroe es ${heroe.nombre} y su poder es:  ${heroe.poder}`);
        }else{
            reject(`lo siento no se ha encontrado el heroe!`);
        }

    });
};

