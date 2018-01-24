import React from "react";
import Accomplishments from "./accomplishments";
import Videos from "./videos";
import Homepage from "./homepage-button";
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom';

export default class Depression extends React.Component {
    render(){
        return (
            <div>
            <Link to="/accomplishments">Accomplishments</Link>
            <Route exact path="/accomplishments" component={Accomplishments} />

            <Link to="/videos">Happy Animal Videos</Link>
            <Route exact path="/videos" component={Videos} />

            <Homepage />
            </div>
        )
    }
}