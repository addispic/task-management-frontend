import React from 'react'
import {Routes,Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'
// side nav bar
import SideBar from './components/SideBar'

// pages
import Dashboard from './pages/Dashboard'
import Workspaces from './pages/Workspaces'
import Teams from './pages/Teams'
import MyTasks from './pages/MyTasks'
// workspaces
import WorkspacesList from './pages/workspaces/WorkspacesList'
import WorkspaceDetail from './pages/workspaces/WorkspaceDetail'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className='max-w-[1000px]x mx-auto h-screen px-1.5 py-1.5'>
            {/* header */}
            <Header />
            <div className='flex gap-x-5 h-[92vh] my-1.5'>
                {/* side bar */}
                <SideBar />
                {/* pages */}
                <div className='flex-1 h-[92vh]'>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}>
                            <Route path='/dashboard' element={<Workspaces />}>
                                <Route index element={<WorkspacesList />}></Route>
                                <Route path='/dashboard/workspace-detail/:workspace_id' element={<WorkspaceDetail />}>
                            </Route>
                        </Route>
                        <Route path='/dashboard/teams' element={<Teams />}></Route>
                        <Route path='/dashboard/my-tasks' element={<MyTasks />}></Route>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App