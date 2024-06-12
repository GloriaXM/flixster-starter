import { useState, useEffect } from 'react';
import './App.css'
import MovieList from './MovieList'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [page, setPage] = useState(1); //Page number of next page to load
  const baseURL = "https://image.tmdb.org/t/p/w500"

  const fetchMovies = async (pages) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pages}&api_key=${apiKey}`);
    const data = await response.json();


    setLoadedMovies(data.results);
  };

  useEffect(() => {
    fetchMovies(loadedMovies, page);
  }, [page]);



  return (
    <div className="App">
      <Header />
      <MovieList movieList={loadedMovies} />
      <Footer/>
  </div>
  )

}

export default App
