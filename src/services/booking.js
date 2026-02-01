import axios from 'axios';

export class BookingService {
    async createBooking(formData) {
        try {
            return await axios.post('/api/v1/bookings', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Booking service error", error);
            throw error;
        }
    }

    async getUserBookings() {
        try {
            return await axios.get('/api/v1/bookings/my-bookings', {
                withCredentials: true
            });
        } catch (error) {
            console.error("Booking service error", error);
            throw error;
        }
    }
}

const services = new BookingService();
export default services;
