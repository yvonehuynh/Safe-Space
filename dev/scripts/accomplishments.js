import React from "react";
import Homepage from "./homepage-button";
import Header from "./header";

export default class Accomplishments extends React.Component {
    constructor(){
        super();
        this.state={
            accomplishments: ""
        }
        this.congrats = this.congrats.bind(this)
    }
    congrats(){
        this.accomplishments.value= ""
    }
    render(){
        return (
            <div className="accomplishment-container">
                <Header />
                <div className="accomplishment-flex-container">
                    <div className="form-container">
                        <form>
                            <p>Name 3 things you accomplished today</p>
                            <ol>
                                <li><input type="text" name="accomplishments" ref={ref => this.accomplishments = ref}/></li>
                                <li><input type="text" name="accomplishments" ref={ref => this.accomplishments = ref}/></li>
                                <li><input type="text" name="accomplishments" ref={ref => this.accomplishments = ref}/></li>
                            </ol>
                            <p>Name 3 things you want to accomplish tomorrow</p>
                            <ol>
                                <li><input type="text" name="accomplishments" ref={ref=> this.accomplishments = ref}/></li>
                                <li><input type="text" name="accomplishments" ref={ref => this.accomplishments = ref}/></li>
                                <li><input type="text" name="accomplishments" ref={ref => this.accomplishments = ref}/></li>
                            </ol>
                        </form>
                        <button onClick={this.congrats}>I am proud of myself!</button>
                    </div>

                    <div className="accomplishment-description">
                        <h3>Accomplishments</h3>
                        <p>Accomplishments lets you remind yourself that everyday, there are small joys that you can celebrate. You might have had a hard day, a bad week, month or year but that doesn't mean that you shouldn't acknowledge your successes, big or small.</p>
                        <h3>Examples:</h3>
                        <ol>
                            <li>
                                <p>You ate breakfast when you normally skip breakfast</p>
                            </li>
                            <li>
                                <p>You replaced the toilet paper roll AND put it on the toilet paper roll holder</p>
                            </li>
                            <li>
                                <p>You made that one stranger smile</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <Homepage />
            </div>
        )
    }
}