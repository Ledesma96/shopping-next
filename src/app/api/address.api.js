import api from "./api.config";

export const addAddressApi = async (data) => {
  const res = await api.post('/users/add-address', data);
  return res.data;
};

export const updateAddressApi = async(data) => {
    const {_id, ...addressData} = data
    console.log(_id);
    
    const res = await api.put(`/users/update-address/${_id}`, addressData);
    return res.data
}

export const deleteAddressApi = async(addressId) => {
    const res = await api.delete(`/users/delete-address/${addressId}`);
    return res.data
}