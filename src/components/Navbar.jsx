// packages
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav id="navbar" className='flex justify-between align-middle py-2 px-3 bg-neutral-800'>
      <h2>
        <Link to="/" className='text-yellow-400 text-3xl font-extrabold font-sans hover:text-yellow-600 flex flex-row'>
          <BiCameraMovie className='mr-2 mt-0.5' />Movies Info
        </Link>
      </h2>
      <form 
      onSubmit={handleSubmit}
      className='justify-start flex px-1 py-1'>
        <input 
        type='text'
        placeholder='Busque um filme' 
        className='text-sm px-1 py-1 mr-2 rounded-sm'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button type='submit' className='bg-yellow-400 hover:bg-yellow-600 px-1 py-1 transition rounded-sm'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar