import React from 'react'
import { Link } from 'react-router-dom'
function Achivementcard({_id,image,title}) {
    return (
        <Link to={`/achivements/${_id}`} >
        <div className='w-full justify-center mb-4'>
                <img src={image} alt={title}
                className='rounded-xl' />
            </div>
            <div className="p-6">
          <h2 className=" text-center text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
            </Link>
    )
}

export default Achivementcard
