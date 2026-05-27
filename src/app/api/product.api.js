import axios from "axios";
import api from './api.config';
export const getProducts = async (params = {}) => {
    try {
        const {
            name,
            limit,
            page,
            category, // Puede ser string o array
            sort,
            minPrice,
            maxPrice,
            tags,     // Puede ser string o array
        } = params;

        // 1. Query Params (en la URL)
        const queryParams = new URLSearchParams({
            ...(name && { name }),
            ...(limit && { limit }),
            ...(page && { page }),
            ...(sort && { sort }),
            ...(minPrice && { minPrice }),
            ...(maxPrice && { maxPrice }),
        }).toString();

        // 2. Body (Arrays de categorías y tags)
        // Nos aseguramos de que siempre se envíen como arrays
        const body = {
            category: Array.isArray(category) ? category : (category ? [category] : []),
            tags: Array.isArray(tags) ? tags : (tags ? [tags] : [])
        };

        // 3. Petición POST
        const response = await axios.post(
            `http://127.0.0.1:3000/api/v1/products/get-all-products?${queryParams}`,
            body
        );

        return response.data;
    } catch (error) {
        console.error("Error en getProducts API:", error);
        throw error;
    }
};

const getProductById = async(id) => {
    try {
        const result = await axios.get(`http://127.0.0.1:3000/api/v1/products/get-product-by-id/${id}`);
        
        return result.data
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (productData, imagesFile) => {
    try {
        const formData = new FormData();

        formData.append('product', JSON.stringify(productData));

        imagesFile.forEach(image => {
            formData.append('images', image);
        });
        

        const response = await api.post(
            '/api/v1/products/add-product',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



export { addProduct, getProductById, getProducts };

