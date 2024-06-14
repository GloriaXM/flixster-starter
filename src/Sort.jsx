import './Sort.css'

const Sort = ({onGetNewGenre, onSortByAttribute}) => {
  //TODO: call https://api.themoviedb.org/3/genre/movie/list to generate possible genre options
  const genreOptions = [
  {"id": 28, "name": "Action"},
  {"id": 12, "name": "Adventure"},
  {"id": 16, "name": "Animation"},
  {"id": 35, "name": "Comedy"},
  {"id": 80, "name": "Crime"},
  {"id": 99, "name": "Documentary"},
  {"id": 18, "name": "Drama"},
  {"id": 10751, "name": "Family"},
  {"id": 14, "name": "Fantasy"},
  {"id": 36, "name": "History"},
  {"id": 27, "name": "Horror"},
  {"id": 10402, "name": "Music"},
  {"id": 9648, "name": "Mystery"},
  {"id": 10749, "name": "Romance"},
  {"id": 878, "name": "Science Fiction"},
  {"id": 10770, "name": "TV Movie"},
  {"id": 53, "name": "Thriller"},
  {"id": 10752, "name": "War"},
  {"id": 37, "name": "Western"}]

  const getNewGenre = (event) => {
    const newGenreName = event.target.value;
    const newGenre = genreOptions.find(genre => genre.name === newGenreName);
    onGetNewGenre(newGenre.id);
  }

  const sortByAttribute = (event) => {
    onSortByAttribute(event.target.value);
  }

  return (
    <>
    <select id="sort-genre" onChange={getNewGenre}>
      <option value="">Select a Genre</option>
      {genreOptions.map(genre => (
          <option key={genre.id} id={genre.id}>{genre.name}</option>
          ))}
    </select>

    <select id="sort-by-trait" onChange={sortByAttribute}>
      <option value="">Sort By</option>
      <option value="popularity.desc">Popularity</option>
      <option value="vote_average.desc">Average Vote</option>
      <option value="title.asc">Title Alphabetical</option>
    </select>
  </>
  )
}

export default Sort
