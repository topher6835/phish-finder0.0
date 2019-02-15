import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Shows from './Shows';

class YearListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {displayShowsList: false, selectYearColor: 'white', allowClick: true};
    }

    renderShowComponent(year) {
        if (this.props.showsInYears[year]) {
            return (<Shows year={year} />);
        } else return (
            <div className="list-group-item">
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }

    displayShowsListComp() {
        let displayShowsStatus = this.state.displayShowsList;
        displayShowsStatus = !displayShowsStatus;
        this.setState({displayShowsList: displayShowsStatus});

        if( this.state.selectYearColor === 'white' ? this.setState({selectYearColor: '#DDDDDD'}) : this.setState({selectYearColor: 'white'}) );
    }

    yearClick(year) {
        if (this.props.showsInYears[year]) {
            this.displayShowsListComp();
            console.log('year exists in state:', year);
        } else {
            if (this.props.allowYearClick) {
                this.displayShowsListComp()

                this.props.allowClickYearToggle()
                    .then(() => {
                        this.props.fetchShows1(year)
                            .then(() => {
                                this.props.allowClickYearToggle()
                                    .then(() => { console.log('after year fetched toggle:', this.props.allowYearClick) });
                            });
                    });

            } else { console.log('please wait.') }
        }
    }

    render() {
        return (
            <div className="collection-item" style={{ background: this.state.selectYearColor, borderStyle: "solid none", borderColor: "#EEEEEE", borderWidth: "thin" }}>
                <div onClick={() => { this.yearClick(this.props.year) }}>
                    {this.props.year}
                </div>
                <ul>
                    {this.state.displayShowsList === true ? (<li> {this.renderShowComponent(this.props.year)} </li>) : ''}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ showsInYears, allowYearClick }) {
    return { showsInYears, allowYearClick };
  }

export default connect(mapStateToProps, actions)(YearListItem);

{/* <div>
                    <a className="collection-item" style={{background: this.state.selectYearColor}}>
                        <li onClick={() => { this.yearClick(this.props.year) }} >
                            {this.props.year}
                        </li>
                    </a>
                </div> */}