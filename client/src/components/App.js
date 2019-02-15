import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import HeaderBar from './HeaderBar';
import AppInfo from './AppInfo';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={{ background: "#2C6E91", height: '100vh', overflow: 'auto' }}>
        <BrowserRouter>
          <div>
            <HeaderBar />
            <div className="container" style={{ paddingTop: 10 }}>
              <Route exact path="/" component={Landing} />
              <Route path="/appinfo" component={AppInfo} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
