import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "./Home.css"
import LeftNav from '../Left nav/LeftNav'
import threeSteps from "./../images/threeSteps.webp"
import DemonstrationBrand from "./../images/DemonstrationBrand.webp"
import Positioning from "./../images/Positioning.jpg"
import Promotion from "./../images/Promotion.jpg"

function Home() {
  const [bigImage, setBigImage] = useState(false)

  const event1 = () => {
    setBigImage(true)
  }
  const eventL = () => {
    setBigImage(false)
  }


  const [bigImage2, setBigImage2] = useState(false)

  const eventE = () => {
    setBigImage2(true)
  }
  const eventLeave = () => {
    setBigImage2(false)
  }

  const [bigImage3, setBigImage3] = useState(false)

  const enterP = () => {
    setBigImage3(true)
  }
  const leave = () => {
    setBigImage3(false)
  }

  const [bigImage4, setBigImage4] = useState(false)
  const enterH = () => {
    setBigImage4(true)
  }
  const leaveH = () => {
    setBigImage4(false)
  }



  const [link, setLink] = useState(); // Initial path for the link

  const handleMouseEnter = () => {
    setTimeout(() => {
      setLink('/promotion'); // Change the path after 2 seconds
    }, 1500); // 2 seconds delay
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setLink(); // Change back to default path after 2 seconds
    }, 100); // 2 seconds delay
  };

  const [link2, setLink2] = useState("/demonstration"); // Initial path for the link

  const handleMouseEnter2 = () => {
    setTimeout(() => {
      setLink2('/demonstration'); // Change the path after 2 seconds
    }, 1500); // 2 seconds delay
  };

  const handleMouseLeave2 = () => {
    setTimeout(() => {
      setLink2(); // Change back to default path after 2 seconds
    }, 100); // 2 seconds delay
  };

  const [link3, setLink3] = useState("/positioning"); // Initial path for the link

  const handleMouseEnter3 = () => {
    setTimeout(() => {
      setLink3('/positioning'); // Change the path after 2 seconds
    }, 1500); // 2 seconds delay
  };

  const handleMouseLeave3 = () => {
    setTimeout(() => {
      setLink3(); // Change back to default path after 2 seconds
    }, 100); // 2 seconds delay
  };

  return (
    <div>
      <LeftNav event1={event1} eventL={eventL} eventE={eventE} eventLeave={eventLeave}
        enterP={enterP} leave={leave} enterH={enterH} leaveH={leaveH} />

      <div className="messy-section">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={bigImage ? "img img2" : "img promotion"} >
          <Link to={link}>
            <img data-aos="zoom-in-down" src={Promotion} alt="" />
          </Link>
        </div>
        <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className={bigImage2 ? "img img2" : "img demonstration"} >
          <Link to={link2}>
            <img data-aos="zoom-in-left" src={DemonstrationBrand} alt="" />
          </Link>
        </div>
        <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className={bigImage3 ? "img img2" : "img positioning"}>
          <Link to={link3}>
            <img data-aos="zoom-in-right" src={Positioning} alt="" />
          </Link>
        </div>
        <div className={bigImage4 ? "img img2" : "img home"} >
          <img data-aos="zoom-in-up" src={threeSteps} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
