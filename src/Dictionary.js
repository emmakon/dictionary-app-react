import React, { useState } from "react";
import axios from "axios";

import Definitions from "./Definitions";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [loaded, setLoaded] = useState(false);
  const [dictData, setDictData] = useState({});

  function handleResponse(response) {
    console.log(response.data.meanings);
    setDictData({
      meanings: response.data.meanings,
      phonetics: response.data.phonetic,
      word: response.data.word,
    });
    setLoaded(true);
  }

  function getDictionaryData() {
    const apiKey = "b532784o70betf374c9ae221b35afa9b";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function captureInput(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    getDictionaryData();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={captureInput} />
        </form>
        <Definitions dictData={dictData} />
      </div>
    );
  } else {
    getDictionaryData();
    return null;
  }
}
