import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <Link to="/">
    <p className="navbar-brand text-white">Ivan Acosta App</p>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">

          <p className="nav-link active" aria-current="page">Home</p>
        </li>
<Link to="/newpost">
        <li className="nav-item">
          <button className="nav-link text-white">Nuevo Post</button>
        </li>
        </Link>

        <Link to="/myposts">
        <li className="nav-item">
          <p className="nav-link text-white">Mis Posts</p>
        </li>

        </Link>

  
      </ul>
    </div>
  </div>
</nav>

    )
}

export default NavBar