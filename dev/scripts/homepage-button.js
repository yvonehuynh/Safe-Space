import React from "react";
import LandingPage from "./landingpage";

import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

const Homepage=()=>{
        return (
            <div className="homepage-button button">
                <Link to="/">Homepage</Link>
                <Route exact path="/" component={LandingPage} />
            </div>
        )
}

export default Homepage;