import React from "react";
import AnxietyPage from "./anxiety-page";
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
                </div>
        )
    }
}
