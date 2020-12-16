import React, { useState, useEffect } from "react";
import instance from "../../axios";
import axios from "axios";
import "./row.css";
import Trailer from "../Trailer/Trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedTrailer, setSelectedTrailer] = useState("");

  // api call gets list of movies/shows to display on rows
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // when user clicks on image sets the selected videos name as state to search the  youtube api

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else setTrailerUrl(movie.name || movie.title);
  };

  // gets the selected videos name and searchs for trailer on youtube/ logs state to be sent to Trailer.js for rendering
  useEffect(() => {
    if (trailerUrl) {
      const findTrailer = async () => {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              type: "video",
              maxResults: 1,
              key: API_KEY,
              q: `${trailerUrl} new season trailer`,
            },
          }
        );
        setSelectedTrailer(response.data.items[0]);
      };
      findTrailer();
    }
  }, [trailerUrl]);

  // loops through the list of movies to display / handle click selects/updates state to search for trailer
  const renderPosters = movies.map((movie) => {
    return (
      <img
        key={movie.id}
        src={`${base_url}${
          // determines what size poster to display netflix originals has larger image
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
        onClick={() => handleClick(movie)}
      />
    );
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${isLargeRow && "row__posterLarge"}`}>
        {renderPosters}
      </div>
      {/* determines whether or not to display trailer */}
      {trailerUrl && <Trailer playTrailer={selectedTrailer} />}
    </div>
  );
}

export default Row;
