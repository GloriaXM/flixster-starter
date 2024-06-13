import { useState, useEffect } from 'react';
import './App.css'
import MovieList from './MovieList'
import Header from './Header'
import Footer from './Footer'


const App = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [page, setPage] = useState(1); //Page number of next page to load
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [apiFunctionCall, setApiFunctionCall] = useState('')

  const generalFetchMovies = async (fxn, prevMovieList, pages, searchTerm, genre) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let response = {};

    console.log(fxn);
    switch (fxn) {
      case 'now_playing':
        console.log('Searching by now playing');
        response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
        break;
      case 'search':
        console.log('Searching by now playing');
        response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
        break;
      case 'by_genre':
        console.log('Searching by now playing');
        response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en-US&page=${page}&api_key=${apiKey}`);
        break;
      default:
        response = response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`);

    }

    const data = await response.json();
    setLoadedMovies(prevMovieList.concat(data.results));
  }

  useEffect(() => {
    generalFetchMovies("search", [], 1, searchTerm, '');
  }, [searchTerm]);

  useEffect(() => {
    generalFetchMovies(apiFunctionCall, loadedMovies, page, '', genre);
  }, [page]);

  useEffect(() => {
    generalFetchMovies("by_genre", [], 1, '', genre);
  }, [genre]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
    generalFetchMovies(apiFunctionCall, loadedMovies, page + 1, searchTerm, genre);
  }

  const onSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  const goToSearchView = () => {
    setSearchTerm('');
    setApiFunctionCall('search');
    setLoadedMovies([]);
  }

  const goToNowShowingView = () => {
    setPage(1);
    setApiFunctionCall('now_playing');
    generalFetchMovies('now_playing', [], 1, '');
  }

  const getNewGenre = (newGenreName) => {
    setLoadedMovies([]);
    setApiFunctionCall('by_genre');
    setGenre(newGenreName);
  }



  return (
    <div className="App">
      <Header onSearchSubmit={onSubmitSearch}  onGoToSearchView={goToSearchView} onGoToNowShowingView={goToNowShowingView} onGetNewGenre={getNewGenre}/>
      <MovieList movieList={loadedMovies} onClickLoadMore={loadAdditionalPage}/>
      <Footer/>
  </div>
  )

}

export default App
