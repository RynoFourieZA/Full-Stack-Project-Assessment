import "./App.css";
import response from "./Data/exampleresponse.json";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video response={response} />
      </header>
    </div>
  );
}

export default App;
