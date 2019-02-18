import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
  render() {
    return (<nav className="nav">
      <div className="nav-wrapper">

        <span className="brand-logo left"><i className="material-icons">audiotrack</i>
          <Link to="/">Phish Reference</Link>
        </span>
        <ul id="nav-mobile" className="right">
          <Link to="/">
            <li> 
              Home &nbsp;
            </li>
            <li><i className="material-icons">home</i></li>
          </Link>
        </ul>

      </div>
    </nav>);
  }
}

export default HeaderBar;