import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import Navagation from "./Routes/Navagation";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

function App() {
  const [User, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("Token"));

  useEffect(
    function decodeToken() {
      async function getUser() {
        if (token) {
          const { username } = jwt_decode(token);
          JoblyApi.token = token;
          const user = await JoblyApi.getUser(username);
          setUser(user);
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

  return (
    <div className="App">
      <BrowserRouter>
        <Navagation />
        <RoutesList signUp={signUp} signIn={signIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
