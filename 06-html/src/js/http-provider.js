//CORS = Cross Origin Resource Sharing

const joqueURL = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async() =>{

        try {
            //1: inicializamos el fetch con la URL -- COMO ES UNA FUNCIÓ ASYNC PONEMOS EL AWAIT  
            const resp = await fetch(joqueURL);
            //2: Verificamos si la respuesta es OK
             if (!resp.ok)  throw 'No se pudo realizar la petición'// si es ok devolvemos un error...
            //3: extraemos el contenido del JSON.
            const {id, value, url} = await resp.json(); 

            return {id, value, url};

            } catch (err) {
                throw err;
        }

}

//obtener usuarios

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    const { data:usuarios } = await resp.json();
    
    return usuarios;
}

//exports

export{
    obtenerChiste,
    obtenerUsuarios
}