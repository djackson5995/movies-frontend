import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Genre",
  };

  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo movieObj={selectedMovie} />
    </div>
  );
}

export default App;
