import React from "react"
import logo from "../logo.jpeg";
//raect fonts import//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
      <div className="navf">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color:"yellow"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Portfolio">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">contact</a>
      </li>
      
    </ul>
   
  </div>
  </div>
</nav>
</div>
    )
}

export default Navbar
