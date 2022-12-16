import React from 'react'
import {useLoaderData} from "react-router-dom"
import { PostType } from '../typing'

const DashStats = () => {

    // get all data
    const {posts} = useLoaderData()  as {posts : PostType[]}
    
    
    return (
        <div>
            <h1>Dashboard Stats</h1>
            <p>there are {posts.length} posts</p>
        </div>
    )
}

export default DashStats
