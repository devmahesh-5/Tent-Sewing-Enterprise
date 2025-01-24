import React from 'react'
import services from '../../services/config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input, Button, Select,RTE } from '../../components/index';

function Productform({product}) {
    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData)
    const [register, handleSubmit,getValues,control] = useForm(
       { defaultValues: {
            title: product?.title || '',
            content: product?.content || '',
            status: product?.status || 'availabel',
        }
    } )
    const submit = async (data) =>{
        if(product){
            const updatedProduct = await services.updateProduct(product._id,data);
            if(updatedProduct){
                navigate("/products")
            }
        }else{
            const newProduct = await services.addProducts(data);
        if(newProduct){
            navigate("/products")
        }
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                defaultValue={product?.title}
                {...register("title", { required: true })}
            />
            <RTE label="Content :" name="content" Control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !product })}
            />
            {product && (
                <div className="w-full mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["available", "onRent"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
    )
}

export default Productform
