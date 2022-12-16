import React , {useContext } from 'react'
import { TaskContext } from '../context/PostContext'
import { Link } from 'react-router-dom';

const PostList = () => {

  const context = useContext(TaskContext)
  const posts = context.state.tasks;

  // console.log(context.state.tasks)

  return (
    <>
      <div>
        <h1 className='font-bold'>Post List Page</h1>
        <div className='p-4'>
          {posts.length === 0 ? <div>no one any post</div> : 
          <div className='flex flex-wrap justify-center'>
            {posts.map((post)=> (
              <ul key={post.id} className='p-4 shadow-lg border-r m-4 w-80 h-80  flex flex-col justify-between '>
                <div className='overflow-hidden'>
                <li className='font-bold uppercase'>{post.title}</li>
                <li className='overflow-hidden'>{post.body}</li>
                </div>
               <div>
               <Link  to={`/postList/${post.id}`} className='my-3 text-gray-800  px-4 bg-green-300  '>more</Link>
               </div>
              </ul>
            ))}  
          </div>}
        </div>
      </div>
    </>
  )
}

export default PostList