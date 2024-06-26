// import { useState } from 'react'
import './Header.css'
import SearchBar from './SearchBar'
import Sort from './Sort'
import PropTypes from 'prop-types'

const Header = ({onSearchSubmit, onGoToSearchView, onGoToNowShowingView, onGetNewGenre, onSortByAttribute}) => {

  const showSearchBar = () => {

    document.getElementById('search-bar').style.display = 'block';
    document.getElementById('go-to-search-button').style.display = 'none';
    document.getElementById('load-more-button').style.display = 'none';
    document.getElementById('sort-genre').style.display = 'none';
    document.getElementById('sort-by-trait').style.display = 'none';
    onGoToSearchView();
  }

  return (
    <div className="header">
      <h1> Flixster </h1>
      <div className="filter-bar">
        <button id="go-to-search-button" className="display-now-playing" onClick={showSearchBar}> Go to Search </button>
        <SearchBar onSearchSubmit={onSearchSubmit} onGoToNowShowingView={onGoToNowShowingView}/>
        <Sort onGetNewGenre={onGetNewGenre} onSortByAttribute={onSortByAttribute}/>
      </div>
  </div>
  )
}

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onGoToSearchView: PropTypes.func.isRequired,
  onGoToNowShowingView: PropTypes.func.isRequired,
  onGetNewGenre: PropTypes.func.isRequired,
  onSortByAttribute: PropTypes.func.isRequired,
}

export default Header
