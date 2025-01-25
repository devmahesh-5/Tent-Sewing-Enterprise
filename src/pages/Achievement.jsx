import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../services/config";
import { Button } from "../components";
import { useSelector } from "react-redux";

function Achievement() {
    const slug = useParams();
    const [achievement, setAchievement] = useState([]);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        ;(async () => {
            try {
                const response = await services.getAchivementById(slug.id);
                setAchievement(response.data);
            } catch (error) {
                console.error("Error fetching achievements:", error);
            }
        })();
    }, []);

    const deleteAchievement = async (id) => {
        try {
            const response = await services.deleteAchivement(id);
            if (response) {
                setAchievement(null);
                navigate("/achivements");
            }
        } catch (error) {
            console.log("Achievement deletion Error", error);
        }
    };

    const isOwner = achievement && userData ? achievement.owner === userData.data._id : false;

     if (!achievement) {
            return <div>Loading...</div>;
        }
    
        return (
            <div className="py-10 px-6 max-w-6xl mx-auto">
                {/* Product Image */}
                <div className="w-full flex justify-center mb-8 relative border rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="object-contain h-96 w-full transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    {isOwner && (
                        <div className="absolute right-8 top-8 flex space-x-4">
                            <Link to={`/achivements/update-achivement/${achievement._id}`}>
                                <Button bgColor="bg-green-600 hover:bg-green-700 text-white" className="px-5 py-2 rounded-md">
                                    Edit
                                </Button>
                            </Link>
                            <Button 
                                bgColor="bg-red-600 hover:bg-red-700 text-white" 
                                onClick={() => deleteAchievement(achievement._id)} 
                                className="px-5 py-2 rounded-md"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
    
                <div className="p-6">
                    <h1 className=" text-center text-3xl font-bold mb-4">{achievement.title}</h1>
                </div>
            </div>
        );
}

export default Achievement;
