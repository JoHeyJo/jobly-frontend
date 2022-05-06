import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import "./Homepage.css";

/**  Landing page
 *
 * context: currentUser
 *
 */
function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>

      {currentUser ? (
        <h3>Welcome back {currentUser.username}</h3>
      ) : (
        <>
          <button className="btn btn-secondary">
            <Link className="linkText" to="/signup">
              Sign Up
            </Link>
          </button>
          <button className="btn btn-secondary">
            <Link className="linkText" to="/signin">
              Sign In
            </Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Homepage;
