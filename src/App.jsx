import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ueState } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import MovieList from "./component/MovieList";
import MovieSerch from "./component/MovieSerch";
function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const handleSearch = async (data) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${data}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const res = await fetch(url, options);
      const data1 = await res.json();
      setMovieSearch(data1.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-vi&page=1";
      const url1 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-vi&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url, options),
        fetch(url1, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fechMovie();
  }, []);
  return (
    <>
      <div className="bg-black ">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSerch title={"result"} data={movieSearch}></MovieSerch>
        ) : (
          <>
            <MovieList title={"Phim Hot"} data={movie} />
            <MovieList title={"Phim Đề Cử"} data={movieRate} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
