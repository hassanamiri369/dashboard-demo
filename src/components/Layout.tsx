import React from 'react'
import {Link} from "react-router-dom"

type Props = {
    children : JSX.Element
}


const Layout = ({children} : Props) => {
  return (
    <>
      <nav className='flex justify-center gap-4 border-b py-4 shadow-sm'>
        <Link to={'/'}>Post List</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/dashboard'}>Dashboard</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}

export default Layout