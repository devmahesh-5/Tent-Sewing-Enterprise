import axios from "axios";
export class Services {
    async addProducts(formData){
        try {
            
            const response = await axios.post('/api/v1/products/create', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
            }});
    
            if (!response) {
                throw new Error("Product Creation Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error(error);
        }

    }
    async getAllProducts(){
        try {
            const response = await axios.get('/api/v1/products/all-products');
    
            if (!response) {
                throw new Error("Product fetching Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getProductByCategory(category){
        try {
            const response = await axios.get(`/api/v1/products/category/${category}`);
    
    if(!response){
        throw new Error("Product fetching Failed");
        
                }
                console.log(response.data);
                
                return response.data
                
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProductById(_id){
        try {
            const response = await axios.get(`/api/v1/products/${_id}`,{
                headers : {
                    "Content-Type" : "application/json"
                }
            });
    
            if(!response){
                throw new Error("Product fetching Failed");
                }
    
                return response.data
        } catch (error) {
            throw new Error(error);
            
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

    async updateProduct(id, formData){
        try {
            const response = await axios.patch(`/api/v1/products/update-product/${id}`, formData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            });
    
            if(!response){
                throw new Error("Product Updation Failed");
            }
    
            return response.data
        } catch (error) {
            
            throw new Error(error);
        }
    }
    async addAchivements(formData){
        try {
            const response = await axios.post('/api/v1/achivements/create',
                formData,
                {   
                    withCredentials: true,
                    headers : {
                    "Content-Type" : "multipart/form-data"
                }
            }
            );
    
            if (!response) {
                throw new Error("Achivement Creation Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllAchivements(){
        try {
            const response = await axios.get('/api/v1/achivements/all-achivements');
    
            if (!response) {
                throw new Error("Achivement fetching Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getAchivementById(_id){
        try {
            const response = await axios.get(`/api/v1/achivements/${_id}`,{
                headers : {
                    "Content-Type" : "application/json"
                }
            });
    
            if(!response){
                throw new Error("Achivement fetching Failed");
                }
    
                return response.data
        } catch (error) {
            throw new Error(error);
            
        }
    }

    async deleteAchivement(id){
        try {
            const response = await axios.delete(`/api/v1/achivements/${id}`);
    
            if(!response){
                throw new Error("Achivement deletion Failed");
                }
    
                return response.data
        } catch (error) {
            throw new Error(error);
        }
    }

     async updateAchivement (id, formData) {
        try {
          const response = await axios.patch(`/api/v1/achivements/update-achivement/${id}`, formData);
    
          if (!response) {
            throw new Error("Achivement Updation Failed");
          }
    
          return response.data;
        } catch (error) {
          throw new Error(error);
        }
      };
}

const services=new Services();
export default services