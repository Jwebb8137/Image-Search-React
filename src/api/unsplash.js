import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S_5VryjMz5LCbL6097flVlfb80ckUax7SBuVAnF57tg'
    }
})