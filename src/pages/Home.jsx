// packages
import React from 'react'
import { useState, useEffect } from 'react'

// componentes
import MovieCard from '../components/MovieCard'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const getTopRatedMovies = async (url) => {
    
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)

  }

  useEffect(() => {

    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className='flex justify-center flex-col mt-2'>
      <div className='py-2 px-2'>
        <h2 className='text-5xl text-white justify-center  text-center mb-2'>Melhores filmes:</h2>
        <div className='text-white grid grid-cols-3 gap-20'>
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Home