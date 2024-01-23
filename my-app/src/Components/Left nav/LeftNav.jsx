import { BrowserRouter as Router, Link } from "react-router-dom";

import "./LeftNav.css"

function LeftNav({event1, eventL, eventE, eventLeave, enterP, leave, enterH, leaveH}) {

 

  return (
    <div>
      <div className="nav-left">
       
        <div className="links-left">
          <Link onMouseEnter={enterH} onMouseLeave={leaveH} to="/home">--Home</Link>
          <Link onMouseEnter={enterP} onMouseLeave={leave} to="/positioning">--Positioning</Link>
          <Link onMouseEnter={eventE} onMouseLeave={eventLeave} to="/demonstration">--Demonstration</Link>
          <Link onMouseEnter={event1} onMouseLeave={eventL} to="/promotion">--Promotion</Link> 
        </div>
      </div>
    </div>
  )
}

export default LeftNav
