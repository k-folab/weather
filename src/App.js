import "./App.css";
import "./styles/leftsection.css";
import "./styles/rightsection.css";
import Leftsection from "./components/Leftsection";
import Rightsection from "./components/Rightsection";

function App() {
  return (
    <div className="main_div">
      <div className="section section__1">
        <Leftsection />
      </div>
      <div className="section section__2">
        <Rightsection />
      </div>
    </div>
  );
}

export default App;
