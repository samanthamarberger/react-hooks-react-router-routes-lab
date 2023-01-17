import React from "react";
import { actors } from "../data";

const renderedActors = actors.map((actor) => {
  return (
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <p>Movies: </p>
      {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
    </div>
  )
})

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {renderedActors}
  </div>
  );
}

export default Actors;
