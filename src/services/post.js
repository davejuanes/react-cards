import axios from 'axios';

const base_url = {
    dev: 'http//localhost:4000',
    prod: 'https://educomser.herokuapp.com'
}

// inicia la var

// peticion al servidor

// una vez se tiene la data del servidor, se establece el valor a la var []

export const createPostReq = async (post) => {
    const form = new FormData();
    for(let key in post) {
        form.append(key, post[key]);
    }

    return await axios.post(base_url.prod+'/post', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}