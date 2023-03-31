import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //fetchUrl here function as a dependence because we're using a variable which is being passed from outside of the block.

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // ATTENTION
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // Attention
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {/* several row posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

/**
 * States is basically the way to write variables in react
 *
 * Asynchronous functions are functions that don't run right away because they make request
 * to third-party services and it take some time to process.
 *
 * .get is basically apending this "fetchUrl" to the actual link
 *
 * @LINE41
 * That line of code works because we created a prop that is set to true,
 * and we put it to add a class "row_posterLarge" if the return of the function
 * were true. Since we are using AND Operator (&&) it will return true because our prop "isLargeRow"
 * is set to true.
 *
 * It works because in JavaScript, true && expression always evaluates to expression
 * and false && expression always evaluates to false . Therefore, if the condition is true
 * the element right after && will appear in the output. If it is false , React will ignore and skip it.
 */
