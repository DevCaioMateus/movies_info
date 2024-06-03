// packages
import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

// constants
const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='flex flex-col justify-between gap-2 bg-neutral-800 px-6 py-6 rounded-lg'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} className='rounded-lg' />
      <h2 className='text-3xl text-white'>{movie.title}</h2>
      <p className='text-white flex gap-2 align-middle text-2xl'>
        <FaStar className='mt-0.5' color='#f7d354'/> {movie.vote_average.toFixed(1)}
      </p>
      <div className='flex w-full justify-center'>
          {showLink && <Link to={`movie/${movie.id}`} className=' bg-yellow-500 hover:bg-yellow-600 rounded-md min-w-40 text-neutral-900 text-center font-bold text-xl py-2'>Detalhes</Link>}
      </div>
    </div>
  )
}

export default MovieCard