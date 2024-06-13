import { useState, useEffect } from 'react';
import './App.css'
import MovieList from './MovieList'
import Header from './Header'
import Footer from './Footer'
import ModalOverlay from './ModalOverlay'


const App = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [page, setPage] = useState(1); //Page number of next page to load
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (prevMovieList, pages) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
    const data = await response.json();


    setLoadedMovies(prevMovieList.concat(data.results));
  };

  useEffect(() => {
    loadSearchedMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies(loadedMovies, page);
  }, [page]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
    fetchMovies(loadedMovies, page+1);
  }

  const onSubmitSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  const loadSearchedMovies = async (searchTerm) => {
    //TODO: Create one method that can make different API calls
    const apiKey = import.meta.env.VITE_API_KEY;

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`);
    const data = await response.json();

    setLoadedMovies(data.results);
  }

  const goToSearchView = () => {
    setSearchTerm('');
    setLoadedMovies([]);
  }

  const goToNowShowingView = () => {
    setPage(1);
    fetchMovies([], 1);
  }


  return (
    <div className="App">
      <Header onSearchSubmit={onSubmitSearch}  onGoToSearchView={goToSearchView} onGoToNowShowingView={goToNowShowingView}/>
      <MovieList movieList={loadedMovies} onClickLoadMore={loadAdditionalPage}/>
      <ModalOverlay />
      <Footer/>
  </div>
  )

}

export default App
