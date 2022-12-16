import React from 'react'
import {useLocation , Navigate} from "react-router-dom";


const Login = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            Login page
        </div>
    )
}

export default Login
