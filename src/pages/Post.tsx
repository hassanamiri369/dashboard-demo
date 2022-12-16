import React , {useContext , useState,useEffect} from 'react'
import { ITasks, TaskContext } from '../context/PostContext'


import { Link, useLocation, useParams } from 'react-router-dom'

const Post = () => {

    const context = useContext(TaskContext)
  const posts = context.state.tasks;
    
  const [postDetail , setPostDetail] = useState<ITasks | null>(null)
    
    const {id} = useParams()
    console.log(id)


    React.useEffect(()=>{
        const findPost = posts.find(item => item.id === Number(id))
        console.log(findPost)
        if(findPost){
            setPostDetail(findPost)
        }
    } , [Number(id)])

    return (
        <div>
            {postDetail && <div>
                <ul>
                    <li>  <Link className='border' to={"/"}>Go Back</Link></li>
                    <li>Post ID : {postDetail.id}</li>
                    <li>Title : {postDetail.title}</li>
                    <li>Body : {postDetail.body}</li>

                </ul>
                </div>}
        </div>
    )
}

export default Post
