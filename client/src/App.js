import "./App.css";
import response from "./Data/exampleresponse.json";
import Video from "./Video";
import AddVideo from "./AddVideo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video response={response} />
        <AddVideo response={response}/>
      </header>
    </div>
  );
}

export default App;
