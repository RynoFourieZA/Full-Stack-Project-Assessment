import React, { useState } from "react";
import Title from "./Title";
import UpVote from "./UpVote";
import DownVote from "./DownVote";

const EmbeddedVideo = ({ response }) => {
  let [vote, setVote] = useState(0);

  return (
    <div className="container">
      <div className="row">
        {response.map((data) => {
          return (
            <div className="col-6 col-md-4">
              <Title title={data.title} />
              <div className="video-block">
                <div className="votes">
                  <UpVote vote={vote} setVote={setVote} />
                  <span>{vote}</span>
                  <DownVote vote={vote} setVote={setVote} />
                </div>
                <iframe
                  className="youtube-player"
                  width="962"
                  height="541"
                  src={data.url.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div className="row">
                  <span>Rating: {data.rating}</span>
                  <button className="btn btn-warning">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmbeddedVideo;
