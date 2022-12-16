import React from 'react'
import DahsLayout from '../components/DahsLayout'
import {Outlet} from "react-router-dom"

const Dashboard = () => {
  return (
   <div >
     <DahsLayout >
        {/* <div>Dashboard</div> */}
        <Outlet/>
        
    </DahsLayout>
   </div>
    
  )
}

export default Dashboard