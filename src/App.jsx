import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FaBars, FaHome} from "react-icons/fa";

import Home from "./Components/Home/Home";
import Promotion from "./Components/Promotion/Promotion";
import Positioning from "./Components/Positioning/Positioning";
import Demonstration from "./Components/Demonstration/Demonstration";
import Entrance from './Components/Entrance/Entrance';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

function App() {

  const [navBar, setNavBar] = useState(false) 
   const nav1 = () => {
    setNavBar(true)
   }
   const navClose = () => {
    setNavBar(false)
   }
  
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <div className="home">
            <Link to="/">
              <FaHome /> Entrance
            </Link>
          </div>
            <div onClick={nav1} className="btnBars">
              <FaBars />
            </div>
          <div className={navBar ? "links22" : "links"}>
            <div onClick={navClose} className="btnX">
              <FaXmark />
            </div>
            <Link onClick={navClose} to="/home">Home</Link>
            <Link onClick={navClose} to="/positioning">Positioning</Link>
            <Link onClick={navClose} to="/demonstration">Demonstration</Link>
            <Link onClick={navClose} to="/Promotion">Promotion</Link>
          </div>
        </div>


        <div className="footer">
          
        </div>
        <Routes>
          <Route path='/' element={<Entrance />} />
          <Route path='home' element={<Home />}/>
          <Route path='/promotion' element={<Promotion />} />
          <Route path='/positioning' element={<Positioning />} />
          <Route path='/Demonstration' element={<Demonstration />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;