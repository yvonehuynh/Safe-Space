import React from "react";
import Header from "./header";
import Ventbox from "./ventbox";
import Matter from "./matter";
import Homepage from "./homepage-button";
import Breathe from "./breathe";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

export default class AngerPage extends React.Component {
    render(){
        return (
            <div className="anger-container">
            <Header />
            <p>Choose which activity you would like to calm your anger</p>
                
            <div className="main-container">
            <Link to="/ventbox">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        ventbox
                    </h3>
                </div>
            <Route exact path="/ventbox" component={Ventbox} />
            </Link>

            <Link to="/matter">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        Will It Matter?
                    </h3>
                </div>
            <Route exact path="/matter" component={Matter} />
            </Link>

            <Link to="/breathe">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                    Breathe
                    </h3>
                </div> 
            <Route exact path="/breathe" component={Breathe} />
            </Link>
            <div className="main-directory-box">
                <a href="http://yvonecodesit.ca/whackahacker/index.html" target="_blank">
                    <h3 className="main-directory-link">
                        Whack-A-Hacker
                    </h3>
                </a>
            </div>
            </div>
            <Homepage />
            </div>
        )
    }
}