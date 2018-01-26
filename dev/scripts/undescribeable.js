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
import Videos from "./videos";

import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default class Undescribeable extends React.Component {
    render(){
        return (
            <div className="undescriabeable-container">
                <Header />
                <div className="main-container">
                <Link to="/ventbox">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Ventbox
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

               
                <a href="http://yvonecodesit.ca/whackahacker/index.html" target="_blank">
                    <h3 className="main-directory-link">
                        Whack-A-Hacker
                    </h3>
                </a>
                

                <Link to="/videos">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Videos
                        </h3>
                    </div>
                    <Route exact path="/videos" component={Videos} />
                </Link>

                <Link to="/squarespace">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Squarespace
                        </h3>
                    </div>
                <Route exact path="/squarespace" component={Squarespace} />
                </Link>

                <Link to="/racingmind">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Racing mind
                        </h3>
                    </div>
                <Route exact path="/racingmind" component={Racingmind} />
                </Link>

                <Link to="/accomplishments">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Accomplishments
                        </h3>
                    </div>
                <Route exact path="/accomplishments" component={Accomplishments} />
                </Link>
                </div>
                <Homepage />
            </div>
        )
    }
}