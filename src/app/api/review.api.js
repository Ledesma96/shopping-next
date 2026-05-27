import axios from "axios";
const api_url = 'http://localhost:3000/api/v1/';
import api from './api.config'

const getReview = async(id) => {
    try {
        const result = await axios.get(`${api_url}review/get-reviews?productId=${id}`)
        return result.data
    } catch (error) {
        console.log(error.message);
        
        throw error
    }
}

const createReview = async(data) => {
    try {
        const result = await api.post('/review/create-review', data);
        return result.data
    } catch (error) {
        console.log(error);
        
        throw error
    }
}

export { getReview, createReview };

