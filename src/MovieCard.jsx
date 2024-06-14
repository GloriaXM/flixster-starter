// import { useState } from 'react'
import './MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({id, title, rating, poster_path, onMovieCardClick}) => {

  const onCardClick = () => {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal-overlay').scrollIntoView({behavior: 'smooth'});
    onMovieCardClick(id);
  }

  return (
    <div className="movie-card" onClick={onCardClick}>
      <img className="movie-img" src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
      <h2>{title}</h2>
      <div className='approval-bar'>
        <span className="like-icon">&#9829</span>
        <h3>{"Rating: " + rating}</h3>
      </div>

  </div>
  )

}


MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  onMovieCardClick: PropTypes.func.isRequired
}
export default MovieCard;
