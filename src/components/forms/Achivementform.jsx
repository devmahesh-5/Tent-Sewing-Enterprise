import React from 'react'
import services from '../../services/config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input, Button} from '../../components/index';

function Achivementform({achivement}) {
    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData)
    const {register, handleSubmit} = useForm();
    const submit = async (data) =>{
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("image", data.image[0]);
        
        if(achivement){
            const updatedAchivement = await services.updateAchivement(achivement._id,formData);
            if(updatedAchivement){
                navigate("/Achivements")
            }
        }else{
            const newAchivement = await services.addAchivements(formData);
        if(newAchivement){
            navigate("/Achivements")
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
                defaultValue={achivement?.title}
                {...register("title", { required: true })}
            />
            
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !achivement })}
            />
            {achivement && (
                <div className="w-full mb-4">
                    <img
                        src={achivement.image}
                        alt={achivement.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Button type="submit" bgColor={achivement ? "bg-green-500" : undefined} className="w-full">
                {achivement ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
    )
}

export default Achivementform
