import React from 'react'
import {Routes,Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'
// side nav bar
import SideBar from './components/SideBar'

// pages
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className='max-w-[1000px] mx-auto h-screen px-1.5 py-1.5'>
            {/* header */}
            <Header />
            <div>
                {/* side bar */}
                <SideBar />
                {/* pages */}
                <div>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App