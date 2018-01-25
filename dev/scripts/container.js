import React from "react";
import AnxietyPage from "./anxiety-page";
import AngerPage from "./anger";
import Undescribeable from "./undescribeable";
import Depression from "./depression";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// this is where users can see all landing options

export default class Container extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
                <div className="main-container">
                    <Link to="/anxiety">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">Anxiety</h3>
                            <Route exact path="/anxiety" component={AnxietyPage} />
                        </div>
                    </Link>
                    
                    <Link to="/anger">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">Anger</h3>
                            <Route exact path="/anger" component={AngerPage} />
                        </div>
                    </Link>

                    <Link to="/undescribeable"> 
                        <div className="main-directory-box">
                        <h3
                            className="main-directory-link">undescribeable</h3>
                            <Route exact path="/undescribeable" component={Undescribeable} />
                        </div>
                    </Link>

                    <Link to="/depression">
                        <div className="main-directory-box">
                        <h3 className="main-directory-link">Depression</h3>
                            <Route exact path="/depression" component={Depression} />
                        </div>
                    </Link>
                </div>
        )
    }
}
