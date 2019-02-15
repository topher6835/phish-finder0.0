import React, { Component } from "react";

class LandingCard extends Component {
  render() {
    return (
      <div className="row">
      <div className="col s12">
        <div className="card">
          
          <div className="card-content">
            <p className="center">The Phish band from Vermont.</p>
            <p>To get started click "Years".</p>
            <br/>
            <p>This component needs better content.</p>
          </div>
          <div className="card-action blue-grey lighten-5 center">
            <a href="/AppInfo" >App Info</a>
            <a href="#" >Git Hub</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default LandingCard;
