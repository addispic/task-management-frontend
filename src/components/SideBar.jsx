import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { BsPersonWorkspace } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className='min-w-56 py-5 px-3 bg-neutral-100 rounded-md h-full flex flex-col justify-between'>
      {/* links */}
      <div className='flex-1 flex flex-col'>
        {
          [...Array(3)].map((item,index)=>{
            return (
              <NavLink className={'flex items-center gap-x-3 px-3 py-1.5 bg-neutral-200 rounded-sm mb-3'}>
                <BsPersonWorkspace />
                <span className='text-sm'>Workspace</span>
              </NavLink>
            )
          })
        }
      </div>
      {/* footer */}
      <footer>
      {
        true 
        ?
        <div className='flex flex-col gap-y-3'>
          {/* settings */}
          <NavLink className={'flex px-3 items-center gap-x-1.5 text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-600'}>
            <MdOutlineSettingsSuggest className='text-xl' />
            <span className='text-sm'>Settings</span>
          </NavLink>
          {/* logout */}
          <button className={'flex px-3 items-center gap-x-1.5 text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-600'}>
            <RxExit className='text-xl'/>
            <span className='text-sm'>Logout</span>
          </button>
        </div>
        :
        <div>Logged out</div>
      }
      </footer>
    </div>
  )
}

export default SideBar