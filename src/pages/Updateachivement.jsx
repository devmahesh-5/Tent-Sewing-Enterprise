import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import services from '../services/config';
import { Achivementform } from '../components/index.js';
function UpdateAchivement() {
    const slug = useParams();
    const [achivement, setAchivement] = useState(null);
    useEffect(() => {
        ; (async () => {
            if (slug) {
                const achivement = await services.getAchivementById(slug.id);
                if (achivement) {
                    setAchivement(achivement.data);
                }
            }
        })();

    }, [slug.id]);

    if (!achivement) {
        return (
            <div> Loading...</div>
        )
    }

    return (
        <Achivementform achivement={achivement} />
    )
}

export default UpdateAchivement
