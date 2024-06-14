import './MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({id, title, rating, poster_path, onMovieCardClick}) => {

  const onCardClick = (handleLikeClick) => {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal-overlay').scrollIntoView({behavior: 'smooth'});
    onMovieCardClick(id);
  }

  let clickedLikeBefore = false;
  const handleLikeClick = (event) => {
    event.stopPropagation();
    if (!clickedLikeBefore){
        event.target.style.color = "red";
    } else {
        event.target.style.color = "white";
    }
    clickedLikeBefore = !clickedLikeBefore;


  }

  let clickedWatchedBefore = false;
  const handleWatchedClick = (event) => {
    event.stopPropagation();
    if (!clickedWatchedBefore){
      event.target.style.color = "red";
    } else {
      event.target.style.color = "white";
    }
    clickedWatchedBefore = !clickedWatchedBefore;
  }

  return (
    <div className="movie-card" onClick={onCardClick}>
      <div className="card-icon-display">
        <img className="movie-img" src={"https://image.tmdb.org/t/p/w500"+poster_path}></img>
        <div className='card-side-bar'>
          <span className="like-icon" onClick={handleLikeClick}>♥</span>
          <h3 className="watched-button" onClick={handleWatchedClick}>▶</h3>
        </div>
      </div>
      <h2>{title}</h2>
      <h3>{"Rating: " + rating}</h3>


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
