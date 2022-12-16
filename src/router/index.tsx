import { createBrowserRouter } from "react-router-dom"

import Layout from "../components/Layout"
// import Home from "../pages/PostList"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard"
import ErrorPage from "../pages/ErrorPage"
import Setting from "../pages/Setting"
import Post from "../pages/Post"
import Posts from "../pages/CreatePost"
import Users from "../pages/Users"
import AllPostDashboard from "../pages/AllPostDashboard"
import DashStats from "../pages/DashStats"
import DashError from "../pages/DashError"
import statsLoader from "../loader/StatsLoader"
import postLoader from "../loader/PostLoader"
import Login from "../pages/Login"
import Protected from "../components/Protected"
import PostList from "../pages/PostList"
import CreatePost from "../pages/CreatePost"

export const router = createBrowserRouter([
  {
    path: "/",
    id: "postList",
    element:
      <Layout>
        <PostList />
      </Layout>,
    errorElement: <ErrorPage />
  },
  {
    path: "/postList/:id",
    id: "home",
    element:
      <Layout>
        <Post />
      </Layout>,
  },
  {
    path: "/about",
    id: "about",
    element:
      <Layout>
        <About />
      </Layout>
  },
  {
    path: "/login",
    id: "login",
    element:
      <Layout>
        <Login/>
      </Layout>
  },
  {
    path: "/contact",
    id: "contact"

    , element:
      <Layout>
        <Contact />
      </Layout>
  },
  {
    path: "/dashboard",
    id: "dashboard",
    element: 
      <Protected>
        <Dashboard />
      </Protected>
    ,
    children: [
      {
        errorElement: <DashError />,
        children: [
          { index: true, 
            element: <DashStats />,
            loader : statsLoader,
          },
          { path: "/dashboard/setting", 
          id: "DashboardSetting", 
          element: <Setting /> 
        },
          { path: "/dashboard/createPost",
           id: "DashboardCreatePost", 
           element: <CreatePost /> ,
          //  loader : statsLoader,
          },
          // { path: "/dashboard/posts/:id", 
          // id: "DashboardPost",
          //  element: <Post /> ,
          //  loader : postLoader,
          // },
          { path: "/dashboard/users", 
          id: "DashboardUsers",
           element: <Users /> 
          },
          { path: "/dashboard/AllPostDashboard", 
          id: "DashboardComments",
           element: <AllPostDashboard /> 
          }
        ]
      }
    ]
    

  }
])