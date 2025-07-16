import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/', // o tu URL de backend
  withCredentials: true,                // 🔑 Necesario para enviar cookies HttpOnly
});

export default api;