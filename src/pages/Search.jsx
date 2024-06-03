// packages
import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// components
import MovieCard from '../components/MovieCard'

// constants
const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
    
  }

  useEffect(() => {

    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryUrl)

  }, [query])

  return (
    <div className='flex justify-center flex-col mt-2'>
      <div className='py-2 px-2'>
        <h2 className='text-5xl text-white justify-center  text-center mb-2'>Resultado para: <span className='text-yellow-900'>{query}</span></h2>
        <div className='text-white grid grid-cols-3 gap-20'>
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Search