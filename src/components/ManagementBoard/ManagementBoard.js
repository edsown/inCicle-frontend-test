import React from "react";
import ManagementPost from "../ManagementPost/ManagementPost";
import "./styles.css";

function ManagementBoard() {
  return (
    <div className="outer">
      <h2>Quadros de Gestão à Vista</h2>
      <ManagementPost />
    </div>
  );
}

export default ManagementBoard;
