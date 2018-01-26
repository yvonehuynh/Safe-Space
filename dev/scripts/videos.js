import React from "react";
import Dogs from "./dogs";
import Cats from "./cats";
import Homepage from "./homepage-button";
import Header from "./header";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

export default class Videos extends React.Component {
    render(){
        return (
            <div className="video-container">
                <Header />
                <h2>Videos</h2>
                <div className="main-container video">
                    <div className="main-directory-box">
                        <Link to="/dogs"><h3 className="main-directory-link">I am a dog person</h3></Link>
                        <Route exact path="/dogs" component={Dogs} />
                    </div>
                    <div className="main-directory-box">
                        <Link to="/cats"><h3 className="main-directory-link">I am a cat person</h3></Link>
                        <Route exact path="/cats" component={Cats} />
                    </div>
                </div>
                <Homepage />
            </div>
        )
    }
}