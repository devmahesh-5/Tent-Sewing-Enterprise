export class Services {
    async addProducts({title, description, price, category, status, image}){
        try {
            const response = await axios.post('/api/v1/products/create',{title, description, price, category, status, image});
    
            if (!response) {
                throw new Error("Product Creation Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error("Product Creation Failed");
        }

    }
    async getAllProducts(){
        try {
            const response = await axios.get('/api/v1/products/all-products');
    
            if (!response) {
                throw new Error("Product Creation Failed");
            }
    
            return response.data;
        } catch (error) {
            console.log("Product Creation Error", error);
            throw new Error("Product Creation Failed");
        }
    }
    async getProductByCategory(category){
        try {
            const response = await axios.get(`/api/v1/products/category/${category}`);
    
    if(!response){
        throw new Error("Product fetching Failed");
        
                }
    
                return response.data
        } catch (error) {
            console.log("Product Creation Error", error);
            
        }
    }

    async getProductById(id){
        try {
            const response = await axios.get(`/api/v1/products/${id}`);
    
            if(!response){
                throw new Error("Product fetching Failed");
                }
    
                return response.data
        } catch (error) {
            console.log("Product fetching Error", error);
            throw new Error("something went wrong while fetching product");
            
        }
    }

    async deleteProduct(id){
        try {
            const response = await axios.delete(`/api/v1/products/${id}`);
    
            if(!response){
                throw new Error("Product deletion Failed");
                }
    
                return response.data
        } catch (error) {
            console.log("Product deletion Error", error);
            throw new Error("something went wrong while deleting product");
        }
    }

    async updateProduct(id, {title, description, price, category, status, image}){
        try {
            const response = await axios.post(`/api/v1/products/${id}`, {title, description, price, category, status, image});
    
            if(!response){
                throw new Error("Product Updation Failed");
            }
    
            return response.data
        } catch (error) {
            console.log("Product Updation Error", error);
            throw new Error("something went wrong while updating product");
        }
    }
    async addAchivements(){
        try {
            
        } catch (error) {
            console.log("achivement Creation Error", error);
            throw new Error("something went wrong while creating ac");
        }
    }

    async getAllAchivements(){
        try {
            
        } catch (error) {
            console.log("achivement fetching Error", error);
            throw new Error("something went wrong while fetching achivement");
        }
    }
}

const services=new Services();
export default services