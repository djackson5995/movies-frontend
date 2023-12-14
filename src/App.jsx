import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import React, { useState } from "react";

function App() {
  const [movies, setmovies] = useState([]);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setmovies(updatedMovies);
  };

  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Genre",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList movies={movies} />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie} />
      </div>
    </div>
  );
}

export default App;
