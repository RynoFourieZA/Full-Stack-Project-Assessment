import "./App.css";
import response from "./Data/exampleresponse.json";
import EmbeddedVideo from "./EmbeddedVideo";
import AddVideo from "./AddVideo";

function App() {
  return (
    <div className=".container">
      <header className="App-header">
        <AddVideo response={response} />
        <EmbeddedVideo response={response} />
      </header>
    </div>
  );
}

export default App;
