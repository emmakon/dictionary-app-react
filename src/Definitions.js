import React from "react";
import Meanings from "./Meanings";

import "./Definitions.css";

export default function Definitions(props) {
  if (props.dictData) {
    return (
      <div className="Definitions">
        <div className="section">
          <h2>{props.dictData.word}</h2>
          <p>{props.dictData.phonetics}</p>
        </div>
        <Meanings meanings={props.dictData.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
