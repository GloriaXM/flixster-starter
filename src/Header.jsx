// import { useState } from 'react'
import './Header.css'
import SearchBar from './SearchBar'
import Sort from './Sort'
import PropTypes from 'prop-types'

const Header = ({onSearchSubmit}) => {

  const showSearchBar = () => {
    document.getElementById('search-bar').style.display = 'block';
    document.getElementById('go-to-search-button').style.display = 'none';
  }

  return (
    <div className="header">
      <h1> Flixster </h1>
      <div className="filter-bar">
        <button id="go-to-search-button" className="display-now-playing" onClick={showSearchBar}> Go to Search </button>
        <SearchBar onSearchSubmit={onSearchSubmit}/>
        <Sort/>
      </div>

  </div>
  )
}

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
}

export default Header
