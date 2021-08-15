import React, { useState } from "react";
import Title from "./Title";
import Vote from "./Vote";
import DeleteButton from "./DeleteButton";

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
                <div className="col-sm " className="votes">
                  <Vote vote={vote} setVote={setVote} />
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
                <DeleteButton rating={data.rating} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmbeddedVideo;
