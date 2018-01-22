import React from "react";
import Header from "./header";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// this is where users can choose their anxiety activity

export default class AnxietyPage extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
                <div className="anxiety-page-container">
                    <Header />
                    <Link to="/ventbox">ventbox</Link>
                    <Route exact path="/ventbox" component={Ventbox} />
                </div>
        )
    }
}

const Square =(title)=>{
    return (
        <div className="anxiety-block block">
            <p>{title}</p>
        </div>
    )
}