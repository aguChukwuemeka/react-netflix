import React from "react";
import { useState, useEffect } from "react";
import instanceAxios from "../api/axios";
import requests from "../api/requests";
import Navbar from "./navbar";
import { apiImageBaseUrl } from "../api/base-urls";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  console.log(apiImageBaseUrl);
  useEffect(() => {
    async function fetchData() {
      const request = await instanceAxios.get(requests.fetchTrending);
      console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, num) {
    return str?.length > num ? str.substring(0, num - 1) + "..." : str;
  }

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url('${apiImageBaseUrl}/${movie?.backdrop_path}')`,
          // backgroundPosition: "center",
          backgroundSize: "cover",
          color: "#eee",
        }}
      >
        <Navbar />
        <div
          style={{
            height: "180px",
            display: "flex",
            alignItems: "center",
          }}
        ></div>
        <div className="container">
          <h2 className="banner__title">
            {movie?.name || movie?.title || movie?.original_title}
          </h2>
          <span className="banner__btn__container">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </span>
          <p className="banner__description">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
        <div className="bottom__fade__bottom"></div>
      </div>
    </React.Fragment>
  );
}
