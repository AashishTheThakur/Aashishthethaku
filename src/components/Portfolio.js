import React from 'react'
import chat from "../propic/chat.png";
import live from "../propic/live.png";
import Quiz from "../propic/Quiz.png";
import video from "../propic/video.png";
import whatsapp from "../propic/whatsapp.png";
const Portfolio = () => {
    return (
        <div id="Portfolio" className="port">
        <h1 class="card-title">Projects</h1>
        <div class="card-deck">
        <div class="card">
    <img class="card-img-top" className="ppic"  src={whatsapp}  alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">whatsapp clone</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <h6 class="card-title">Coming Soon!!</h6>
    </div>
    
  </div>

    <div class="card">
    <img class="card-img-top" className="ppic"  src={live}  alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">cricket live app</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h6 class="card-title">Coming Soon!!</h6>
    </div>
    

  </div>
  <div class="card">
    <img class="card-img-top" className="ppic"  src={Quiz}  alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Quiz app</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <h6 class="card-title">Coming Soon!!</h6>
    </div>
    
  </div>
</div>
<br></br>
  <div class="card-deck">
  <div class="card">
    <img class="card-img-top" className="ppic"  src={chat} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">chat app</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <h6 class="card-title">Coming Soon!!</h6>
    </div>
    
  </div>

  <div class="card">
    <img class="card-img-top" className="ppic"  src={video}  alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">video call app</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <h6 class="card-title">Coming Soon!!</h6>
    </div>
    
  </div>

</div>
</div>
    )
}

export default Portfolio
