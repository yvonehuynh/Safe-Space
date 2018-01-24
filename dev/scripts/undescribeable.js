import React from "react";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import Racingmind from "./racingmind";
import AngerPage from "./anger";
import Matter from "./matter";
import Breathe from "./breathe";
import Homepage from "./homepage-button";
import Header from "./header";
import Accomplishments from "./accomplishments";

import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default class Undescribeable extends React.Component {
    render(){
        return (
            <div className="undescriabeable-container">
                <Header />
                <Link to="/ventbox">ventbox</Link>
                <Route exact path="/ventbox" component={Ventbox} />

                <Link to="/matter">Will It Matter?</Link>
                <Route exact path="/matter" component={Matter} />

                <Link to="/breathe">Breathe</Link>
                <Route exact path="/breathe" component={Breathe} />

                <a href="http://yvonecodesit.ca/whackahacker/index.html" target="_blank">Whack-A-Hacker</a>

                <Link to="/ventbox">ventbox</Link>
                <Route exact path="/ventbox" component={Ventbox} />

                <Link to="/squarespace">Squarespace</Link>
                <Route exact path="/squarespace" component={Squarespace} />

                <Link to="/racingmind">Racing mind</Link>
                <Route exact path="/racingmind" component={Racingmind} />
                <Link to="/accomplishments">Accomplishments</Link>
                <Route exact path="/accomplishments" component={Accomplishments} />
                <Homepage />
            </div>
        )
    }
}