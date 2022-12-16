import React, { useContext } from 'react'
import { ITasks, TaskContext } from '../context/PostContext'
import { Link , Navigate, useNavigate } from 'react-router-dom';


const AllPostDashboard = () => {

    const context = useContext(TaskContext)
    const posts = context.state.tasks;
    const {editMode , removeTask} = context;

    const navigate = useNavigate()

    console.log(context.state.currentTask)
   
    
    const handelClick = (post : ITasks)=>{
        editMode(post)
        navigate('/dashboard/createPost')
    }
    

    return (
        <>
            <div>
                <h1 className='font-bold'>Post List Page</h1>
                <div className='p-4'>
                    {posts.length === 0 ? <div>no one any post</div> :
                        <div className='flex flex-wrap justify-center'>
                            {posts.map((post) => (
                                <ul key={post.id} className='p-4 shadow-lg border-r m-4 w-96 h-min  flex flex-col justify-between '>
                                    <div className='flex flex-col  p-5'>
                                        <button onClick={()=>removeTask(post.id)} className=' p-1 text-white border bg-red-600'>delete post</button>
                                        <button className=' my-2 p-1 border bg-green-800 text-white' onClick={()=> handelClick(post)}>Edit post</button>
                                    </div>
                                    <div className='overflow-hidden'>
                                        <li className='font-bold uppercase'>{post.title}</li>
                                        <li className='overflow-hidden'>{post.body}</li>
                                    </div>

                                </ul>
                            ))}
                        </div>}
                </div>
            </div>
        </>
    )
}

export default AllPostDashboard
