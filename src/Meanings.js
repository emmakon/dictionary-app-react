import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (singleDefinition, index) {
        return (
          <div key={index}>
            <h3>{singleDefinition.partOfSpeech}</h3>
            <div>
              <strong>Definition:</strong> {singleDefinition.definition}
              <br />
              <strong>Example:</strong>
              <em>{singleDefinition.example}</em>
              <Synonyms synonyms={singleDefinition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
