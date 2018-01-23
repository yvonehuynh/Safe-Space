import React from "react";
import Header from "./header";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import Racingmind from "./racingmind";
import Homepage from "./homepage-button";
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

                    <Link to="/squarespace">Squarespace</Link>
                    <Route exact path="/squarespace" component={Squarespace} />

                    <Link to="/racingmind">Racing mind</Link>
                    <Route exact path="/racingmind" component={Racingmind} />
                    <Homepage />
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