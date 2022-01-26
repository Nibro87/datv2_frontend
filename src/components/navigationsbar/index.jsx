import React, { useState,useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auctionlist from "../auctionList";
import CreateAuction from "../createAuction";
import Myboats from "../ownerboats";
import {
    BrowserRouter as Router,
    Switch,   
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
    NavLink
  } from "react-router-dom";

  function Header(){


    return(


<Router>  
<header className='header'>
 


<Navbar className='container nav left-align'>

<li><NavLink  to='/'>Casmag</NavLink></li>
<li><NavLink  to='/Auctions'>Auctions</NavLink></li>
<li><NavLink to='/myboats' >My Boats</NavLink></li>
<li><NavLink to='/Createauctions'>Create Auction</NavLink></li>
<li><NavLink to='/Createguides'>Create Guide</NavLink></li>


<div class=""></div>
<div class="login-container-right">

</div>

</Navbar>

</header>

<Routes>
      <Route exact path="/">
       
      </Route>
    <Route path="/Auctions" element = {<Auctionlist/>} />
      <Route path="/myboats" element = {<Myboats/>}/>
      <Route path="/Createauctions" element = { <CreateAuction/>} />
      <Route path="/Createguides" />
    </Routes>

</Router>



)








}

export default Header