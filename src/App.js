import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5">Dictionary App</h1>
        <Dictionary defaultWord="sunset" />
        <footer>
          Coded by Emma Konrad, open-sourced on Github and hosted on Netflify
        </footer>
      </div>
    </div>
  );
}

export default App;
