import {useContext} from 'react'
// import {useLoaderData} from "react-router-dom"
// import { PostType } from '../typing'
import { TaskContext } from '../context/PostContext'

const DashStats = () => {

    // get all data
    // const {posts} = useLoaderData()  as {posts : PostType[]}

    const context = useContext(TaskContext)
    const {state} = context;
    



    
    
    return (
        <div>
            <h1>Dashboard Stats</h1>
            <p>there are <span className='font-bold'>{state.tasks.length}</span> posts</p>
            {/* user list */}
            <div>
                <p>count user : <span  className='font-bold'>{state.userList.length}</span></p>
            </div>
        </div>
    )
}

export default DashStats
