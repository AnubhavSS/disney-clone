import React from 'react'
import {useParams} from 'react-router-dom'
const Search = () => {

    let { query } = useParams();
  return (
    <div className='text-white'>Search {query}</div>
  )
}

export default Search