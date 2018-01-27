import React from "react";
import Header from "./header";
import Homepage from "./homepage-button";

const questionArray=[
    "Name 10 items that remind you of the beach",
    "Name 10 names that start with the letter R",
    "Name 10 names that start with the letter A",
    "Name 10 names that start with the letter C",
    "Name 10 names that start with the letter D",
    "Name 10 names that start with the letter E",
    "Name 10 names that start with the letter J",
    "Name 10 animals that have stripes",
    "Can you name 4 types of fish, 3 types of mammels, and 3 types of wine?",
    "Can you name 10 things that don't belong in the fridge?",
    "Can you list 10 items that belong in an amusement park?",
    "Can you list 10 of your most favourite food?",
    "What are 10 questions no one has ever asked you?",
    "Name 10 facts about yourself that you could tell a stranger",
    "Name 10 goals you have for yourself this week",
    "Can you name 10 types of ice cream flavours?",
    "Name 10 colours that are not called red, orange, yellow, green, blue indigo, or violet",
    "Name 10 best places to go on a rainy day",
    "If you had 10 puppies, can you name each of them?"
]

const randomQuestions=()=>{
    const randomIndex = Math.floor(Math.random()*questionArray.length);
    const selectedQuestion = questionArray[randomIndex];
    return (
        <div className="random-challenge">
            <p>Challenge:</p>
            <p>{selectedQuestion}</p>
        </div>
    )
}


export default class Racingmind extends React.Component {
    constructor(){
        super();
        this.resetPage = this.resetPage.bind(this)
    }
    resetPage() {
        document.location.reload(true)
    }
    render(){
        return (
            <div className="racing-mind-container">
                <Header />
                <div className="racing-mind-flex-container">
                    <div className="input-container">
                {randomQuestions()}
                        <ol>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                            <li><input type="text" autocomplete="off"/></li>
                        </ol>
                    </div>
                    <div className="racing-mind-description">
                        <h3>Racing Mind</h3>
                        <p>Racing Mind is meant to help distract you from your intruding thoughts. By thinking of something else, even for a short moment, it may help you clear your head. Do as many as you like until you feel like your intruding thoughts are just... thoughts.</p>
                        <h3>instructions</h3>
                        <ol className="racing-mind-instructions">
                            <li>
                                <p>
                                    Complete the challenge by completing all 10 input boxes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Think of original ideas to fill in all 10 boxes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Click Reset to try another challenge or head back to the homepage for more activities.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
                <button onClick={this.resetPage}>Reset</button>
                <Homepage />
            </div>
        )
    }
}