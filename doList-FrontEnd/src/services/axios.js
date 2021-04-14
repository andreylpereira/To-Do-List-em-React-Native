/* 
    Arquivo de uma API que serve para consumir api's, 
    também para fazer requisições, 
    além de conectar com o servidor
*/

import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
});

export default api;