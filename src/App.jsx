import { useState, useEffect } from 'react';
import './App.css'
import MovieList from './MovieList'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'

const App = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [page, setPage] = useState(1); //Page number of next page to load
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [apiFunctionCall, setApiFunctionCall] = useState('now_playing');
  const [sortAttribute, setSortAttribute] = useState('');
  let favoritedList = [];

  const generalFetchMovies = async (fxn, prevMovieList) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let response = {};
    let url = '';

    switch (fxn) {
      case 'now_playing':
        response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${apiKey}`);
        break;
      case 'search':
        response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
        break;
      case 'by_genre':
        response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en-US&page=${page}&api_key=${apiKey}`);
        break;
      case 'sort_by_attribute':
        if (genre === ''){
          url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=${sortAttribute}&api_key=${apiKey}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${genre}&language=en-US&page=${page}&sort_by=${sortAttribute}&api_key=${apiKey}`;
        }
        response = await fetch(url);
        break;
      default:
        response = response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&${page}=1&api_key=${apiKey}`);
    }

    const data = await response.json();
    setLoadedMovies(prevMovieList.concat(data.results));
  }

  useEffect(() => {
    generalFetchMovies(apiFunctionCall, loadedMovies, page, searchTerm, genre, sortAttribute);
  }, [searchTerm, page, genre, sortAttribute]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
  }

  const onSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setApiFunctionCall('search');
    setLoadedMovies([]);
    setPage(1);
  }

  const goToSearchView = () => {
    setSearchTerm('');
    setApiFunctionCall('search');
    setLoadedMovies([]);
  }

  const goToNowShowingView = () => {
    setPage(1);
    setLoadedMovies([]);
    setApiFunctionCall('now_playing');
    generalFetchMovies('now_playing', [], 1, '', '', '');
  }

  const getNewGenre = (newGenreName) => {
    setLoadedMovies([]);
    setApiFunctionCall('by_genre');
    setGenre(newGenreName);
    setPage(1);
  }

  const sortByAttribute = (sortAttribute) => {
    setLoadedMovies([]);
    setApiFunctionCall('sort_by_attribute');
    setSortAttribute(sortAttribute);
    setPage(1);
  }

  const handleSideLikeClick = (event) => {
    setLoadedMovies(favoritedList);
    setSearchTerm('');
    setApiFunctionCall('');
    setPage(1);
  }

  const appendFavoriteMovie = (simplifiedMovieObject, appending) => {
    //TODO: Add favorites state to access and search on every render to maintain favorite state over renders
    if (appending) {
      favoritedList.push(simplifiedMovieObject);
    } else {
      favoritedList = favoritedList.filter((movie, index) => {movie.id !== simplifiedMovieObject.id});
    }
  }

  return (
    <div className="App">
      <Header onSearchSubmit={onSubmitSearch}  onGoToSearchView={goToSearchView} onGoToNowShowingView={goToNowShowingView}
      onGetNewGenre={getNewGenre} onSortByAttribute={sortByAttribute}/>
      <MovieList movieList={loadedMovies} onClickLoadMore={loadAdditionalPage} appendFavoriteMovie={appendFavoriteMovie}/>
      <SideBar onSideLikeClick={handleSideLikeClick}/>
      <Footer/>
  </div>
  )

}

export default App
