import React from 'react'
import {useLocation , Navigate, useNavigate} from "react-router-dom";
import { TaskContext } from '../context/PostContext';


const Login = () => {
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate()

    const context = React.useContext(TaskContext)


   



    return (
        <div className='  flex flex-col items-center h-96 justify-center'>
            <h1>LOGIN Page</h1>
            <form autoComplete="false" className='w-96 p-4  flex flex-col  '>
                <div className='flex  justify-between p-2'>
                    <label>Name :</label>
                    <input className='p-2 border' type={'text'} placeholder="Name"/>
                </div>
{/* 
                <div className='flex  justify-between p-2'>
                    <label>Email :</label>
                    <input className='p-2 border' type={'email'} placeholder="Email"/>
                </div> */}

                <div className='flex  justify-between p-2'>
                    <label>Password :</label>
                    <input className='p-2 border' type={'password'} placeholder="password"/>
                </div>

                <div>
                    <button className=' px-4 py-1 bg-purple-600 text-white'>Login</button>
                    <button onClick={()=> navigate("/signup")} className=' mx-4 underline'>sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Login
