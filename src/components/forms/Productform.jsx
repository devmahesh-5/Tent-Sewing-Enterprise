import React from 'react'
import services from '../../services/config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input, Button, Select,RTE } from '../../components/index';

function Productform({product}) {
    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData)
    const {register, handleSubmit,getValues,control} = useForm(
       { defaultValues: {
            title: product?.title || '',
            content: product?.content || '',
            status: product?.status || 'availabel',
        }
    });
    const submit = async (data) =>{
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("status", data.status);
        formData.append("image", data.image[0]);
        
        if(product){
            const updatedProduct = await services.updateProduct(product._id,formData);
            if(updatedProduct){
                navigate("/products")
            }
        }else{
            const newProduct = await services.addProducts(formData);
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
            <RTE label="Description:" name="description" Control={control} defaultValue={product?.description} {...register("description", { required: true })}/>
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
                defaultValue={product?.status}
                {...register("status", { required: true })}
            />
            <Input
                label="Price :"
                type="number"
                className="mb-4"
                defaultValue={product?.price}
                {...register("price", { required: true })}
            />
            <Input
                type="text"
                label="Category"
                className="mb-4"
                defaultValue={product?.category}
                {...register("category", { required: true })}
            />

            <Button type="submit" bgColor={product ? "bg-green-500" : undefined} className="w-full">
                {product ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
    )
}

export default Productform
