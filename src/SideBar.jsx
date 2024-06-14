import './SideBar.css'

const SideBar = ({onSideLikeClick}) => {
  const hideNavButtons = () => {
    document.getElementById("sort-genre").style.display = "none";
    document.getElementById("sort-by-trait").style.display = "none";
  }

  const handleSideLikeClick = (event) => {
    event.stopPropagation();
    hideNavButtons();
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
