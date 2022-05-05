import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import Navigation from "./Routes/Navigation";
import UserContext from "./Auth/UserContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";


/** Jobyly App
 * 
 * state: user, token
 * 
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [isLoading, setIsLoading] = useState(true)


  /** updates user state on mount, on token change */
  useEffect(
    function decodeToken() {
      async function getUser() {
        if (token) {
          try {
            const { username } = jwt_decode(token);
            JoblyApi.token = token;
            const user = await JoblyApi.getUser(username);
            setIsLoading(false);
            setUser(user);
          } catch (err) {
            setIsLoading(false);
            setUser(null);
            console.log(err);
          }
        }
      }
      getUser();
      },
    [token]
  );

  /** signup user, updates db */
  async function signUp(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  /** sign in user, updates db */
  async function signIn(signInData) {
    let token = await JoblyApi.signIn(signInData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  /** logout user */
  function logout(){
    setUser(null);
    localStorage.removeItem("Token");
    setToken(null);
    setIsLoading(false);
  }

  /** update user state, updates db */
  async function updateUser(data) {
    await JoblyApi.update(user.username, data);
    setUser((user) => ({
      ...user,
      data,
    }));
  }

  /** sets user state applications, updates db  */
  async function setApps(jobId) {
    await JoblyApi.apply(user.username, jobId);

    setUser((user) => ({
      ...user,
      applications: [...user.applications, jobId],
    }));
  }

  if(isLoading) return <h1>loading...</h1>

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            currentUser: user,
            setUser: updateUser,
            setApplications: setApps,
          }}
        >
          <Navigation logout={logout} />
          <RoutesList signUp={signUp} signIn={signIn} isLoading={isLoading} user={user} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
