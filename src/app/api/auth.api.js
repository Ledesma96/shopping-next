import axios from "axios";
import api from "./api.config";

export const loginApi = async (data) => {
    const response = await api.post(`api/v1/users/login`, data);
    
    return response.data;
};

export const logout = async () => {
    const response = await api.post('api/v1/users/logout');
    
    return response.data
    
}

export const register = async (data) => {
    const response = await api.post(`api/v1/users/create-user`, data);
    return response.data;
};
