import React from "react";

const DownVote = ({vote, setVote}) => {

  function disLike() {
    setVote(vote - 1);
  }

    return (
        <div className="down-vote">
            <i className="fa fa-thumbs-down" style={{ fontSize:36 }} onClick={disLike}></i>
        </div>
    )}

export default DownVote;