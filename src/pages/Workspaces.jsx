import React from 'react'
import {Outlet} from 'react-router-dom'

const Workspaces = () => {
  return (
    <div className='relative flex gap-x-5 h-full'>
       {/* left */}
       <div className='w-full h-full'>
        <Outlet />
       </div>
       
    </div>
  )
}

export default Workspaces