import React, { useState, useEffect } from "react";
import instance from "../../axios";
import requests from "../../requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  // fetchs specific list of videos and randomly selects a video to display at top of app

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__button">
          <button>Play Trailer</button>
          <button>My List</button>
        </div>
        <h6>{movie.overview}</h6>
      </div>
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Banner;
