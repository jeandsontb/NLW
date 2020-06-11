import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.18.4:3333' //192.168.18.4
});

export default api;
