
import {createBrowserRouter , RouterProvider} from "react-router-dom"

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {path : "/" ,
  element : <Home/>
  },
  {path : "/about" , 
    element : <About/>
  },
  {path : "/contact"
  , element : <Contact/>
},
{path : "/dashboard" ,
  element : <Dashboard/>
}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>

     
    </>
  );
}

export default App;
