import React, {useContext} from 'react'
import { TaskContext } from '../context/PostContext'

const Users = () => {

    const context = useContext(TaskContext)
    const {state} = context;
    return (
        <div>
            <h1>Users</h1>
            <div>{state.userList  && <div>{state.userList.map((user)=><div>
                <ul className='p-4 border m-2'>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.password}</li>
                </ul>
            </div>)}</div>}</div>
        </div>
    )
}

export default Users
