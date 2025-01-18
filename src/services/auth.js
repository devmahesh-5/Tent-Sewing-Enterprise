export class AuthService {

    async registerUser({ name, email, password, role }) {
        try {

        } catch (error) {
            console.log("User Registration Error", error);
        }
    }
    async loginUser({ email, password }) {
        try {

        } catch (error) {
            console.log("User Login Error", error);
        }
    }

    async logoutUser() {
        try {

        } catch (error) {
            console.log("User Logout Error", error);
        }
    }

    async getCurrentUser() {
        try {

        } catch (error) {
            console.log("Get User Error", error);
        }
    }
}

const authService = new AuthService();
export default authService;