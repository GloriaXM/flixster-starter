// import { useState } from 'react'
import './SideBar.css'
// import MovieList from './MovieList'

const SideBar = ({onSideLikeClick}) => {
  const handleSideLikeClick = (event) => {
    event.stopPropagation();
    onSideLikeClick();
  }


  let clickedSideWatchedBefore = false;
  const handleSideWatchedClick = (event) => {
    event.stopPropagation();
    if (!clickedSideWatchedBefore){
        event.target.style.color = "red";
        event.target.style.borderColor = "white";
    } else {
        event.target.style.color = "white";
    }
    clickedSideWatchedBefore = !clickedSideWatchedBefore;


  }

  return (
    <div className="side-bar">
      <span className="side-like-icon" onClick={handleSideLikeClick}>♥</span>
      <h3 className="side-watched-button" >▶</h3>
    </div>

  )

}

export default SideBar
