import React from "react";
import { movies } from "../data";

//console.log(movies);

const renderedMovies = movies.map((movie) => {
  return(
    <div key={movie.name}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres: <br/></p>
      {movie.genres.map((genre) => <li key={genre.name}>{genre}</li> )}
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderedMovies}
    </div>
  );
}

export default Movies;
