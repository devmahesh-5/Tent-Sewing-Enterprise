import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import services from '../services/config';
import { Productform } from '../components/index.js';
function EditProduct() {
    const navigate = useNavigate();
    const slug = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
    if(slug){
        const product = services.getProductById(slug);
        if(product){
            setProduct(product);
        }
    }
},[slug,navigate])
    return (
        <Productform product={product} />
    )
}

export default EditProduct
