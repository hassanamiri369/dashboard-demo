import React from 'react'

import {useLoaderData , Link} from "react-router-dom"
import { PostType } from '../typing'

const Posts = () => {
  const {posts} = useLoaderData() as {posts : PostType[]}

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <ul className='p-4'>
          {posts.map((post)=> (
            <li className='border p-4 m-2 shadow-sm cursor-pointer ' key={post.id}>
              <Link to={`/dashboard/posts/${post.id}`}>{post.body}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Posts