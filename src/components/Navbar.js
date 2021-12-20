import React, { Component } from 'react'
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
export class Navbar extends Component {


    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BuzzNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/Business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/General">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Technology">Technology</a>
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
