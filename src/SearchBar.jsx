import { useState } from 'react'
import './SearchBar.css'
import PropTypes from 'prop-types'


const SearchBar = ({onSearchSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setSearchTerm(e.target.querySelector('#search').value);
    console.log(e.target.querySelector('#search').value);
    //TODO: figure out how to call onSearchSubmit
    onSearchSubmit(searchTerm);
  }

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit} >
      <input id="search" type="search" aria-label='Search for a movie by title' placeholder='Title...'/>
      <button id="submit">Search</button>
  </form>
  )

}

SearchBar.PropTypes - {
  onSearchSubmit: PropTypes.func.isRequired
}

export default SearchBar
