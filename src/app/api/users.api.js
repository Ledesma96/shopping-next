import api from "./api.config";

export const getMe = async () => {
    const response = await api.get(`/users/me`);
    return response.data;
};

export const getFavorites = async() => {
    try {
        const result = await api.get('/users/get-favorites');
        return result;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const updateUserApi = async(data) => {
    try {
        const result = await api.put('/users/update-user', data);
        
        return result
    } catch (error) {
        throw error
    }
}
