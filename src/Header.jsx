// import { useState } from 'react'
import './Header.css'
import SearchBar from './SearchBar'
import Sort from './Sort'
import PropTypes from 'prop-types'

const Header = ({onSearchSubmit}) => {

  return (
    <div className="header">
      <h1> Flixster </h1>
      <div className="filter-bar">
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
