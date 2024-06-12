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

  const fetchMovies = async (prevMovieList, pages) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
    const data = await response.json();


    setLoadedMovies(prevMovieList.concat(data.results));
    // setLoadedMovies((prevMovieList) => [...prevMovieList, ...data.results] );
  };

  useEffect(() => {
    fetchMovies(loadedMovies, page);
  }, [page]);

  const loadAdditionalPage = () => {
    setPage(page + 1);
    fetchMovies(loadedMovies, page+1);
  }

  const onSubmitSearch = async (searchTerm) => {
    //TODO: Create one method that can make different API calls
    const apiKey = import.meta.env.VITE_API_KEY;
    // const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
    const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${searchTerm}&page=1&api_key=${apiKey}`);
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="App">
      <Header onSearchSubmit={onSubmitSearch}/>
      <MovieList movieList={loadedMovies} onClickLoadMore={loadAdditionalPage} />
      <Footer/>
  </div>
  )

}

export default App
