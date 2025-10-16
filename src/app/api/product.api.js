import axios from "axios";
import api from './api.config';
const getProducts = async (params = {}) => {
    try {
        const {
            name,
            limit,
            page,
            category,
            sort,
            minPrice,
            maxPrice,
            tags,
        } = params;
    
        const queryParams = new URLSearchParams({
            ...(name && { name }),
            ...(limit && { limit }),
            ...(page && { page }),
            ...(category && { category }),
            ...(sort && { sort }),
            ...(minPrice && { minPrice }),
            ...(maxPrice && { maxPrice }),
            ...(tags && { tags }),
        }).toString();
    
        const response = await axios.get(`http://127.0.0.1:3000/api/v1/products/get-all-products?${queryParams}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
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

