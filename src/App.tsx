
import { RouterProvider} from "react-router-dom"

// route page 
import {router} from "./router/index"



function App() {
  return (
    <>
      <RouterProvider router={router}/>

     
    </>
  );
}

export default App;
