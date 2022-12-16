import React, { createContext, useReducer, useEffect } from "react"


interface IContextProvider {
  children: JSX.Element | JSX.Element[]    // React.ReactNode
}



export interface ITasks {
  id: number;
  title : string;
  body : string;
}

interface IState {
  tasks: ITasks[];
  filterTaskState : ITasks[] | [];
  currentTask: any
}



type IActionType =
  | { type: "addTask", payload: ITasks }
  // | { type: "toggleTodo", payload: ITasks }
  | { type: "removeTask", payload: ITasks[] }
  // | { type: "completeTask", payload: ITasks[] }
  | { type: "updateMode", payload: ITasks[] }
  | { type: "DoingTask", payload: ITasks[] }
  | { type: "DoneTask", payload: ITasks[] }
  | { type: "AllTask", payload: ITasks[] }
  | {type : "currentTask" , payload : ITasks}


interface ITaskContext {
  state: IState;
  dispatch: React.Dispatch<IActionType>
  AddTask: (newTask: ITasks) => void
  removeTask: (id: number) => void
  // completeTask: (item: ITasks, value: string) => void
  editTask: (item: ITasks) => void
  editMode :(item :ITasks) => void
}
export const TaskContext = createContext<ITaskContext>({} as ITaskContext)



const initState = {


  tasks: localStorage.getItem("postState") ? JSON.parse(localStorage.getItem("postState") || "") : [],
  filterTaskState : localStorage.getItem("taskFilter") ? JSON.parse(localStorage.getItem("taskFilter") || "") : [],

  currentTask: {}
}




const reducer = (state: IState, action: IActionType) => {
  switch (action.type) {
    case "addTask":
      return { ...state, tasks: [...state.tasks, action.payload] }

    case "removeTask":
      return { ...state, tasks: action.payload }


    // case "completeTask":
    //   return { ...state, tasks: action.payload }
    case "currentTask" : 
      return {...state , currentTask : action.payload}


    case "updateMode":
      return { ...state, tasks: action.payload , currentTask : {} }

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

  return (
    <TaskContext.Provider value={{ state, AddTask, removeTask,  editTask, dispatch , editMode}}>
      {children}
    </TaskContext.Provider>
  )
}



export default TaskContextProvider
















