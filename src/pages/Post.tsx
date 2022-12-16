import React from 'react'
import {useLoaderData} from "react-router-dom"
import { PostType } from '../typing'

const Post = () => {
    const {post} = useLoaderData() as {post : PostType | undefined};

    console.log(post)
    return (
        <div>
            {post ? <div className='p-4'>
                <h2 className='font-bold'>Email : {post.email}</h2>
                <p >Body : {post.body}</p>
                <p>post ID : {post.postId}</p>
            </div> : <div>Loading ...</div>}
        </div>
    )
}

export default Post
