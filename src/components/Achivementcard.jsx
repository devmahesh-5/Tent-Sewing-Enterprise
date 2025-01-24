import React from 'react'
function Achivementcard({image,title}) {
    return (
        <div className='w-full justify-center mb-4'>
                <img src={image} alt={title}
                className='rounded-xl' />

            </div>
    )
}

export default Achivementcard
