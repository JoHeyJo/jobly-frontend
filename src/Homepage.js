import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./Auth/UserContext";

/**  Landing page 
 * 
 * context: currentUser
 * 
*/
function Homepage() {

  const { currentUser }  = useContext(UserContext);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place</p>

      {currentUser ? 
      <h3>Welcome back {currentUser.username}</h3> 
      : 
      <>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      </>
    }
    </div>
  );
}

export default Homepage;
