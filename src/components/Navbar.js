import React, { Component } from 'react'

import {
  
  Link,
 
} from "react-router-dom";

export class Navbar extends Component {


    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BuzzNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"  style={{ padding:"2px"}}>
        
        <li className="nav-item" style={{ padding:"12px 45px"}} >
          <Link className="nav-Link active" aria-current="page" to="/" style={{ textDecoration: 'none' , color: '#FFF'}}>Home</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/About" style={{ textDecoration: 'none', color: '#FFF'}}>About</Link>
        </li>
        
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/Business" style={{ textDecoration: 'none', color: '#FFF' }} >Business</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/Entertainment" style={{ textDecoration: 'none', color: '#FFF' }} s>Entertainment</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/General" style={{ textDecoration: 'none' , color: '#FFF'}} >General</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/Health" style={{ textDecoration: 'none', color: '#FFF' }} >Health</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/Science" style={{ textDecoration: 'none', color: '#FFF' }} >Science</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px 45px"}}>
          <Link className="nav-Link" to="/Sports" style={{ textDecoration: 'none', color: '#FFF' }} >Sports</Link>
        </li>
        <li className="nav-item" style={{ padding:"12px  45px"}}>
          <Link className="nav-Link" to="/Technology" style={{ textDecoration: 'none', color: '#FFF' }} >Technology</Link>
        </li>
        
    
      </ul>
      
    </div>
  </div>
</nav>

            </div>
        )
    }
}

export default Navbar
