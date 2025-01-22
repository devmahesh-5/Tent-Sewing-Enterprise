import axios from "axios";
export class AuthService {

    async registerUser({ name, email, password, role }) {
        try {
            const response = await axios.post('/api/v1/users/register', { name, email, password, role });

            if (!response) {
                throw new Error("User Registration Failed");
            }

            return response.data;
        } catch (error) {
            console.log("User Registration Error", error);
        }
    }
    async loginUser({ email, password }) {
        try {
            const response = await axios.post('/api/v1/users/login', { email, password });

            if (!response) {
                throw new Error("User Login Failed");
            }

            return response.data;
        } catch (error) {
            console.log("User Login Error", error);
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
            console.log("User Logout Error", error);
        }
    }

    async updatePassword({ oldPassword, newPassword }) {
        try {
            const response = await axios.post('/api/v1/users/update-password', { oldPassword, newPassword });            

            if (!response) {
                throw new Error("Password Update Failed");
            }

            return response.data;
        } catch (error) {
                console.log("Password Update Error", error);
            }
    }

    async getCurrentUser() {
        try {
            const response = await axios.get('/api/v1/users/myprofile');

            if (!response) {
                throw new Error("Get User Failed");
            }

            return response.data;
        } catch (error) {
            console.log("Get User Error", error);
        }
    }
}

const authService = new AuthService();
export default authService;