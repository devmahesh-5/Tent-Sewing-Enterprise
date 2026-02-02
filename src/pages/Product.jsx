import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productService from "../services/product";
import configService from "../services/config";
import bookingService from "../services/booking";
import { Button, Input } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function Product() {
    const navigate = useNavigate();
    const slug = useParams();
    const [product, setProduct] = useState(null);
    const userData = useSelector((state) => state.auth.userData);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [qrCode, setQrCode] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingMessage, setBookingMessage] = useState("");

    const isOwner = product && userData ? product.owner === userData.data._id : false;

    useEffect(() => {
        if (slug.id) {
            (async () => {
                try {
                    const response = await productService.getProductById(slug.id);
                    console.log(response);
                    setProduct(response.data.data);
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            })();
        }
        // Fetch QR Code
        configService.getQrCode().then((res) => {
            console.log(res);
            if (res.data.data.qrCode) setQrCode(res.data.data.qrCode);
        });
    }, [slug.id]);

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    useEffect(() => {
        if (startDate && endDate && product) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 0) {
                setTotalPrice(diffDays * product.price);
            } else {
                setTotalPrice(0);
            }
        }
    }, [startDate, endDate, product]);

    const deleteProduct = async () => {
        try {
            const response = await productService.deleteProduct(product._id);
            if (response) {
                navigate("/products");
            }
        } catch (error) {
            console.log("Product deletion Error", error);
        }
    };

    const onBookingSubmit = async (data) => {
        if (!totalPrice || totalPrice <= 0) {
            setBookingMessage("Please select valid dates");
            return;
        }

        setBookingMessage("Processing booking...");
        try {
            const formData = new FormData();
            formData.append("product", product._id); // Send the product ID
            formData.append("startDate", data.startDate);
            formData.append("endDate", data.endDate);
            formData.append("totalPrice", totalPrice.toString()); // Convert to string
            formData.append("paymentProof", data.paymentProof[0]);

            console.log("Booking data:", {
                product: product._id,
                startDate: data.startDate,
                endDate: data.endDate,
                totalPrice: totalPrice
            });

            const response = await bookingService.createBooking(formData);
            console.log("Booking response:", response);

            setBookingMessage("Booking successful! Pending admin confirmation.");
            setTimeout(() => {
                navigate("/products");
            }, 2000);
        } catch (error) {
            console.error("Booking error:", error);
            setBookingMessage(error.response?.data?.message || "Booking failed. Please try again.");
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-10 px-6 max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="w-full flex justify-center mb-8 relative border rounded-2xl overflow-hidden shadow-lg">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-96 w-full transition-transform duration-500 ease-in-out hover:scale-105"
                />
                {isOwner && (
                    <div className="absolute right-8 top-8 flex space-x-4">
                        <Link
                            to={`/products/update-product/${product._id}`}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={deleteProduct}
                            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>

            {/* Title, Price, and Category in Buttons */}
            <div className="w-full flex justify-center space-x-4 mb-8">
                <Button bgColor="bg-green-600 hover:bg-green-700 text-white" className="px-6 py-2 rounded-md">
                    {product.title}
                </Button>
                <Button bgColor="bg-red-600 hover:bg-red-700 text-white" className="px-6 py-2 rounded-md">Rent: RS.
                    {product.price} / day
                </Button>
                <Button bgColor="bg-blue-600 hover:bg-blue-700 text-white" className="px-6 py-2 rounded-md">Category:
                    {product.category}
                </Button>
            </div>

            {/* Product Description */}
            <div className="text-center prose max-w-none text-gray-700 mb-8 border-b pb-8">
                {product.description && typeof product.description === 'string' ? parse(product.description) : <p>{product.description || 'No description available'}</p>}
            </div>

            {/* Booking Form */}
            {!isOwner && (
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Book This Item</h2>

                    {qrCode && (
                        <div className="mb-6 text-center">
                            <p className="mb-2 font-medium">Scan QR to Pay:</p>
                            <img src={qrCode} alt="Payment QR" className="mx-auto w-40 h-40 object-contain border rounded" />
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onBookingSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Start Date"
                                type="date"
                                {...register("startDate", { required: true })}
                            />
                            <Input
                                label="End Date"
                                type="date"
                                {...register("endDate", { required: true })}
                            />
                        </div>

                        {totalPrice > 0 && (
                            <div className="text-center py-2 bg-blue-50 rounded">
                                <span className="font-bold text-lg">Total Price: RS. {totalPrice}</span>
                            </div>
                        )}

                        <Input
                            label="Upload Payment Proof"
                            type="file"
                            accept="image/*"
                            {...register("paymentProof", { required: true })}
                        />

                        <Button type="submit" bgColor="bg-blue-600 hover:bg-blue-700" className="w-full text-lg">
                            Confirm Booking
                        </Button>
                    </form>
                    {bookingMessage && (
                        <p className={`mt-4 text-center font-medium ${bookingMessage.includes("successful") || bookingMessage.includes("Pending")
                            ? "text-green-600"
                            : bookingMessage.includes("Processing")
                                ? "text-blue-600"
                                : "text-red-500"
                            }`}>
                            {bookingMessage}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Product;
