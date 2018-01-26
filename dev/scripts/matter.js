import React from "react";
import Homepage from "./homepage-button";
import Header from "./header";
import Ventbox from "./ventbox";
import Breathe from "./breathe";
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

export default class Matter extends React.Component {
    constructor(){
        super();
        this.state={
            veryAngry: false,
            slightlyAngry: false
        }
        this.evaluateScore = this.evaluateScore.bind(this)
    }
    evaluateScore(e){
        e.preventDefault();
            const score1 = document.querySelector('input[name = "tomorrow"]:checked').value;
            const score2 = document.querySelector('input[name = "week"]:checked').value;
            const score3 = document.querySelector('input[name = "month"]:checked').value;
            const score4 = document.querySelector('input[name = "year"]:checked').value;

            if (score3 === "1" || score4 === "1") {
                this.setState({
                    veryAngry: true
                })
            } else {
                this.setState({
                    slightlyAngry: true
                })
            }
    }

    render(){
        return (
            <div className="matter-container">
                <Header />
                <form action="" onSubmit={this.evaluateScore}>
                    <fieldset>
                        <p>Will it matter tomorrow?</p>
                        <label htmlFor="tomorrow-yes">Yes</label>
                        <input type="radio" name="tomorrow" value="1" id="tomorrow-yes"/>

                        <label htmlFor="tomorrow-no">No</label>
                        <input type="radio" name="tomorrow" value="0" id="tomorrow-no"/>
                    </fieldset>

                    <fieldset>
                        <p>Will it matter next week?</p>
                        <label htmlFor="week-yes">Yes</label>
                        <input type="radio" name="week" value="1" id="week-yes"/>

                        <label htmlFor="week-no">No</label>
                        <input type="radio" name="week" value="0" id="week-no"/>
                    </fieldset>

                    <fieldset>
                        <p>Will it matter in a month?</p>
                        <label htmlFor="month-yes">Yes</label>
                        <input type="radio" name="month" value="1" id="month-yes"/>

                        <label htmlFor="month-no">No</label>
                        <input type="radio" name="month" value="0" id="month-no"/>
                    </fieldset>

                    <fieldset>
                        <p>Will it matter in a year?</p>
                        <label htmlFor="year-yes">Yes</label>
                        <input type="radio" name="year" value="1" id="year-yes"/>

                        <label htmlFor="year-no">No</label>
                        <input type="radio" name="year" value="0" id="year-no"/>
                    </fieldset>
                    <input type="submit"/>

                    {this.state.veryAngry ? 
                    <div className="matter-quote">
                        <p >You have every right to feel angry!</p>
                        {veryAngry()}
                        </div>
                    : null}

                    {this.state.slightlyAngry ? 
                    <div className="matter-quote">
                        <p>You'll be okay. Just vent it out and you'll be fine.</p>
                        {SlightlyAngry()}
                    </div>
                     : null}
                </form>
                <Homepage />
            </div>
        )
    }
}

const veryAngry=()=>{
    return (
        <div>
            <p>may we suggest these activities to help you chill out?</p>
            <a href="http://yvonecodesit.ca/whackahacker/index.html" target="_blank">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        Whack-A-Hacker
                    </h3>
                </div>
            </a>

            <Link to="/ventbox">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        ventbox
                    </h3>
                </div>
                <Route exact path="/ventbox" component={Ventbox} />
            </Link>
        </div>
    )
}

const SlightlyAngry=()=>{
    return (
        <div>
            <p>May we suggest these activites to distract you?</p>
            <Link to="/breathe">
                <div className="main-directory-box">
                    <h3 className="main-directory-link">
                        Breathe
                    </h3>
                </div>
                <Route exact path="/breathe" component={Breathe} />
            </Link>
            <a href="https://www.youtube.com/results?search_query=cats+and+cucumbers" target="_blank"><h3 className="main-directory-link">Cats and Cucumbers</h3></a>
        </div>
    )
}