import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://shopshirt-hub-v2-0.onrender.com/api/',
    timeout: 1000,
  });
