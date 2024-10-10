import React from "react";

export default function Photos(props) {
  if (props.photoData) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photoData.map(function (photo, index) {
            if (index < 6) {
              return (
                <div className="col-4 mb-3" key={index}>
                  <a
                    href={photo.url}
                    target="_blank"
                    rel="noreferrer"
                    title={photo.alt}
                  >
                    <img
                      className="img-fluid"
                      src={photo.src.landscape}
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
