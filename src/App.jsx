// packages
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-neutral-900 w-full min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
