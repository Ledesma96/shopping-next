import api from "./api.config";

export const getMe = async () => {
    const response = await api.get(`${api}/api/v1/users/me`);
    return response.data;
};

