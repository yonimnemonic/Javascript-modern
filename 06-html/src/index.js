// import { init } from "./js/chistes-page";

import { obtenerUsuarios } from "./js/http-provider";
import { init } from "./js/usuarios-page";
import * as CRUD from "./js/crud-provider";
// init();

// obtenerUsuarios().then(console.log);



// CRUD.getUsuario( 1 ).then(console.log);
// CRUD.crearUsuario( {
//     name: 'fernando',
//     job: 'carpintero'
// } ).then(console.log);

// CRUD.updateUsuario( 1, {
//     name:'Agustí',
//     job:'Informático',

// }).then(console.log);

CRUD.borrarUsuario( 2 ).then(console.log)

