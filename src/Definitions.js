import React from "react";

import "./Definitions.css";

export default function Definitions(props) {
  console.log(props.dictData);
  return (
    <div className="Definitions">
      <div className="definition-section">
        <h2>{props.dictData.word}</h2>
        <p>{props.dictData.phonetics}</p>
      </div>
      <div className="definition-section">
        <h3>{props.dictData.meanings[0].partOfSpeech}</h3>
        <p>{props.dictData.meanings[0].definition}</p>
        <p>{props.dictData.meanings[0].synonyms}</p>
      </div>
    </div>
  );
}
