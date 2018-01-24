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
                <div>
                    <Link to="/anxiety"><h3>Anxiety</h3></Link>
                    <Route exact path="/anxiety" component={AnxietyPage} />

                    <Link to="/anger"><h3>Anger</h3></Link>
                    <Route exact path="/anger" component={AngerPage} />

                    <Link to="/undescribeable"><h3>undescribeable</h3></Link>
                    <Route exact path="/undescribeable" component={Undescribeable} />

                    <Link to="/depression">Depression</Link>
                    <Route exact path="/depression" component={Depression} />
                </div>
        )
    }
}
