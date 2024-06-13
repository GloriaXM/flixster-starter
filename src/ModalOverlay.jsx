// import { useState } from 'react'
import './ModalOverlay.css'
// import MovieList from './MovieList'

const ModalOverlay = () => {

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <button className="modal-close-button" >x</button>
            <h2>Movie Title</h2>
            <img className="movie-img" src="../public/movie.png"/>
            <h3> Release Date: </h3>
            <p> Overview</p>
            <p> Genres: </p>
        </div>
  </div>
  )

}

export default ModalOverlay
