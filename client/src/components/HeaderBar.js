import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
  render() {
    return (<nav className="nav">

      <div className="nav-wrapper">

        <span className="brand-logo left"><i className="material-icons">cloud</i>
          <Link to="/">Phish Reference</Link>
        </span>
        <ul id="nav-mobile" className="right">
          <li><Link to="#">Info</Link></li>
        </ul>

      </div>
    </nav>);
  }
}

export default HeaderBar;

{/* <nav className="nav">
       
       <div className="nav-wrapper">                 
           <span className="brand-logo center">
           <i className="material-icons">panorama_fish_eye</i> 
           Phish Reference
           </span> 
       </div>
</nav> */}


{/* <nav className="nav">
       
       <div className="nav-wrapper">                 
           
           <span className="brand-logo left"><i className="material-icons">cloud</i>Phish Reference</span>
           <ul id="nav-mobile" className="right">
               <li><a href="#">Info</a></li>
           </ul>

       </div>
     </nav> */}