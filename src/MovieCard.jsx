import './MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({id, title, rating, poster_path, onMovieCardClick, onHandleLikeClick}) => {

  const onCardClick = (handleLikeClick) => {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal-overlay').scrollIntoView({behavior: 'smooth'});
    onMovieCardClick(id);
  }

  let clickedLikeBefore = false;
  const handleLikeClick = (event) => {
    event.stopPropagation();

    let simplifiedMovieObject = {
      "id": id,
      "title" : title,
      "vote_average": rating,
      "poster_path": poster_path,
    }
    if (!clickedWatchedBefore){
      event.target.style.color = "red";
      onHandleLikeClick(simplifiedMovieObject, true);
    } else {
      event.target.style.color = "white";
      onHandleLikeClick(simplifiedMovieObject, false);
    }
    clickedWatchedBefore = !clickedWatchedBefore;

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

  //TODO: add logic to handle incomplete movie results
  return (
    <div className="movie-card" onClick={onCardClick}>
      <div className="card-icon-display">
        <img className="movie-img" src={"https://image.tmdb.org/t/p/w500"+poster_path} onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src="../public/movie.png";
        }}></img>
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
