import React from "react";
import Accomplishments from "./accomplishments";
import Videos from "./videos";
import Homepage from "./homepage-button";
//import Affirmation from "./affirmation";
import Header from "./header";
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default class Depression extends React.Component {
    render(){
        return (
            <div>
            <Header />
                <p className="description">Let's do something to make your day a little better</p>
            <div className="main-container depression">
                <Link to="/accomplishments">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Accomplishments
                        </h3>
                    </div>
                    <Route exact path="/accomplishments" component={Accomplishments} />
                </Link>

                <Link to="/videos">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Happy Animal Videos
                        </h3>
                    </div>
                    <Route exact path="/videos" component={Videos} />
                </Link>

                {/* <Link to="/quotes">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Quote of the Day to Make Your Day
                        </h3>
                    </div>
                    <Route exact path="/quotes" component={Affirmation} />
                </Link> */}
            </div>
            <Homepage />
            </div>
        )
    }
}