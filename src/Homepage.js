import React from "react";
import { Link } from "react-router-dom";

/**  Landing page */
function Homepage() {
  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convienient place</p>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default Homepage;
