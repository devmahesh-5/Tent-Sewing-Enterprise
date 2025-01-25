import React,{useEffect,useState} from 'react'
import { Productcard } from '../components'
import services from '../services/config'
function Products() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        services.getAllProducts()
                         .then((response)=>{
                             setProducts(response.data)
                         })
                         .catch((error)=>{
                             console.log(error)
                         })
        
    },[])
    
    
    
    if(!Array.isArray(products) || products.length === 0){
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
                                <Productcard {...product} />
                            </div>
                        ))
                    }
                    </div>
            </div>
        )
    }
}

export default Products
