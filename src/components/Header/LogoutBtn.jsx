import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../services/auth.js'
import { useNavigate } from 'react-router-dom'
function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logoutUser()
        .then((response)=>{
            dispatch(logout());
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 text-white bg-blue-800 hover:bg-blue-600 rounded-lg'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
