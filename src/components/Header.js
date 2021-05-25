import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className ="header-wraper" >
          <div className="main-info" id="Home">
          <br/> <br/> 
              <h1>Welcome to my world</h1>
              <br/> 
              <h3>hey There, I'm</h3>
              <h2>Ashish Thakur</h2>
              
              <Typed
              className="Typed-text"
              strings={["web developer","Freelencer","content creator","Public Speaker","Indian"]}
              typeSpeed={40}
              backSpeed={60}
              loop
              />
              <a href="#Contact" className="btn-main-offer">contact me</a>
          </div>  
        </div>
    )
}

export default Header
