import React, { Component } from "react";
import { Link } from 'react-router-dom';
import gitIcon from '../images/githubIcon.svg';

class LandingCard extends Component {
  render() {
    return (
      <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <p className="card-title center">The Phish Band from Vermont.</p>
            <p>Here you can find any documented show performed by Phish.</p>
            <br/>
            <p>To get started click "Years".</p>
            <br/>
            <p>When navigating this site please use the home link instead of your browsers back button. 
              This will preserve data you have previously retrieved and shorten load times.
            </p>
          </div>
          <div className="card-action blue-grey lighten-5 center">
            <Link to="/AppInfo" >App Info</Link>
            <a href="https://github.com/topher6835/phish-finder" target="_blank" rel="noopener noreferrer" >Git Hub</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default LandingCard;
