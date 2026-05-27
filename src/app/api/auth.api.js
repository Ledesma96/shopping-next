import axios from "axios";
import api from "./api.config";

export const loginApi = async (data) => {
    const response = await api.post(`/users/login`, data);
    
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/users/logout');
    
    return response.data
    
}

export const register = async (data) => {
    const response = await api.post(`/users/create-user`, data);
    return response.data;
};
