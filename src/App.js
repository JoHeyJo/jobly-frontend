import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import Navigation from "./Routes/Navigation";
import UserContext from "./Auth/UserContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

function App() {
  const [User, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [applications, setApplications] = useState([])

  useEffect(
    function decodeToken() {
      async function getUser() {
        if (token) {
          try{
            const { username } = jwt_decode(token);
            JoblyApi.token = token;
            const user = await JoblyApi.getUser(username);
            setUser(user);
          } catch (err) {
            setUser(null)
              console.log(err)
          }
        }
      }
      getUser();
    },
    [token]
  );

  async function signUp(signUpData) {
    let token = await JoblyApi.signUp(signUpData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  async function signIn(signInData) {
    let token = await JoblyApi.signIn(signInData);
    setToken(token);
    localStorage.setItem("Token", token);
  }

  function updateUser(){

  }


  function setApps(){

  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser: User, setUser:updateUser, setApplications:setApps, applications }}>
          <Navigation />
          <RoutesList signUp={signUp} signIn={signIn} user={User} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
