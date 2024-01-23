import React from 'react'

import "./Positioning.css"
import LeftNav from '../Left nav/LeftNav';
import Positioning2 from "./../images/Positioning2.jpg"
import positioning4 from "./../images/positioning4.png"
import { Link } from 'react-router-dom';

function Positioning() {

  return (
    <div className='c-job'>
      <LeftNav />

      <div className="text">
        <h1> #1: <b style={{ color: "red" }}> Position </b> Your Brand</h1>
        <br />
        <div className="p">
          <p>Let's start with the most basic element: defining and positioning your brand.
            Or as the great Dolly Parton says… “Find out who you are and do it on purpose.”</p> <br />
          <p>If that sounds like a challenging existential question, don't panic. We're going to
            use a simple formula to figure out exactly what your personal brand should be.</p> <br />
          <b>Your personal brand = </b>
          <br />
          <b>Something you love you do + Something that other people need and will pay for</b> <br />
          <p>This formula should help you to describe your brand in one simple sentence.</p><br />
          <p>If you're not sure what to put in that formula yet, you can go deeper and ask
            yourself some more reflective questions. Start with the first half of the formula,
            “Something you love to do.” Ask yourself:</p> <br />
          <li>What activities or work do you find consistently satisfying?</li> <br />
          <li>What are you really good at?</li> <br />
          <li>What do you want out of life?</li> <br />
          <li>If you won the lottery today, what would you do tomorrow? </li> <br />
          <p>You might come up with multiple answers. For example, perhaps you're really good at accounting
            but it's not satisfying. You love roasting coffee beans but you're not an expert yet.</p> <br />
          <p>Which business should you choose? If you truly love something,
            then you can acquire expertise. But if you don't love something and you place it
            at the heart of your personal brand, you'll burn out fast.</p> <br />
          <p>Once you know what you want to do (and again, there may be multiple answers),
            you need to find out whether it's something that people need. They have to need it enough to
            pay for it and keep you in business. </p> <br />
          <p>Just one word of warning: it's often a good idea to leave your nearest and dearest out of
            these informal focus groups. Look for people who will be definitely, brutally honest with <Link to="/demonstration" style={{color:"black"}}> you! </Link></p>
        </div>
       
      </div>






      <div className="right">
        <img src={Positioning2} alt="" />
        <img src={positioning4} alt="" />
      </div>
    </div>
  )
}

export default Positioning
