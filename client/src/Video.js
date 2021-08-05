import React from "react";
import ReactPlayer from "react-player"

const Video = ({response}) => {
    return (
        <div className="responsive-video">
        {response.map(data => {
            return (
                <div className="video-block">
                    <h1>{data.title}</h1>
                    <div className="video-block">
                        <ReactPlayer 
                        className='react-player'
                        url={data.url} />
                    </div>
                    <p>Rating: {data.rating}</p>
                    <button>Delete</button>
                </div>
            )
        })}
        </div>
    )}

export default Video;