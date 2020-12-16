import React from "react";
import "./trailer.css";

const Trailer = ({ playTrailer }) => {
  if (!playTrailer) {
    return <div>Loading ...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${playTrailer.id.videoId}`;

  return <iframe title="videoPlayer" src={videoSrc} />;
};

export default Trailer;
