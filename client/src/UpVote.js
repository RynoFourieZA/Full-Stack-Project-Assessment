import React from "react";

const UpVote = ({vote, setVote}) => {
    // console.log(vote);

    function like() {
        setVote(vote + 1);
      }
    return (
        <div className="up-vote">
            <i className="fa fa-thumbs-up" style={{ fontSize:36 }} onClick={like}></i>
        </div>
    )}

export default UpVote;