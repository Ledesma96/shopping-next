import axios from "axios";

const getProducts = async (params = {}) => {
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

    const response = await axios.get(`http://127.0.0.1:3000/?${queryParams}`);
    return response.data;
};

export { getProducts };
