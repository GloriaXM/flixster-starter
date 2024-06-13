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
    //TODO: use the Search Keyword option to perform autocomplete with the search bar
    onSearchSubmit(e.target.querySelector('#search').value);
  }

  const goToNowShowing = (event) => {
    event.preventDefault();
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('go-to-search-button').style.display = 'block';
    document.getElementById('go-to-now-playing').style.display = 'block';
  }

  return (
    <form id="search-bar" className="search-bar" onSubmit={handleSearchSubmit} >
      <button id="go-to-now-playing" onClick={goToNowShowing}> Go to Now Playing</button>
      <input id="search" type="search" aria-label='Search for a movie by title' placeholder='Title...'/>
      <button id="submit">Search</button>
  </form>
  )

}

SearchBar.PropTypes = {
  onSearchSubmit: PropTypes.func.isRequired
}

export default SearchBar
