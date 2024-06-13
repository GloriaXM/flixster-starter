import { useState, useEffect } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import ModalOverlay from './ModalOverlay'

const MovieList = ({movieList, onClickLoadMore}) => {
  const [modalMovieID, setModalMovieID] = useState(0);
  const [modalMovieDetails, setModalMovieDetails] = useState({});

  const handleLoadMoreClick = (event) => {
    event.preventDefault();
    onClickLoadMore();
  };

  const onMovieCardClick = (movieID) => {
    setModalMovieID(movieID);
  }

  const fetchMovieDetails = async (movieID) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=${apiKey}`);
    const data = await response.json();
    // return data;
    setModalMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails(modalMovieID);

  }, [modalMovieID]);

  useEffect(() => {
    console.log("in useEffect " );
    console.log(modalMovieDetails)
    console.log(Object.keys(modalMovieDetails).length);
    if (Object.keys(modalMovieDetails).length > 3 && modalMovieDetails.constructor === Object) {
      document.getElementById('modal-movie-title').textContent = modalMovieDetails.title;
      document.getElementById('modal-runtime').textContent = "Runtime: " + modalMovieDetails.runtime;
      document.getElementById('modal-release-date').textContent = "Release Date: " + modalMovieDetails.release_date;
      document.getElementById('modal-overview').textContent = "Overview: " + modalMovieDetails.overview;
      document.getElementById('modal-genres').textContent = "Genres: " + modalMovieDetails.genres.map(genre => genre.name).join(', ');
      document.getElementById('modal-movie-img').src = "https://image.tmdb.org/t/p/w500" + modalMovieDetails.backdrop_path;
    }
  }, [modalMovieDetails]);

  return (
    <>
      <div className="movie-list">
        {movieList.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} rating={movie.vote_average} poster_path={movie.poster_path} onMovieCardClick={onMovieCardClick}/>
          ))}
        <button id="load-more-button" onClick={handleLoadMoreClick}> Load More</button>
      </div>
      <ModalOverlay modalMovieID={modalMovieID}/>
    </>
  )

}

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
  onClickLoadMore: PropTypes.func.isRequired
}


export default MovieList
