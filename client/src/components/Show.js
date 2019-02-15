import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowDetails from './ShowDetails';

class Show extends Component {

    constructor(props) {
        super(props);

        this.state = {displayShowDetails: false};
        this.state = {setsInShowArray: []};
        this.displayShowClick = this.displayShowClick.bind(this);
        this.createSetsArray = this.createSetsArray.bind(this);
    }

    componentDidMount() {
        //console.log("showsInYears by id:", this.props.showsInYears[this.props.year][this.props.showId]);
        //this.createSetsArray();
    }

    createSetsArray(show) {
        // let setObj = {};
        let setArray = [];
        let setName = "";
        // let track;
        //const showTracks = this.props.showsInYears[this.props.year][id].tracks;
        
        const showTracks = show.tracks;

        showTracks.map((track) => {
            // let temp = {};
            if(setName != track.set_name) {
                setArray.push(track.set_name);
                setName = track.set_name;
            }
            // setName = track.set_name;
            // track = track.position;
            //console.log('set_name:', track.set_name);
            //return {
                //setObj.setName= {position:track,title:track.title, id:track.id}
                //setObj[setName] = {position:track,title:track.title, id:track.id}
            //    setObj[setName] = {'track': track} 
            //}
        });
        //this.setState({setsInShowArray: setArray});
        //console.log('setArray state:', this.state.setsInShowArray);
        return setArray;
    }

    displayShowClick(show) {
        const setInfo = this.createSetsArray(show);
        this.setState({setsInShowArray: setInfo});
        let displayShowStatus = this.state.displayShowDetails;
        displayShowStatus = !displayShowStatus;
        this.setState({displayShowDetails: displayShowStatus});
    }

    renderShowDetails(show) {
        return (
            <ShowDetails show={show} sets={this.state.setsInShowArray} />
        )
    }

    render() {
        return (
            <li className="collection-item hoverable">
                <div key={this.props.show.id} onClick={ () => {this.displayShowClick(this.props.show)} } > 
                    {this.props.show.date} - {this.props.show.venue.location} - {this.props.show.venue.name}
                </div>
                
                {this.state.displayShowDetails === true ? this.renderShowDetails(this.props.show) : '' }
            </li>
        )
    }
}

function mapStateToProps({ showsInYears }) {
    return { showsInYears };
}
  
export default connect(mapStateToProps)(Show);

{/* <ul className="list-group-flush">
    <a className="list-group-item list-group-item-action list-group-item-primary" >
    <li key={this.props.show.id} onClick={ () => {this.displayShowClick(this.props.show)} } > 
        {this.props.show.date} - {this.props.show.venue.location} - {this.props.show.venue.name}
    </li>
    </a>
    {this.state.displayShowDetails === true ? this.renderShowDetails(this.props.show) : '' }
</ul> */}