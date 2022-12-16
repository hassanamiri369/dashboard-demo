import React, { createContext, useReducer, useEffect } from "react"


interface IContextProvider {
  children: JSX.Element | JSX.Element[]    // React.ReactNode
}



export interface ITasks {
  id: number;
  title : string;
  body : string;
}

export interface IUser {
  id : number;
  name : string;
  email : string;
  password : string;
}


interface IState {
  tasks: ITasks[];
  filterTaskState : ITasks[] | [];
  currentTask: any;
  userList : IUser[]
}



type IActionType =
  | { type: "addTask", payload: ITasks }
  | { type: "removeTask", payload: ITasks[] }
  | { type: "updateMode", payload: ITasks[] }
  | {type : "currentTask" , payload : ITasks}

  | {type : "addNewUser" , payload : IUser}

  | { type: "DoingTask", payload: ITasks[] }
  | { type: "DoneTask", payload: ITasks[] }
  | { type: "AllTask", payload: ITasks[] }


interface ITaskContext {
  state: IState;
  dispatch: React.Dispatch<IActionType>
  AddTask: (newTask: ITasks) => void
  removeTask: (id: number) => void

  editTask: (item: ITasks) => void
  editMode :(item :ITasks) => void

  addNewUser : (newUser : IUser) => void
}


export const TaskContext = createContext<ITaskContext>({} as ITaskContext)



const initState = {


  tasks: localStorage.getItem("postState") ? JSON.parse(localStorage.getItem("postState") || "") : [],
  filterTaskState : localStorage.getItem("taskFilter") ? JSON.parse(localStorage.getItem("taskFilter") || "") : [],

  currentTask: {},

  userList : localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList") || "") : [],


}




const reducer = (state: IState, action: IActionType) => {
  switch (action.type) {
    case "addTask":
      return { ...state, tasks: [...state.tasks, action.payload] }

    case "removeTask":
      return { ...state, tasks: action.payload }

    case "currentTask" : 
      return {...state , currentTask : action.payload}


    case "updateMode":
      return { ...state, tasks: action.payload , currentTask : {} }


      // user list state
      case "addNewUser":
        return {...state , userList : [...state.userList , action.payload]}





    case "DoingTask":
      return { ...state, filterTaskState : action.payload}

    case "DoneTask":
      return { ...state, filterTaskState : action.payload}

    case "AllTask":
      return { ...state, filterTaskState : action.payload}
    default:
      return state
  }
}


const TaskContextProvider = ({ children }: IContextProvider) => {

  const [state, dispatch] = useReducer(reducer, initState)



  useEffect(() => {
    localStorage.setItem("postState", JSON.stringify(state.tasks))
  }, [state])


  useEffect(() => {
    localStorage.setItem("taskFilter" , JSON.stringify(state.filterTaskState))
  }, [state.filterTaskState])

  useEffect(() => {
    localStorage.setItem("userList" , JSON.stringify(state.userList))
  }, [state.userList])




  const AddTask = (newTask: ITasks): void => {
    dispatch({ type: "addTask", payload: newTask })
  }

  const removeTask = (id: number): void => {
    const updatedTasks: ITasks[] = state.tasks.filter(item => item.id !== id)
    dispatch({ type: "removeTask", payload: updatedTasks })
  }

  const editMode = (item : ITasks)=>{
    dispatch({type : "currentTask" , payload : item})
  }

  const editTask = (item: ITasks) => {

            const updateTodo = {...state.currentTask , title : item.title , body : item.body }
            const updateTodoIndex = state.tasks.findIndex((t)=> t.id === state.currentTask.id)
            const updateTask = [...state.tasks.slice(0 ,updateTodoIndex) , updateTodo , ...state.tasks.slice(updateTodoIndex + 1)]
            dispatch({type : "updateMode" , payload : updateTask })
  }


    // add new user 
    const addNewUser = (newUser : IUser)=>{
      dispatch({ type : "addNewUser" , payload : newUser})
    }


  return (
    <TaskContext.Provider value={{ state, AddTask, removeTask,  editTask, dispatch , editMode , addNewUser}}>
      {children}
    </TaskContext.Provider>
  )
}



export default TaskContextProvider
















