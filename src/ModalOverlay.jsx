// import { useState } from 'react'
import './ModalOverlay.css'
// import MovieList from './MovieList'

const ModalOverlay = () => {

    const closeModal = () => {
        document.getElementById('modal-overlay').style.display = 'none'
    }

    return (
        <div id="modal-overlay" className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={closeModal}>x</button>
                <h2 id="modal-movie-title">Movie Title</h2>
                <p id="modal-runtime" >Runtime: </p>
                <img id="modal-movie-img" className="modal-movie-img" src="../public/movie.png"/>
                <h3 id="modal-release-date"> Release Date: </h3>
                <p id="modal-overview"> Overview</p>
                <p id="modal-genres"> Genres: </p>
            </div>
        </div>
    )

}

export default ModalOverlay
