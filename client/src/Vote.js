import React from "react";

const Vote = ({ vote, setVote }) => {
  function upVote() {
    setVote(vote + 1);
  }

  function downVote() {
    setVote(vote - 1);
  }

  return (
    <div className="down-vote">
      <i
        className="fa fa-thumbs-up"
        style={{ fontSize: 36 }}
        onClick={upVote}
      ></i>
      <span>{vote}</span>
      <i
        className="fa fa-thumbs-down"
        style={{ fontSize: 36 }}
        onClick={downVote}
      ></i>
    </div>
  );
};

export default Vote;
