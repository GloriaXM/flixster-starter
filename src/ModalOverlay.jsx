// import { useState } from 'react'
import './ModalOverlay.css'
// import MovieList from './MovieList'

const ModalOverlay = ({modalMovieID}) => {

    const closeModal = () => {
        document.getElementById('modal-overlay').style.display = 'none'
    }

    let trailerEmbedKey = '';
    const getTrailerEmbedKey = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;

        console.log(modalMovieID);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${modalMovieID}/videos?language=en-US&api_key=${apiKey}`);
        const data = await response.json();

        const allVideos = data.results;
        console.log(allVideos);
        trailerEmbedKey = allVideos.find(video => video.type === 'Trailer').key;
        console.log(trailerEmbedKey);
        return trailerEmbedKey;
    }
    getTrailerEmbedKey();
    console.log("trailer key",trailerEmbedKey);
    return (
        <div id="modal-overlay" className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={closeModal}>x</button>
                <h2 id="modal-movie-title">Movie Title</h2>
                <p id="modal-runtime" >Runtime: </p>
                <img id="modal-movie-img" className="modal-movie-img" src="../public/movie.png"/>
                <iframe width="560" height="315"
                    src={`https://www.youtube.com/embed/${trailerEmbedKey}?&autoplay=1`}
                    allowFullScreen></iframe>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/L4DrolmDxmw?&autoplay=1"
                    allowFullScreen></iframe>
                <h3 id="modal-release-date"> Release Date: </h3>
                <p id="modal-overview"> Overview</p>
                <p id="modal-genres"> Genres: </p>
            </div>
        </div>
    )

}

export default ModalOverlay
