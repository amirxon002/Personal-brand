import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import LeftNav from '../Left nav/LeftNav';
import "./Demonstration.css"
import DemonstrationBrand from "./../images/DemonstrationBrand.webp"
import branding from "./../images/branding.png"

function Demonstration() {
  return (
    <div className='life-c'>
      <LeftNav />
      <div className="text d-text">

        <h1> #2: Build Something to <b style={{ color: "red" }}> Demonstrate </b> Your Brand</h1>
        <div className="p">

          <p>Now you know who you are and who you're marketing to. <br />
            How do you share that with everyone else? The answer is content.</p> <br />
          <p>Content is how we demonstrate authority, build trust, and stay in
            touch with online audiences. You're going to use content to build and
            expand your personal brand on social media accounts. </p> <br />
          <p>Remember that the focus here is on your personal brand. Your content must be
            consistent with your brand. It needs to be genuine, consistent, and manageable
            so you can produce it without burning out. </p> <br />
          <p>Here are the absolute basics to include in your personal branding content strategy.</p> <br />
          <h3>Photography</h3> <br />
          <p>The internet is a visual medium. You can't have a website or social media
            without using images, especially when you're trying to promote a brand that
            centers on a real human being! You'll need some well-produced, professional shots
            that tell your story.</p> <br />
          <p>On her website, fertility author Dr. Lora Shahine uses photography that shows her
            as both a medical expert and an approachable <Link to="/promotion" style={{color:"black"}}> speaker. </Link> </p>
        </div>
      </div>
      <div className="right">
        <img src={DemonstrationBrand} alt="" />
        <img src={branding} alt="" />
      </div>
    </div>
  )
}

export default Demonstration
