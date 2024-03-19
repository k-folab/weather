import logo from "./logo.svg";
import "./App.css";
import "./styles/leftsection.css";
import "./styles/rightsection.css";
import Leftsection from "./components/Leftsection";
import Rightsection from "./components/Rightsection";

function App() {
  return (
    <div className="main_div">
      <div>
        <Leftsection />
      </div>
      <div>
        <Rightsection />
      </div>
    </div>
  );
}

export default App;
