import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../components';
import services from '../services/config'; // Implementation needed in next step

function AdminSettings() {
    const { register, handleSubmit, reset } = useForm();
    const [qrCode, setQrCode] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch current QR Code
        services.getQrCode().then((res) => {
            if (res.data.qrCode) {
                setQrCode(res.data.qrCode);
            }
        });
    }, []);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('qrCode', data.qrCode[0]);

            const response = await services.updateQrCode(formData);
            if (response.data) {
                setQrCode(response.data.qrCode);
                setMessage('QR Code updated successfully!');
                reset();
            }
        } catch (error) {
            console.error('Error uploading QR Code:', error);
            setMessage('Failed to update QR Code.');
        }
    };

    return (
        <div className="py-10 px-6 max-w-lg mx-auto bg-white rounded-xl shadow-md border border-gray-200 mt-10">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Settings</h1>

            <div className="mb-8 text-center">
                <h2 className="text-lg font-semibold mb-2">Current QR Code</h2>
                {qrCode ? (
                    <img src={qrCode} alt="Payment QR Code" className="mx-auto w-48 h-48 object-contain border rounded-lg" />
                ) : (
                    <p className="text-gray-500">No QR Code set.</p>
                )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Upload New QR Code:"
                    type="file"
                    accept="image/*"
                    {...register("qrCode", { required: true })}
                />
                <Button type="submit" bgColor="bg-blue-600" className="w-full">
                    Update QR Code
                </Button>
            </form>
            {message && <p className="mt-4 text-center text-sm font-medium text-green-600">{message}</p>}
        </div>
    );
}

export default AdminSettings;
