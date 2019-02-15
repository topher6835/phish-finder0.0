import React, { Component } from 'react';

class ShowDetails extends Component {

    msToTime(duration) {
        //let milliseconds = parseInt((duration % 1000) / 100);
        let seconds = parseInt((duration / 1000) % 60);
        let minutes = parseInt((duration / (1000 * 60)) % 60);
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 1) ? "" : (hours + ":") ;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + minutes + ":" + seconds;
    }

    renderTrackBySet(set, tracks) {
        return tracks.map((track) => {
            if(track.set_name === set) {
                let trackTime = this.msToTime(track.duration);
                return (
                    <p style={{fontSize:"8px", padding:0, margin:0, float:"lefy"}}>
                        {track.title}   
                        <span style={{fontSize:"8px", float:"right", marginLeft:"6px"}}>{trackTime}</span>
                    </p>
                );
            }
        });
    }

    renderShowDetails(tracks) {
        return this.props.sets.map((set)=> {
            return (
                <div key={set}>
                    <div className="col">
                        <p style={{fontSize:"9px", margin:"4px 0px", padding:0}}><b>{set}</b></p>
                        {this.renderTrackBySet(set, tracks)}
                    </div>
                </div>
            );
        });

    }

    render() {
        return (
            <div className="row">
                {/* {this.renderShowDetails(this.props.show.tracks)} */}
                {this.renderShowDetails(this.props.show.tracks)}
            </div>
        )
    }
}

export default ShowDetails;