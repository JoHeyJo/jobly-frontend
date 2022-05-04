import React from "react";
import { Link } from "react-router-dom";

function Navagation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <span style={{ padding: "550px" }} />
      <Link to="/companies"> Companies</Link>
      <span style={{ padding: "10px" }} />

      <Link to="/jobs"> Jobs</Link>
    </div>
  );
}

export default Navagation;
