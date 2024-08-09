import React from 'react'
import {Outlet} from "react-router-dom"
const UserAuth = () => {
  return (
    <div>
{/* use of outlet -> use for nested routing */}
   <Outlet/>
    </div>
  )
}

export default UserAuth