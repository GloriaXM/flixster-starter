// import { useState } from 'react'
import './MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = (props) => {


  return (
    <div className="movie-card">
      <img className="movie-img" src={"https://image.tmdb.org/t/p/w500"+props.backdrop_path}></img>
      <h2>{props.title}</h2>
      <h3>{"Rating: " + props.rating}</h3>

  </div>
  )

}


MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string.isRequired
}
export default MovieCard;
