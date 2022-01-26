import React, { useState,useEffect } from "react"
import { Button } from 'react-bootstrap';
import facade from "./loginFacade.jsx";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../navigationsbar/index.jsx";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    <div className="col-md-12">
    <div className = "card card-container">
      <h2>Login</h2>
      <form class="form-signin row" onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" type="password" id="password"  />
        <Button variant="primary" onClick={performLogin}>Login</Button>
        
        
      </form>
      </div>
    </div>
      
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { facade.fetchData().then(data=> setDataFromServer(data.msg));}, [])

 
 
  return (
   
  
    <Header/>
    

  )
 
}
 
function Login() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => {facade.logout()
    setLoggedIn(false)} 
  
    const login = (user, pass) => {facade.login(user,pass)
    .then(res =>setLoggedIn(true));} 
 
  return (
    <nav className="logg">
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
       {/*<button onClick={logout}>Logout</button>*/}
        </div>)}
    </nav>
  )
 
}
export default Login;