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
                
            <Link to="/ventbox">ventbox</Link>
            <Route exact path="/ventbox" component={Ventbox} />

            <Link to="/matter">Will It Matter?</Link>
            <Route exact path="/matter" component={Matter} />

            <Link to="/breathe">Breathe</Link>
            <Route exact path="/breathe" component={Breathe} />

            <a href="http://yvonecodesit.ca/whackahacker/index.html" target="_blank">Whack-A-Hacker</a>
            <Homepage />
            </div>
        )
    }
}