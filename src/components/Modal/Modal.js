import React, { useState, useEffect } from "react";
import "./styles.css";
import data from "../../database/data.json";

function Modal(props) {
  const [invitedPeople, setInvitedPeople] = useState([]);

  useEffect(() => {
    setInvitedPeople(data.data);
  }, []);

  return (
    <div className="modalContainer">
      <div className="modal">
        <button onClick={props.closeFunction}>X</button>
        <h4 className="modalText">Convidados</h4>
      </div>
    </div>
  );
}

export default Modal;
