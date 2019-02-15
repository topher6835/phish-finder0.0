import React, { Component } from 'react';
import { connect } from 'react-redux';

import Show from './Show';

class Shows extends Component {

    componentDidMount() {
        //console.log('Shows mounting.');
    }

    renderShowComponent(year) {
        // Make sure shows are ordered by date:
        const showsArray = Object.values( this.props.showsInYears[year] );
        showsArray.sort( (a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0) );
        return showsArray.map((show) => {
            return (
                <Show key={show.id} show={show} showId={show.id} year={year} />
              );
          });
    }

    render() {
        return (
            
            <ul className="collection" style={{ background: '#DDDDDD' }}>
                {this.renderShowComponent(this.props.year)}
            </ul> 
        )
    }
}

function mapStateToProps({ showsInYears }) {
    return { showsInYears };
}
  
export default connect(mapStateToProps)(Shows);