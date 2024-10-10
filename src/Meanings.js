import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (singleDefinition, index) {
        return (
          <div key={index}>
            <section>
              <h3>{singleDefinition.partOfSpeech}</h3>
              <div>
                <p>{singleDefinition.definition}</p>
                <em>{singleDefinition.example}</em>
                <Synonyms synonyms={singleDefinition.synonyms} />
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
