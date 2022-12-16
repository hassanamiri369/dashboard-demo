import React , {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser, TaskContext } from '../context/PostContext'

const SignUp = () => {


    const context = React.useContext(TaskContext)
    const {addNewUser} = context;


    const [name , setName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [password , setPassword] = React.useState("")

    

    const newUser : IUser = {id : Number(new Date())  , name , email , password}

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(!name){
            return alert("نام را وارد کنید ")
        }
        if(!email){
            return alert("ایمیل را وارد کند ")
        }
        if(!password){
            return alert("پسورد را وارد کنید ")
        }

        addNewUser(newUser)
        navigate("/dashboard")
        setName("")
        setEmail("")
        setPassword("")
    }

    const navigate = useNavigate()
    return (
        <div className='  flex flex-col items-center h-96 justify-center'>
        <h1>SignUp Page</h1>
        <form onSubmit={(e)=> handleSubmit(e)} autoComplete="false" className='w-96 p-4  flex flex-col  '>
            <div className='flex  justify-between p-2'>
                <label>Name :</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} required className='p-2 border' type={'text'} placeholder="Name"/>
            </div>

            <div className='flex  justify-between p-2'>
                <label>Email :</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} required className='p-2 border' type={'email'} placeholder="Email"/>
            </div>

            <div className='flex  justify-between p-2'>
                <label>Password :</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} required className='p-2 border' type={'password'} placeholder="password"/>
            </div>

            <div>
                <button disabled={!name || !email || !password ? true : false} 
                className={` px-4 py-1 ${!name || !email || !password ? "bg-gray-50 text-gray-900" : "bg-purple-600 text-white"} `}>SignUp</button>
                {/* <button className='px-4 py-1 bg-purple-600 text-white'>Sign UP</button> */}
                <button onClick={()=> navigate("/login")} className=' mx-4 underline'>login</button>
            </div>
        </form>
    </div>
    )
}

export default SignUp
