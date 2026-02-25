import api from "./api.config";

export const getMe = async () => {
    const response = await api.get(`api/v1/users/me`);
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

export const updateUserApi = async(data) => {
    try {
        const result = await api.put('api/v1/users/update-user', data);
        
        return result
    } catch (error) {
        throw error
    }
}

export const addAddressApi = async (data) => {
  const res = await api.post('api/v1/users/add-address', data);
  return res.data;
};

export const updateAddressApi = async(data) => {
    const {_id, ...addressData} = data
    console.log(_id);
    
    const res = await api.put(`/api/v1/users/update-address/${_id}`, addressData);
    return res.data
}

export const deleteAddressApi = async(addressId) => {
    const res = await api.delete(`/api/v1/users/delete-address/${addressId}`);
    return res.data
}
