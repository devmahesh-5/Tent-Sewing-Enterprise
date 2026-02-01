import axios from 'axios';

export class AchievementService {
    async createAchievement(formData) {
        try {
            return await axios.post('/api/v1/achivements/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Achievement service error", error);
            throw error;
        }
    }

    async getAllAchivements() {
        try {
            return await axios.get('/api/v1/achivements/all-achivements');
        } catch (error) {
            console.error("Achievement service error", error);
            throw error;
        }
    }

    async getAchievementById(id) {
        try {
            return await axios.get(`/api/v1/achivements/${id}`);
        } catch (error) {
            console.error("Achievement service error", error);
            throw error;
        }
    }

    async updateAchievement(id, formData) {
        try {
            return await axios.patch(`/api/v1/achivements/update-achivement/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Achievement service error", error);
            throw error;
        }
    }

    async deleteAchievement(id) {
        try {
            return await axios.delete(`/api/v1/achivements/${id}`, {
                withCredentials: true
            });
        } catch (error) {
            console.error("Achievement service error", error);
            throw error;
        }
    }
}

const services = new AchievementService();
export default services;
