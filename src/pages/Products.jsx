import React,{useEffect,useState} from 'react'
import { Productcard } from '../components'
function Products() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const products = services.getProducts();
        if(products){
        setProducts(products)
        }
    },[])

    if(products.length === 0){
        return (
            <div>No products for now</div>
        )
    }else{
        return (
            <div className='w-full py-8 '>
                    <div className='flex flex-wrap'>
                    {
                        products.map((product)=>(
                            <div className=' p-2 w-1/4' key={product._id}>
                                <productcard {...product} />
                            </div>
                        ))
                    }
                    </div>
            </div>
        )
    }
}

export default Products
