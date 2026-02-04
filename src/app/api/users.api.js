import api from "./api.config";

export const getMe = async () => {
    const response = await api.get(`${api}/api/v1/users/me`);
    return response.data;
};

export const getFavorites = async() => {
    try {
        const result = await api.get('api/v1/users/get-favorites');
        return result;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}
