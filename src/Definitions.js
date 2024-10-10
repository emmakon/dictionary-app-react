import React from "react";
import Meanings from "./Meanings";

import "./Definitions.css";

export default function Definitions(props) {
  if (props.dictData) {
    return (
      <div className="Definitions">
        <div>
          <section>
            <h2>{props.dictData.word}</h2>
            <p className="phonetic">{props.dictData.phonetics}</p>
          </section>
        </div>
        <Meanings meanings={props.dictData.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
