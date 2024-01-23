import React from 'react'
// import {} from "react-icons/ti";
import { FaArrowRight, FaArrowRightFromBracket, FaCircleArrowRight } from "react-icons/fa6";

import "./Entrance.css"
import LeftNav from '../Left nav/LeftNav'
import PersonalBranding from "./../images/PersonalBranding.png"
import { Link } from 'react-router-dom'

function Entrance() {
  return (
    <div className='container-entrance'>
      <LeftNav />
      <div className="main">
        <div className="left-side">
          <h1>Welcome</h1>
          <h2>What Makes <h3 style={{ display: "inline", color: "red" }}> Personal Branding </h3> Important?</h2>
          <div className="info">
            <p>Here's how important personal brands are: Even if you aren't actively trying to build one,
              you already have a personal brand. Personal branding is inescapable online. </p>
            <br />
            <p>You're probably managing your brand more actively than you realize. Setting up a LinkedIn page?
              That's part of your own personal brand. Updated your Twitter bio? That's part of your personal
              brand. </p>
            <br />
            <p>The only way to avoid personal branding is to be completely offline. Even then, your lack of
              social media presence is a statement in itself. Most importantly, you'll be at a serious
              business disadvantage compared to the people who are online, purposeful, and posting.</p>
          </div>

          <Link to="/home">
            <button>Go to Main Site <FaCircleArrowRight /> </button>
          </Link>
          <div className="share">
            <h4>Share Personal Brand</h4>
            <p>to your friends</p>
          </div>
        </div>
        <div className="right-side">
          <img src={PersonalBranding} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Entrance
