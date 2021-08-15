import React, { useState } from "react";
import data from "../src/Data/exampleresponse.json";

let titleEl = document.getElementById("title");
let urlEl = document.getElementById("url");

const AddVideo = () => {
//   let [titleEl, setTitleEl] = useState();
//   let [urlEl, setUrlEl] = useState("");
  let [data, setData] = useState({});

//   function addTitle(event) {
//     console.log(setTitle(event.target.value));
//   }

//   function addUrl(event) {
//     console.log(setUrl(event.target.value));
//   }

  function addList() {
    //   console.log(`${titleEl.value} ${urlEl.value}`);
      console.log(setData(data.concat({
        "id": 523523,
        "title": `${titleEl.value}`,
        "url": `${urlEl.value}`,
        "rating": 23
      })))
  }

  return (
    <div>
      <input 
      id="title" 
        type="text" 
        placeholder="Enter a title"
        />
      <input  
        id="url"
        type="text"
        placeholder="Enter a url"/>
      <button onClick={addList}>Add Video</button>
    </div>
  );
};

export default AddVideo;
