import React, { useState, useEffect } from "react";
import instanceAxios from "../api/axios"; // Once the exported modules is default it can be called any name at the imported module
import { apiImageBaseUrl } from "../api/base-urls";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instanceAxios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  const opts = {
    height: "380",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleClick(movie) {
    // console.log(movie?.name || movie?.title || movie?.original_title);
    if (trailerUrl) {
      setTrailerUrl();
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(`object : ${url}`);
          // https://www.youtube.com/watch?v=XtMThy9QkqU&banana=5
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h3 className="text-white">{title}</h3>
          <div className="row__posters">
            {movies.map((movie) => (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${apiImageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </div>
  );
}
