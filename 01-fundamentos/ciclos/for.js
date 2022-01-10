

const heroes = ['Batman', 'Superman', 'Wonderwoman','Aquaman']

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('for in');

for (let heroe of heroes){
    console.log(heroe)
    
}