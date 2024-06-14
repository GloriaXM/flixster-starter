import './SearchBar.css'
import PropTypes from 'prop-types'


const SearchBar = ({onSearchSubmit, onGoToNowShowingView}) => {

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    //TODO: use the Search Keyword option to perform autocomplete with the search bar
    onSearchSubmit(e.target.querySelector('#search').value);
  }

  const goToNowShowing = (e) => {
    e.preventDefault();
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('go-to-search-button').style.display = 'block';
    document.getElementById('go-to-now-showing').style.display = 'block';
    document.getElementById('load-more-button').style.display = 'block';
    document.getElementById('sort-genre').style.display = 'block';
    document.getElementById('sort-by-trait').style.display = 'block';
    document.getElementById('search').value = '';
    onGoToNowShowingView();
  }

  return (
    <form id="search-bar" className="search-bar" onSubmit={handleSearchSubmit} >
      <button id="go-to-now-showing" onClick={goToNowShowing}> Go to Now Showing</button>
      <input id="search" type="search" aria-label='Search for a movie by title' placeholder='Title...'/>
      <button id="submit">Search</button>
  </form>
  )

}

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onGoToNowShowingView: PropTypes.func.isRequired
}

export default SearchBar
