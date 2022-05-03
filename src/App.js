import logo from "./logo.svg";
import "./App.css";
import JoblyApi from "./api";
import Homepage from "./Homepage";
import Companies from "./Companies"

function App() {
  return (
    <div className="App">
      <Homepage />
      <Companies />
    </div>
  );
}

export default App;
