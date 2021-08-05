import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ response }) => {
  let [upVote, setUpVote] = useState(0);
  let [downVote, setDownVote] = useState(0);

  function like() {
    setUpVote(upVote + 1);
  }
  function dislike() {
    setDownVote(downVote + 1);
  }
  return (
    <div className="container">
      {response.map((data) => {
        return (
          <div className="video-block">
            <h1>{data.title}</h1>
            <div className="video-block">
              <ReactPlayer className="react-player" url={data.url} />
            </div>
            <div className="row">
              <span>Rating: {data.rating}</span>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-warning" onClick={like}>
                Up Vote
              </button>
              <span>{upVote} </span>
              <button className="btn btn-primary" onClick={dislike}>
                Down Vote
              </button>
              <span>{downVote} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Video;
