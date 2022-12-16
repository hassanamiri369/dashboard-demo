import React , {useState} from 'react'
import {useLocation , useNavigate , Navigate} from "react-router-dom";

type IProps = {
    children : JSX.Element 
}

const Protected = ({children} : IProps) => {
    const [isAuth , setIsAuth] = useState<boolean>(true)

    const location = useLocation().pathname;
    // const navigate = useNavigate() as any

    // return isAuth ? children : <Navigate to={`/login/redirect=${location}`}/>
    return isAuth ? children : <Navigate to={'/SignUp'} state={setIsAuth}/>

    // React.useEffect(()=>{
    //     return isAuth ? children : navigate('/login', { state: { isAuth , setIsAuth} }) 
    // } , [navigate])
    
}

export default Protected
