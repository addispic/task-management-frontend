import React, {useState, useEffect} from "react";
import { NavLink , useLocation} from 'react-router-dom'

// icons
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { MdLogin } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SiMicrosoftteams } from "react-icons/si";
import { GoTasklist } from "react-icons/go";

const SideBar = () => {

  // states
  // local states
  // dashboard links
  const [dashboardMainLinks,setDashboardMainLinks] = useState({
    links: [
      {
        text: "Workspaces",
        icon: GoProjectSymlink,
        path: "/dashboard"
      },
      {
        text: "Teams",
        icon: SiMicrosoftteams,
        path: "/dashboard/teams"
      },
      {
        text: "My Tasks",
        icon: GoTasklist,
        path: "/dashboard/my-tasks"
      },
    ],
    selected: ""
  })
  // current location
  const [currentLocation,setCurrentLocation] = useState("Workspaces")

  // hooks
  // location
  const pathname = useLocation().pathname 
  console.log(pathname)

  // effects
  // path checker
  useEffect(()=>{
    if(pathname === "/dashboard"){
      setCurrentLocation("Workspaces")
    }else if(pathname === "/dashboard/teams"){
      setCurrentLocation("Teams")
    }else if(pathname === "/dashboard/my-tasks"){
      setCurrentLocation("My Tasks")
    }
  },[pathname])

  return (
    <div className='min-w-56 py-5 px-3 bg-neutral-100 rounded-md h-full flex flex-col justify-between'>
      {/* links */}
      <div className='flex-1 flex flex-col'>
        {
          dashboardMainLinks.links.map((linkItem,index)=>{
            return (
              <NavLink to={linkItem.path} key={linkItem.text} className={`flex items-center transition-colors ease-in-out duration-150 gap-x-3 px-3 py-1.5 rounded-sm mb-3 ${currentLocation === linkItem.text ? "bg-sky-200 border border-b-transparent" : "bg-neutral-200 border-b border-transparent hover:border-sky-600 hover:bg-sky-100 "}`}>
                <linkItem.icon className={`${currentLocation === linkItem.text ? "text-sky-600 " : ""}`}/>
                <span className='text-sm'>{linkItem.text}</span>
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
        <div>
          {/* login */}
          <NavLink className={'flex px-3 items-center gap-x-1.5 text-neutral-400 transition-colors ease-in-out duration-150 hover:text-sky-600'}>
            <MdLogin className='text-xl' />
            <span className='text-sm'>Login</span>
          </NavLink>
        </div>
      }
      </footer>
    </div>
  )
}

export default SideBar