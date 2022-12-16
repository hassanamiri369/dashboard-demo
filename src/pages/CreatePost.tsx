import React , {useState , useContext } from 'react'
import { ITasks, TaskContext } from '../context/PostContext'


const CreatePost = () => {

  const [title , setTitle] = useState<string>("")
  const [body , setBody] = useState<string>("")

  const context = useContext(TaskContext)
  const {AddTask  ,state , editTask} =context;
  const {currentTask   } = state
  

  React.useEffect(()=>{
    if( currentTask.title || currentTask.body ){
      setTitle(currentTask.title)
      setBody(currentTask.body)
    }else{
      setTitle("")
      setBody("")
    }
  } , [currentTask.id , currentTask])



  const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const newPost : ITasks = {id : Number(new Date()) , title , body}
    if(!title || !body){
      return alert("چیزی تایپ کنید ")
    }
    
    if(currentTask.title || currentTask.body){
      editTask(newPost)
    }else{
      AddTask(newPost)
    }
  }



  
  return (
   <>
    <div className=' w-96 flex flex-col '>
        <h1>Create New Post</h1>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col   ' >
              <div className=' justify-between  m-4 flex flex-col' >
                <label>Title : </label>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} className='border p-2' type={'text' } placeholder="title"/>
              </div>

              <div className=' justify-between  m-4 flex flex-col'>
                <label>Body : </label>
                <textarea value={body} onChange={(e)=> setBody(e.target.value)} className='border p-2' rows={10}  placeholder="body"></textarea>
              </div>
              {currentTask.title ?<button type='submit' className='border w-40 font-bold p-2 bg-yellow-400 text-gray-800'>edit post</button>  
              :   
              <button type='submit' className='border w-40 font-bold p-2 bg-green-400 '>create post</button>
              }
             
              
            </form>
        </div>
    </div>
   </>
  )
}

export default CreatePost