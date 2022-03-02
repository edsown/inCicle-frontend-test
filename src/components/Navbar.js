import React from "react";
import { ReactComponent as IncicleIcon } from "../images/incicle.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <IncicleIcon className="logo" />
      </div>
    </div>
  );
}

export default Navbar;
