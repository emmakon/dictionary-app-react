import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          Coded by{" "}
          <a href="https://github.com/emmakon" target="_blank" rel="noreferrer">
            Emma Konrad
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/emmakon/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-app-ek.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netflify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
