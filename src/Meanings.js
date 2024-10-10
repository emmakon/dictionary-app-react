import React from "react";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (singleDefinition, index) {
        return (
          <div key={index}>
            <h3>{singleDefinition.partOfSpeech}</h3>
            <p>{singleDefinition.definition}</p>
            <p>{singleDefinition.example}</p>
            <p>{singleDefinition.synonyms}</p>
          </div>
        );
      })}
    </div>
  );
}
