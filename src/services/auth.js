import axios from "axios";
export class AuthService {

    async registerUser({ fullName, email, password, role }) {
        try {
            const response = await axios.post('/api/v1/users/register', { fullName, email, password, role });

            if (!response) {
                throw new Error(error);
            }

            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    async loginUser({ email, password }) {
        try {
            const response = await axios.post('/api/v1/users/login', { email, password });

            if (!response) {
                throw new Error(error);
            }

            return response.data;
        } catch (error) {
            throw new Error(error);
            
        }
    }

    async logoutUser() {
        try {
            const response = await axios.post('/api/v1/users/logout');

            if (!response) {
                throw new Error("User Logout Failed");
            }

            return response.data;

        } catch (error) {
            throw new Error(error);
        }
    }

    async updatePassword({ oldPassword, newPassword }) {
        try {
            const response = await axios.post('/api/v1/users/update-password', { oldPassword, newPassword });            

            if (!response) {
                throw new Error(error);
            }

            return response.data;
        } catch (error) {
            throw new Error(error);
            }
    }

    async getCurrentUser() {
        try {
            const response = await axios.get('/api/v1/users/myprofile', {
                withCredentials: true, // Use this to include cookies
            });
    
            if (!response) {
                throw new Error("Get User Failed");
            }
    
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
    
}

const authService = new AuthService();
export default authService;