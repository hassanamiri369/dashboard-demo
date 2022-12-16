import React from 'react'
import {useLocation, NavLink , Link} from "react-router-dom";

type IProps ={
    children : JSX.Element
}


const Links = [
    {name : "Dashboard" , path : "/dashboard"},
    {name : "Posts" , path : "/dashboard/posts"},
    {name : "Comments" , path : "/dashboard/comments"},
    {name : "users" , path : "/dashboard/users"},
    {name : "Setting" , path : "/dashboard/setting"},
]

const DahsLayout = ({children} : IProps) => {

    // pathname for active link
    const location  = useLocation().pathname;


  return (
   
    <>
        <div className=' mx-auto min-h-screen '>
            {/* header */}
            <div className='flex justify-between border-b px-10 py-4'>
                <Link to={"/"}>My Panel</Link>
                <div className='flex gap-4'>
                    <button>logout</button>
                    <button>Profile</button>
                </div>
            </div>


           <div className='flex min-h-full'>
             {/* sidebar */}
             <div className='p-4 border-r  '>
                <ul className='flex flex-col gap-4 p-4'>
                   {Links.map((link) => (
                    <NavLink 
                    to={link.path} 
                    key={link.name}
                    className={({isActive})=> isActive && location === link.path ? "text-blue-600 underline" : "text-gray-600"}
                    >
                        {link.name}
                    </NavLink>
                   ))}
                </ul>
            </div>


            <div className='p-4'>
                {/* <Outlet/> */}
                {children}
            </div>

           </div>

            {/* elements */}
           
        </div>
    </>
  )
}

export default DahsLayout