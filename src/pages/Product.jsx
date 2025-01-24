import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../services/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
function Product() {
    const navigate = useNavigate();
    const slug = useParams();
    const [product, setProduct] = useState({});
    const userData = useSelector((state) => state.auth.userData);

    const isOwner = product && userData? product.owner === userData._id : false;
    useEffect(() => {
        if (slug) {
            const product = services.getProductById(slug);
            if (product) {
                setProduct(product);
            }
        }
    },[slug,navigate]);

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
    }

    
    return product ? (
        <div className="py-8">
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-xl"
                />

                {isOwner && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/update-product/${product._id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deleteProduct}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-lg">{product.price}</p>
            </div>
            <div className="browser-css">
                {parse(product.description)}
                </div>
    </div>
    ) : null;
}

export default Product
