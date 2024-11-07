import React from 'react'
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-[92vh] flex gap-x-5'>
      <div className='w-[70%]'>
      <Outlet />
      </div>
      {/* right side */}
      <div className='w-[30%] bg-green-100 p-5 rounded-md'>hello World</div>
    </div>
  )
}

export default Dashboard