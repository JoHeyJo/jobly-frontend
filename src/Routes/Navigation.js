import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import "./nav.css";

/** links for logged in/ logged out user
 *
 * prop: logout
 *
 * context: currentUser
 *
 */
function Navigation({ logout, updateLocation, location }) {
  const { currentUser } = useContext(UserContext);
  function updateLink(evt) {
    updateLocation(evt.target.innerText);
  }
  const style = {
    fontWeight: "bold",
    color: "black",
  };
  return (
    <div className="Nav">
      <div className="nav-left">
        {location === "Home" ? (
          <Link className="link" style={style} to="/" onClick={updateLink}>
            Home
          </Link>
        ) : (
          <Link className="link" to="/" onClick={updateLink}>
            Home
          </Link>
        )}
      </div>
      {currentUser ? (
        <div className="nav-right">
          {location === "Companies" ? (
            <Link
              className="link"
              style={style}
              to="/companies"
              onClick={updateLink}
            >
              Companies
            </Link>
          ) : (
            <Link className="link" to="/companies" onClick={updateLink}>
              Companies
            </Link>
          )}
          {location === "Jobs" ? (
            <Link
              className="link"
              style={style}
              to="/jobs"
              onClick={updateLink}
            >
              Jobs
            </Link>
          ) : (
            <Link className="link" to="/jobs" onClick={updateLink}>
              Jobs
            </Link>
          )}
          {location === "Applied" ? (
            <Link className="link" style={style} to="/appliedjobs" onClick={updateLink}>
              Applied
            </Link>
          ) : (
            <Link className="link" to="/appliedjobs" onClick={updateLink}>
              Applied
            </Link>
          )}
          {location === "Profile" ? (
            <Link
              className="link"
              style={style}
              to="/profileform"
              onClick={updateLink}
            >
              Profile
            </Link>
          ) : (
            <Link className="link" to="/profileform" onClick={updateLink}>
              Profile
            </Link>
          )}

          <Link className="link" to="/" onClick={logout}>
            Log Out {currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="nav-right">
          {location === "Sign Up" ? (
            <Link
              className="link"
              style={style}
              to="/signup"
              onClick={updateLink}
            >
              Sign Up
            </Link>
          ) : (
            <Link className="link" to="/signup" onClick={updateLink}>
              Sign Up
            </Link>
          )}

          {location === "Sign In" ? (
            <Link
              className="link"
              style={style}
              to="/signin"
              onClick={updateLink}
            >
              Sign In
            </Link>
          ) : (
            <Link className="link" to="/signin" onClick={updateLink}>
              Sign In
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Navigation;
