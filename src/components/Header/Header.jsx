import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import 
function Header() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userData);
    const authStatus = useSelector((state) => state.auth.status);
    const isAdmin = user?.role === "admin";
    const navItems =[
        {
            name:"Home",
            slug : "/",
            active : true
        },
        {
            name : "Products",
            slug : "/products",
            active : true
        },
        {
            name : "Achivements",
            slug : "/achivements",
            active : true
        },
        {
            name : "Add Product",
            slug : "/add-product",
            active : isAdmin
        },
        {
            name : "Add Achivement",
            slug : "/add-achivement",
            active : isAdmin
        }
    ]

    return (
        <header>
            <nav>
                <div>Logo</div>
                <ul className='flex ml-auto'>
                    {
                        navItems.map((item)=>{
                            return  navItems.active? (<li key={item.slug}>
                                    <button onClick={()=>navigate(navItems.slug) }className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                    {navItems.name}
                                </button>
                                </li>
                            ):null
                        })
                    }
                { authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header
