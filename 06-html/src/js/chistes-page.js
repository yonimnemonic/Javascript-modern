import { obtenerChiste } from "./http-provider";


const body = document.body;
let btnOtro, olList;

//contador sobre todo recuerda el scope de let!!

let contador = 0;

const crearChistesHTML = () =>{
    const HTML = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">otro chiste</button>
    <ol class="mt-2 list-group" >

    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = HTML;

    body.append(divChistes);
}

//{id, value}
const dibujarChiste = (chiste)=>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `${contador++}-<b>${chiste.id}</b>: ${chiste.value} `;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

//eventos

const eventos = ()=>{
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    btnOtro.addEventListener('click', async()=>{

        btnOtro.disable = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro.disable = false;
    });

}

export const init = ()=>{
    crearChistesHTML();
    eventos();
}