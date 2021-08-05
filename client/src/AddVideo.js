import React, { useState } from "react";

const AddVideo = ({response}) {

    let [title, setTitle] = useState("");
    let [url, setUrl] = useState("");
    let [response, setResponse] = useState({});
    console.log(response);



    function addTitle(event) {
        setTitle(event.target.value)
    }

    function addUrl(event) {
        setTitle(event.target.value)
    }

    return (
        <div>
        <input
        value= {title}
        onClick= {addTitle}  
        />
        <input
        value= {url}
        onClick= {addUrl}  
        />

        </div>
    )}

export default AddVideo;