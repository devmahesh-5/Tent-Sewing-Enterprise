import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../services/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Product() {
    const navigate = useNavigate();
    const slug = useParams();
    const [product, setProduct] = useState(null);
    const userData = useSelector((state) => state.auth.userData);

    const isOwner = product && userData ? product.owner === userData.data._id : false;

    useEffect(() => {
        if (slug.id) {
            (async () => {
                try {
                    const response = await services.getProductById(slug.id);
                    setProduct(response.data); // Store the product in state
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            })();
        }
    }, [slug.id]);

    const deleteProduct = async () => {
        try {
            const response = await services.deleteProduct(product._id);
            if (response) {
                navigate("/products");
            }
        } catch (error) {
            console.log("Product deletion Error", error);
            throw new Error("something went wrong while deleting product");
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
                        <Link to={`/products/update-product/${product._id}`}>
                            <Button bgColor="bg-green-600 hover:bg-green-700 text-white" className="px-5 py-2 rounded-md">
                                Edit
                            </Button>
                        </Link>
                        <Button 
                            bgColor="bg-red-600 hover:bg-red-700 text-white" 
                            onClick={deleteProduct} 
                            className="px-5 py-2 rounded-md"
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>

            {/* Title, Price, and Category in Buttons */}
            <div className="w-full flex justify-center space-x-4 mb-8">
                <Button bgColor="bg-green-600 hover:bg-green-700 text-white" className="px-6 py-2 rounded-md">
                    {product.title}
                </Button>
                <Button bgColor="bg-red-600 hover:bg-red-700 text-white" className="px-6 py-2 rounded-md">Rent: RS.
                    {product.price}
                </Button>
                <Button bgColor="bg-blue-600 hover:bg-blue-700 text-white" className="px-6 py-2 rounded-md">Category:
                    {product.category}
                </Button>
            </div>

            {/* Product Description */}
            <div className="text-center prose max-w-none text-gray-700 mb-8">
                {parse(product.description)}
            </div>
        </div>
    );
}

export default Product;
