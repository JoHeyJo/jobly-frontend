import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Navagation() {
  return (
    <div className="Nav">
      <div className="nav-left">
      <Link className="link" to="/">Home</Link>
      </div>
      <div className="nav-right">
        <Link className="link" to="/companies"> Companies</Link>
        <Link className="link" to="/jobs"> Jobs</Link>
      </div>
    </div>
  );
}

export default Navagation;
