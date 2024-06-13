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

    switch (fxn) {
      case 'now_playing':
        console.log("searching by Now Playing");
        response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
        break;
      case 'search':
        console.log("Searching by Search");
        response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
        break;
      case 'by_genre':
        console.log("Searching by genre");
        response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en-US&page=1&api_key=${apiKey}`);
        break;
      default:
        console.log("Searching by default");
        response = response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`);

    }

    const data = await response.json();
    setLoadedMovies(prevMovieList.concat(data.results));
  }

  useEffect(() => {
    generalFetchMovies("search", [], 1, searchTerm, '');
  }, [searchTerm]);

  useEffect(() => {
    generalFetchMovies('now_playing', loadedMovies, page, '', '');
  }, [page]);

  useEffect(() => {
    console.log("Genre use effect")
    generalFetchMovies("by_genre", [], 1, '', genre);
  }, [genre]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
    generalFetchMovies('now_playing', loadedMovies, page + 1, '');
  }

  const onSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  const goToSearchView = () => {
    setSearchTerm('');
    setLoadedMovies([]);
  }

  const goToNowShowingView = () => {
    setPage(1);
    generalFetchMovies('now_playing', [], 1, '');
  }

  const getNewGenre = (newGenreName) => {
    setLoadedMovies([]);
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
