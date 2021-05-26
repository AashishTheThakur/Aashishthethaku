import React from 'react'
import pic from "../pic.png";
const About = () => {
    return (
      
<div className="container">
<div className="container1" id="About">
<h1 className="am">About Me</h1>
        <div class="row">
        
        <div class="col-sm-6" className="left">
        <div class="card-body">
              <img src={pic} alt="..." class="img-thumbnail" className="img"/>
              </div>
        </div>
        <div class="col-sm-6">
        <div class="card-body">
        
        <div >
      <p class="card-text">
      I'm Ashish Thakur and currently pursuing my bachelor degree <br/>information technology from mumbai university.<br/>
      I'm Web App Developer who focuses on writing clean and efficient code.
      I make use of modern technologies with updated frameworks and libraries which contributes to the elegant and beautiful looking Frontend and dynamic and robust Backend.<br/>
     Also a Web Designer with a passion for designing beautiful user interfaces.
<br/><br/><br/><br/>
      </p>
    
    
  </div>
        
              
        </div>
        </div>
      </div>

</div>

</div>



    )
}

export default About
