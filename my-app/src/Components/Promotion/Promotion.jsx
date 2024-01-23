import React from 'react'
import LeftNav from '../Left nav/LeftNav';

import "./Promotion.css"
import Promotion2 from "./../images/Promotion2.jpg"
import brand from "./../images/brand.png"

function Promotion() {
  return (
    <div className='c-family'>
      <LeftNav />
      <div className="text text-p">

        <h1>#3: <b style={{ color: "red" }}>Promote </b> Your Brand</h1> <br />
        <div className="p">
          <p>Now it's time for the third step: actively promoting your brand.</p> <br />
          <p>First, you defined what your personal brand meant. Then you created
            content and an online presence that support that personal brand.
            But you still need an audience… and that's where promotion comes in. </p> <br />
          <p>The most effective promotion channel for any successful personal brand is social media.
            It's easy to access, is often free, and gives you a high level of control over how you
            promote your brand. However, that doesn't mean that you need to be on every platform out there.
            But how do you choose which one(s)? </p> <br />
          <p>To find the right promotion strategy for your personal brand, start with the three
            Ps: parameters, priorities, and platforms.</p> <br />
          <h3>Parameters</h3> <br />
          <p>There are two key parameters to consider: the time you have to spend and your goals
            for promoting your personal brand.</p> <br />
          <p>How many hours per week can you dedicate to posting, commenting, exploring,
            and connecting with new followers? Remember that on most platforms, you'll need to post at least
            once a week. If you can't dedicate enough time to commenting and other interactions, you'll
            lose out on half the impact of social media. It's important to find a level of commitment that's
            both sustainable and effective for you.</p> <br />
          <p>Next, is it easy to achieve your goals on the platform you've chosen?
            Each social network is different. They have different ways to post content and interact with followers,
            and different rules about how you can share links or direct people outside the social network.
            Does your chosen channel offer the type of engagement and follower interaction you need?</p>
        </div>
      </div>
      <div className="right right-p">
        <img src={Promotion2} alt="" />
        <img src={brand} alt="" />
      </div>
    </div>
  )
}

export default Promotion
