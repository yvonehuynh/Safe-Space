import React from "react";

const questionArray=[
    "Name 10 items that remind you of the beach",
    "Name 10 names that start with the letter R",
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
        <p>{selectedQuestion}</p>
    )
}

export default class Racingmind extends React.Component {
    render(){
        return (
            <div>
                {randomQuestions()}
            </div>
        )
    }
}