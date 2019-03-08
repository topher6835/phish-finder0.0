import React, { Component } from "react";

class AppInfo extends Component {
    render() {
        return (
            <div>

                <div className="row" >
                    <div className="col s8 offset-s2">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">AppInfo</span>
                                <p>This app was built with React, Redux, and Express.</p>
                                <p>Data is retrieved via Axios from 
                                    <a href="https://phish.in/api-docs" target="_blank" rel="noopener noreferrer">
                                        &nbsp; Phish.in API
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <p>
                                    Plans for a future version of this application include:
                                </p>
                                <ul className="browser-default">
                                    <li>User log in</li>
                                    <li>Save shows user has attended</li>
                                    <li>List songs user has seen performed</li>
                                    <li>Rate shows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         );
    }
}

export default AppInfo;