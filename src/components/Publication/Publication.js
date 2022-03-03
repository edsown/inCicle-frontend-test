import React from "react";
import "./styles.css";
import { ReactComponent as RoundButton } from "../../images/roundbutton.svg";

function Publication(props) {
  return (
    <div>
      <div className="outerContainer">
        <img
          alt="thumbnail"
          className="publicationImage"
          src={props.source}
        ></img>
        <div className="contentContainer">
          <h2>{props.title}</h2>
          <p>
            <span className="type">{props.type}</span> <span />
            {props.place} | {props.date} |{" "}
            <a className="confirmationLink" onClick={props.openModal}>
              {props.confirmation}
            </a>
          </p>
          <p>{props.description}</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            aspernatur!
          </p>
        </div>
        <button className="deleteButton" onClick={props.handleDelete}>
          <RoundButton />{" "}
        </button>
      </div>
    </div>
  );
}

export default Publication;
