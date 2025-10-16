import api from "./api.config";

export const login = async (data) => {
    const response = await api.post(`api/v1/users/login`, data);
    console.log(response);
    
    return response.data;
};

export const register = async (data) => {
    const response = await api.post(`api/v1/users/create-user`, data);
    return response.data;
};
