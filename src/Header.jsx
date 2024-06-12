// import { useState } from 'react'
import './Header.css'
import SearchBar from './SearchBar'
import Sort from './Sort'

const Header = () => {

  return (
    <div className="header">
      <h1> Flixster </h1>
      <div className="filter-bar">
        <SearchBar/>
        <Sort/>
      </div>

  </div>
  )

}

export default Header
