const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async ( id )=>{// función que recupera un usuario

    const resp = await fetch(`${urlCRUD}/${id}`);// la respuesta del fetch la guardas en uan const
    const {data} = await resp.json(); // el data tambien y lo devuelves despues ...

    return data;

}
// Crea nuevo usuario
const crearUsuario = async( usuario ) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario),
        headers: {
            'Content-type':'application/json'
        }
    });
    return await resp.json();
}

// actualizar un usuario

const updateUsuario = async( id, usuario ) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario),
        headers: {
            'Content-type':'application/json'
        }
    });
    return await resp.json();
}


const borrarUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
       method: 'DELETE' 
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}


export{
    getUsuario,
    crearUsuario,
    updateUsuario,
    borrarUsuario
}