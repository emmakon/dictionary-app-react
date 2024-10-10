import React, { useState } from "react";
import axios from "axios";

import Definitions from "./Definitions";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [dictData, setDictData] = useState(null);

  function handleResponse(response) {
    setDictData({
      meanings: response.data.meanings,
      phonetics: response.data.phonetic,
      word: response.data.word,
    });
  }

  function captureInput(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    const apiKey = "b532784o70betf374c9ae221b35afa9b";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={captureInput} />
      </form>
      <Definitions dictData={dictData} />
    </div>
  );
}
