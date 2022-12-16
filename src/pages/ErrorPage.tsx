import React from 'react'
import {Link , useRouteError} from "react-router-dom";

  
const ErrorPage = () => {
    const error = useRouteError () as any;


  return (
 <>
    <div>
        <h1>Oops! something went wrong</h1>
        <p>
            <strong>
                Error : {error.statusText} {error.status}
            </strong>
         <div>
         <Link to={'/'} className="text-blue-600 underline">Back to home</Link>
         </div>
        </p>
    </div>
 </>
  )
}

export default ErrorPage