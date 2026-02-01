import axios from 'axios';

export class ConfigService {
    async getQrCode() {
        try {
            console.log("qr-code");
            return await axios.get('/api/v1/config/qr-code');
        } catch (error) {
            console.error("Config service error", error);
            throw error;
        }
    }

    async updateQrCode(formData) {
        try {
            return await axios.post('/api/v1/config/qr-code', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true // Ensure cookies are sent
            });
        } catch (error) {
            console.error("Config service error", error);
            throw error;
        }
    }
}

const services = new ConfigService();
export default services;