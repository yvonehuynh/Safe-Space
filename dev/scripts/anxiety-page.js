import React from "react";
import Header from "./header";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import Racingmind from "./racingmind";
import Homepage from "./homepage-button";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// this is where users can choose their anxiety activity

export default class AnxietyPage extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
                <div className="anxiety-page-container">
                    <Header />
                    <div className="main-container">
                    <Link to="/ventbox">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link"> 
                        ventbox
                        </h3>
                        <Route exact path="/ventbox" component={Ventbox} />
                    </div>
                    </Link>

                    <Link to="/squarespace">
                    <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        Squarespace
                        </h3>
                        <Route exact path="/squarespace" component={Squarespace} />
                        </div>
                    </Link>

                    <Link to="/racingmind">
                        <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        Racing mind
                        </h3>
                        <Route exact path="/racingmind" component={Racingmind} />
                        </div>
                    </Link>
                    </div>
                    <Homepage />
                </div>
        )
    }
}

