import React from "react";
import Homepage from "./homepage-button";

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
                    {this.state.veryAngry ? <p>You have every right to feel angry!</p> : null}
                    {this.state.slightlyAngry ? <p>You'll be okay. Just vent it out and you'll be fine.</p> : null}
                </form>
                <Homepage />
            </div>
        )
    }
}