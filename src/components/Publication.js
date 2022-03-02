import React from "react";

function Publication(props) {
  return (
    <div>
      <div className="outerContainer">
        <img src={props.source}></img>
        <div>
          <h2>{props.title}</h2>
          <p>
            <span>{props.type}</span>
            {props.place} | {props.date} | {props.confirmation}
          </p>
          <p>{props.description}</p>
        </div>
        <button onClick={props.handleDelete}>(DELETE)</button>
      </div>
    </div>
  );
}

export default Publication;
