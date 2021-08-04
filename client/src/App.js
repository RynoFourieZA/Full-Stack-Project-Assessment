import "./App.css";
import response from "./Data/exampleresponse.json";
import VideoTitle from "./VideoTitle";
import EmbeddedVideo from "./EmbeddedVideo";
import VideoVote from "./VideoVotes";
import RemoveButton from "./RemoveButton";

function App() {
  console.log(response);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
        <VideoTitle />
        <EmbeddedVideo />
        <VideoVote />
        <RemoveButton />
      </header>
    </div>
  );
}

export default App;
