import axios from 'axios';

const base_url = {
    dev: 'http//localhost:4000',
    prod: 'https://educomser.herokuapp.com'
}

/* export const getPostsReq = async () => {
    return await axios.get(`${base_url.prod}/all-posts`);
} */

export const getPostsReq = async () => await axios.get(`${base_url.prod}/all-posts`);

export const getPostReq = async (id) => await axios.get(`${base_url.prod}/post/${id}`);

export const createPostReq = async (post) => {
    const form = new FormData();
    for(let key in post) {
        form.append(key, post[key]);
    }
    
    return await axios.post(base_url.prod+'/post', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

export const updatePostReq = async (id, fields) => await axios.put(`${base_url.prod}/post/${id}`, fields);

export const deletePostReq = async (id) => await axios.delete(`${base_url.prod}/post/${id}`);