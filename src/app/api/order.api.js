import api from "./api.config";

export const getOrdersUserApi = async() => {
    const response = await api.get('/order/get-orders-user');

    return response.data
}

export const getOrderByIdApi = async(orderId) => {
    const response = await api.get(`/order/order-by-id/${orderId}`);

    return response.data
}

export const getSubordersApi = async() => {
    const response = await api.get('/order/get/sub-orders');

    return response.data
}

export const createOrderApi = async(orderData) => {
    const response = await api.post('/order/create-order', orderData);

    return response.data
}