import React from "react";
import Dogs from "./dogs";
import Cats from "./cats";
import Homepage from "./homepage-button";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

export default class Videos extends React.Component {
    render(){
        return (
            <div className="video-container">
                <Link to="/dogs">I am a dog person</Link>
                <Route exact path="/dogs" component={Dogs} />

                <Link to="/cats">I am a cat person</Link>
                <Route exact path="/cats" component={Cats} />

                <Homepage />
            </div>
        )
    }
}