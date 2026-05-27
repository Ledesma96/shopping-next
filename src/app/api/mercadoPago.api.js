import api from "./api.config";

/**
 * Envía el código de autorización temporal (TG-) al backend de NestJS
 * @param {string} authorizationCode 
 * @returns {Promise<any>}
 */
export const vincularCuentaMercadoPago = async (authorizationCode) => {
  try {
    const response = await api.post('/mercadopago/oauth/vincular', {
      code: authorizationCode,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error al vincular la cuenta en el servidor.';
    throw new Error(errorMessage);
  }
};