import axios from 'axios';

export class ProductService {
    async createProduct(formData) {
        try {
            return await axios.post('/api/v1/products/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Product service error", error);
            throw error;
        }
    }

    async getAllProducts() {
        try {
            return await axios.get('/api/v1/products/all-products');
        } catch (error) {
            console.error("Product service error", error);
            throw error;
        }
    }

    async getProductById(id) {
        try {
            return await axios.get(`/api/v1/products/${id}`);
        } catch (error) {
            console.error("Product service error", error);
            throw error;
        }
    }

    async updateProduct(id, formData) {
        try {
            return await axios.patch(`/api/v1/products/update-product/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Product service error", error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            return await axios.delete(`/api/v1/products/${id}`, {
                withCredentials: true
            });
        } catch (error) {
            console.error("Product service error", error);
            throw error;
        }
    }
}

const services = new ProductService();
export default services;
