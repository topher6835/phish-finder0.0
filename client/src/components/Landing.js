import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import YearListItem from './YearListItem';
import LandingCard from './LandingCard';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {displayYears: false, selectByYearColor: 'white'};
  }
  componentDidMount() {
    this.props.fetchYears();
  }

  renderYears() {
    return this.props.years.map((year) => {
      return (
        <YearListItem 
          key={year} 
          year={year}
        />
      );
    });
  }

  displayYearsClick() {
    let displayYearsStatus = this.state.displayYears;
    displayYearsStatus = !displayYearsStatus;
    this.setState({displayYears: displayYearsStatus});

    if( this.state.selectByYearColor === 'white' ? this.setState({selectByYearColor: '#DDDDDD'}) : this.setState({selectByYearColor: 'white'}) );
  }

  render() {
    return (
      <div style={{margin: '0px'}}>
        <div  style={{ paddingTop: 20 }}>
          <LandingCard />
        </div>
        <ul className="collection with-header">
          <div className="collection-header" onClick={() => this.displayYearsClick()} style={{background: this.state.selectByYearColor}} >Years</div>
            {this.state.displayYears === true ? (<li className="collection-item" >{this.renderYears()}</li>) : ''}
        </ul>
        {/* <div>displayYears: {`${this.state.displayYears}`}</div> */}
      </div>
    );
  }
}

function mapStateToProps({ years, showsInYears }) {
  return { years, showsInYears };
}

export default connect(mapStateToProps, actions)(Landing);
