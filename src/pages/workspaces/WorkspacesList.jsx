import React from 'react'
import { NavLink } from 'react-router-dom';

// icons
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { LuCalendarClock } from "react-icons/lu";
import { RiEdit2Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const WorkspacesList = () => {
  return (
    <div>
        {/* header */}
        <header className='flex items-center justify-between px-3 py-1.5 rounded-sm bg-neutral-100 '>
            {/* left */}
            <div className='flex items-center gap-x-2'>
                <h3 className='font-bold text-neutral-400 text-lg'>Workspaces</h3>
                <div className='flex items-center gap-x-1 bg-white px-1.5 py-1 rounded-md border border-neutral-200'>
                    <CiSearch className='text-xl'/>
                    <input className='focus:ring-0 focus:outline-none w-full min-w-52 border-none bg-transparent ' type="text" placeholder='search' />
                </div>
            </div>
            {/* right */}
            <button className='flex items-center gap-x-1 text-sm text-sky-400 transition-colors ease-in-out duration-150 hover:text-sky-600'>
                <AiOutlinePlus />
                <span>new workspaces</span>
            </button>
        </header>
        {/* workspaces list */}
        <div className='h-[85vh] bg-neutral-100 overflow-y-auto mt-2 p-3 grid grid-cols-3 gap-5' id='workspaces-list-container'>
            {
                [...Array(120)].map((item,index)=>{
                    return (
                        <div key={index} className=' bg-white p-3 rounded-sm shadow-md'>
                            {/* header */}
                            <header className='flex items-center justify-between'>
                                {/* left */}
                                <div className='flex items-center gap-x-3'>
                                    {/* project manager */}
                                    <div className='flex items-center gap-x-1'>
                                        <div className='w-[24px] aspect-square rounded-full overflow-hidden'>

                                        <img className='w-full h-full object-cover object-center' src="https://images.alphacoders.com/752/752287.jpg" alt="" />
                                        </div>
                                        <p className='text-sm text-neutral-500'>By Haddis</p>
                                    </div>
                                    {/* status */}
                                    <p className='text-xs py-1 rounded-full px-3.5 text-green-700 bg-green-100'>active</p>
                                    
                                </div>
                                {/* right */}
                                <NavLink to={`/dashboard/workspace-detail/${index}`}>
                                    <TfiMoreAlt className='text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-600'/>
                                </NavLink>
                            </header>
                            {/* workspace */}
                            <h3 className='my-3 font-bold text-neutral-500'>Skylight Technologies</h3>
                            <div className='flex items-center gap-x-3'>
                            {/* starting date */}
                            <p className='flex items-center gap-x-1 text-xs text-sky-500'>
                                <LuCalendarClock className='text-lg'/>
                                <span>started 5 days ago</span>
                            </p>
                            {/* starting date */}
                            <p className='flex items-center gap-x-1 text-xs text-neutral-500'>
                                <LuClock2 className='text-lg'/>
                                <span>3 weeks left</span>
                            </p>
                            </div>
                            {/* footer */}
                            <footer className='mt-3.5 flex items-center justify-between'>
                                {/* left */}
                                <div className='flex items-center'>
                                    {/* teams */}
                                    <div className='w-[20px] z-0 relative aspect-square rounded-full overflow-hidden bg-white'>
                                        <img className='w-full h-full object-center object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
                                    </div>
                                    <div className='w-[20px] z-10 left-[-0.5rem] relative aspect-square rounded-full overflow-hidden bg-red-400'>
                                        <img className='w-full h-full object-center object-cover' src="https://media.istockphoto.com/id/1082483460/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=MmNFcZf6z2WLY7jMBAmtLxo6YNItudiRuzn-z7V3tZk=" alt="" />
                                    </div>
                                    <div className='w-[20px] z-20 left-[-0.75rem] relative aspect-square rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center text-xs font-bold'>
                                        <span>3+</span>
                                    </div>
                                    <span className='ml-[-.25rem] text-sm text-neutral-500'>teams</span>
                                </div>
                                {/* right */}
                                <button className='flex items-center gap-x-1.5 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-sky-700'>
                                    <CiEdit className='text-lg'/>
                                    <span className='text-sm'>edit</span>
                                </button>
                            </footer>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default WorkspacesList