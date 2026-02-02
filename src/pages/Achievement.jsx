import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from '../services/achievement';
import { Button } from "../components";
import { useSelector } from "react-redux";

function Achievement() {
    const slug = useParams();
    const [achievement, setAchievement] = useState([]);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        ; (async () => {
            try {
                const response = await services?.getAchievementById(slug.id);
                
                setAchievement(response.data.data);
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
                        <Link
                            to={`/achivements/update-achivement/${achievement._id}`}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => deleteAchievement(achievement._id)}
                            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold"
                        >
                            Delete
                        </button>
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
