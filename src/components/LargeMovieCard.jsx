import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const LargeMovieCard = ({movie}) => {
  return (
    <div className='hover:scale-110 transition-all duration-150 ease-in'>
    <img
     style={{ maxWidth: 'none' }} 
      src={IMAGE_BASE_URL + movie.backdrop_path}
      className=" w-[110px] md:w-[300px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer"
    />
    <h2 className='w-[110px] md:w-[300px] text-white mt-2'>{movie?.title}</h2>
  </div>
  )
}

export default LargeMovieCard