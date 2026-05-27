import api from "./api.config";

export const getAllCartToUserApi = async() => {
    const response = await api.get('cart/get-all-user-carts');

    return response.data
}

export const getAcitveCartApi = async() => {
    const response = await api.get('cart/get-active-cart');

    return response.data
}

export const addOrUpdateCartApi = async(product) => {
    const response = await api.post('cart/add-or-update', product);

    return response.data
}

export const deleteCartApi = async(cartId) => {
    const response = await api.delete(`cart/${cartId}`);

    return response.data
}

export const removeItemApi = async(cartId) => {
    const response = await api.delete(`cart/remove-item/${cartId}`)

    return response.data
}