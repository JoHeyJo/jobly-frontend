import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import Navagation from "./Routes/Navagation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navagation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
