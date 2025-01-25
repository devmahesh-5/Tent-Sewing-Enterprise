import React,{useEffect,useState} from 'react'
import { Achivementcard } from '../components'
import services from '../services/config'
function Achivements() {
    const [achivements,setAchivements] = useState([])
    useEffect(()=>{
        services.getAllAchivements()
                         .then((response)=>{
                             setAchivements(response.data)
                         })
                         .catch((error)=>{
                             console.log(error)
                         })
        
    },[])
    
    
    
    if(!Array.isArray(achivements) || achivements.length === 0){
        return (
            <div>No Achivements for now</div>
        )
    }else{
        
        return (
            <div className='w-full py-8 '>
                    <div className='flex flex-wrap'>
                    {
                        achivements.map((achivement)=>(
                            <div className=' p-2 w-1/4' key={achivement._id}>
                                <Achivementcard {...achivement} />
                            </div>
                        ))
                    }
                    </div>
            </div>
        )
    }
}

export default Achivements

