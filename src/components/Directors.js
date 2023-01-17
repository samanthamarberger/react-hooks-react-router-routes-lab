import React from "react";
import { directors } from "../data";

//console.log(directors);

const renderedDirectors = directors.map((director) => {
  return (
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      <p>Movies: </p>
      {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
    </div>
  )
})

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {renderedDirectors}
  </div>
  );
}

export default Directors;
