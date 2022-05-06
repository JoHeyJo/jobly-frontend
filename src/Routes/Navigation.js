import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import "./nav.css";

/** links for logged in/ logged out user
 *
 * prop: logout
 *
 * context: currentUser
 *
 */
function Navigation({ logout, updateLocation }) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Nav">
      <div className="nav-left">
        <NavLink
          className={({ isActive }) => (isActive ? "linkActive" : "link")}
          to="/"
        >
          Home
        </NavLink>
      </div>
      {currentUser ? (
        <div className="nav-right">
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/companies"
          >
            Companies
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/jobs"
          >
            Jobs
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/appliedjobs"
          >
            Applied
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/profileform"
          >
            Profile
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/"
            onClick={logout}
          >
            Log Out {currentUser.username}
          </NavLink>
        </div>
      ) : (
        <div className="nav-right">
          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/signup"
          >
            Sign Up
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "linkActive" : "link")}
            to="/signin"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navigation;
