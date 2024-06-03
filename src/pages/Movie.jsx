// packages
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// icons
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

// components
import MovieCard from '../components/MovieCard'

// constants
const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`
    getMovie(movieUrl)
  },[])

  return (
    <div className='my-[2rem] mx-auto max-w-[600px]'>
      {movie &&  ( <> 
        <MovieCard movie={movie} showLink={false} />
        <p className='text-white mb-2'>
          {movie.tagline}
        </p>
        <div className='text-white'>
          <h3 className='flex mb-2 font-bold text-xl'>
            <BsWallet2 className='mr-2' color='#f7d354'/> Orçamento
          </h3>
          <p className='mb-2'>
            {formatCurrency(movie.budget)}
          </p>
        </div>
        <div className='text-white'>
          <h3 className='flex mb-2 font-bold text-xl'>
            <BsGraphUp className='mr-2' color='#f7d354' /> Receita
          </h3>
          <p className='mb-2'>
            {formatCurrency(movie.revenue)}
          </p>
        </div>
        <div className='text-white'>
          <h3 className='flex mb-2 font-bold text-xl'>
            <BsHourglassSplit className='mr-2' color='#f7d354'/> Duração
          </h3>
          <p className='mb-2'>
            {movie.runtime} minutos
          </p>
        </div>
        <div className='text-white'>
          <h3 className='flex mb-2 font-bold text-xl'>
            <BsFillFileEarmarkTextFill className='mr-2'color='#f7d354'/> Descrição
          </h3>
          <p >
            {movie.overview}
          </p>
        </div>
      </>
      )}
    </div>
  )
}

export default Movie