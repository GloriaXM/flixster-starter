// import { useState } from 'react'
import './SideBar.css'
// import MovieList from './MovieList'

const SideBar = ({onGetNewGenre, onSortByAttribute}) => {

  return (
    <div className="side-bar">
      <span className="side-like-icon" >♥</span>
      <h3 className="side-watched-button" >▶</h3>
    </div>

  )

}

export default SideBar
