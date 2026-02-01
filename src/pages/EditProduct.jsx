import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import services from '../services/product';
import { Productform } from '../components/index.js';
function EditProduct() {
    const slug = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        ; (async () => {
            if (slug) {
                const product = await services.getProductById(slug.id);
                if (product) {
                    console.log(product);
                    setProduct(product.data.data);
                }
            }
        })();

    }, [slug.id]);

    if (!product) {
        return (
            <div> Loading...</div>
        )
    }

    return (
        <Productform product={product} />
    )
}

export default EditProduct
