import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext  from "../Auth/UserContext"
import "./nav.css" 

function Navigation() {

  const { currentUser } = useContext(UserContext)

  return (
    <div className="Nav">
      <div className="nav-left">
      <Link className="link" to="/">Home</Link>
      </div>
      {currentUser 
      ? 
      <div className="nav-right">
        <Link className="link" to="/companies"> Companies</Link>
        <Link className="link" to="/jobs"> Jobs</Link>
        <Link className="link" to="/profileform"> Profile</Link>
      </div>
      :
      <div className="nav-right">
        <Link className="link" to="/signup">Sign Up</Link>
        <Link className="link" to="/signin">Sign In</Link>
      </div>
    }
    </div>
  );
}

export default Navigation;
