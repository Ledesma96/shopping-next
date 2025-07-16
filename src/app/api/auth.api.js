import api from "./api.config";

export const login = async (loginDto) => {
    const response = await api.post(`api/v1/users/login`, loginDto);
    console.log('response' , response.data);
    
    return response.data;
};

export const register = async (data) => {
    const response = await api.post(`${api}api/v1/users/register`, data);
    return response.data;
};
