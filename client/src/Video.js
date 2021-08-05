import React, {useState} from "react";
import ReactPlayer from "react-player"

const Video = ({response}) => {
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
        {response.map(data => {
            return (
                <div className="video-block">
                    <h1>{data.title}</h1>
                    <div className="video-block">
                        <ReactPlayer 
                        className='react-player'
                        url={data.url} />
                    </div>
                    <div className="video-bar">
                        <p>Rating: {data.rating}</p>
                        <button>Delete</button>
                        <button onClick={like}>Up Vote</button> 
                        <p>{upVote} </p>
                        <button onClick={dislike}>Down Vote</button> 
                        <p>{downVote} </p>
                    </div>
                </div>
            )
        })}
        </div>
    )}

export default Video;