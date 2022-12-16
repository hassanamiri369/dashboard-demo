import {createBrowserRouter} from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard"
import ErrorPage from "../pages/ErrorPage"

export const router = createBrowserRouter([
    {path : "/" ,
    element : 
    <Layout>
      <Home/>
    </Layout> ,
    errorElement : <ErrorPage/>
    },
    {path : "/about" , 
      element : 
      <Layout>
        <About/>
      </Layout>
    },
    {path : "/contact"
    , element : 
    <Layout>
      <Contact/>
    </Layout>
  },
  {path : "/dashboard" ,
    element : <Dashboard/>
  }
  ])