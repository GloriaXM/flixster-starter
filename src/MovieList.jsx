// import { useState, useEffect } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'

const MovieList = ({movieList, onClickLoadMore}) => {
  const handleLoadMoreClick = (event) => {
    event.preventDefault();
    onClickLoadMore();
  };

  return (
    <div className="movie-list">
      {movieList.map(movie => (
          <MovieCard key={movie.id} title={movie.title} rating={movie.vote_average} backdrop_path={movie.backdrop_path}/>
          ))}
    <button id="load-more-button" onClick={handleLoadMoreClick}> Load More</button>
  </div>
  )

}

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
  onClickLoadMore: PropTypes.func.isRequired
}


export default MovieList
