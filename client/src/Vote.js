import React from "react";

const Vote = ({ vote, setVote }) => {
  function upVote() {
    setVote(vote + 1);
  }

  function downVote() {
    setVote(vote - 1);
  }

  return (
    <div className="row d-flex justify-content-between">
      <div className="col">
      <i
        className="fa fa-thumbs-up"
        style={{ fontSize: 36, color: "red"}}
        onClick={upVote}
      ></i>

      </div>
      <div className="col">
      <span className="bold" >{vote} votes</span>
      </div>
      <div className="col">
      <i
        className="fa fa-thumbs-down"
        style={{ fontSize: 36, color: "red"}}
        onClick={downVote}
      ></i>
      </div>
    </div>
  );
};

export default Vote;
