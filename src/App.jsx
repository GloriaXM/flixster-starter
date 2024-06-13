import { useState, useEffect } from 'react';
import './App.css'
import MovieList from './MovieList'
import Header from './Header'
import Footer from './Footer'


const App = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [page, setPage] = useState(1); //Page number of next page to load
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const [searchTerm, setSearchTerm] = useState('');

  const generalFetchMovies = async (fxn, prevMovieList, pages, searchTerm) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let response = {};

    switch (fxn) {
      case 'now_playing':
        response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
        break;
      case 'search':
        response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
        break;
      default: response = {};

    }

    const data = await response.json();
    setLoadedMovies(prevMovieList.concat(data.results));
  }

  useEffect(() => {
    generalFetchMovies('search', [], 1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    generalFetchMovies('now_playing', loadedMovies, page, '');
  }, [page]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
    generalFetchMovies('now_playing', loadedMovies, page+1, '');
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


  return (
    <div className="App">
      <Header onSearchSubmit={onSubmitSearch}  onGoToSearchView={goToSearchView} onGoToNowShowingView={goToNowShowingView}/>
      <MovieList movieList={loadedMovies} onClickLoadMore={loadAdditionalPage}/>
      <Footer/>
  </div>
  )

}

export default App
