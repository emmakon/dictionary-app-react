import React, { useState } from "react";
import axios from "axios";

import Definitions from "./Definitions";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [dictData, setDictData] = useState(null);
  const [photoData, setPhotoData] = useState(null);

  function handleDictionaryResponse(response) {
    setDictData({
      meanings: response.data.meanings,
      phonetics: response.data.phonetic,
      word: response.data.word,
    });

    setLoaded(true);
  }

  function handlePhotoResponse(response) {
    setPhotoData(response.data.photos);
  }

  function captureInput(event) {
    setKeyword(event.target.value);
  }

  function searchDictionary() {
    const apiKey = "b532784o70betf374c9ae221b35afa9b";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photosApiUrl).then(handlePhotoResponse);
  }

  function search(event) {
    event.preventDefault();
    searchDictionary();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              autoFocus={true}
              onChange={captureInput}
              defaultValue="sunset"
            />
          </form>
          <small>i.e. book, beer, dog, coding</small>
        </section>
        <Definitions dictData={dictData} />
        <Photos photoData={photoData} />
      </div>
    );
  } else {
    searchDictionary();

    return null;
  }
}
