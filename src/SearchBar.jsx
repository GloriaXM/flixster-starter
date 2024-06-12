// import { useState } from 'react'
import './SearchBar.css'
// import MovieList from './MovieList'


const SearchBar = () => {

  return (
    <form className="search-bar">
      <input id="search" type="search" aria-label='Search for a movie by title' placeholder='Title...'/>
      <button id="submit">Search</button>
  </form>
  )

}

export default SearchBar
