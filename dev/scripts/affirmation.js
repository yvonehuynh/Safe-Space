import React from "react";
import axios from "axios";
import Homepage from "./homepage-button";

export default class Affirmation extends React.Component {
    constructor(){
        super();
        this.state={
            quotes: []
        }
        this.getWords = this.getWords.bind(this)
    }
    getWords(){
        axios.get("http://quotes.rest/qod.json?category=funny ")
        .then((res=>{
            const results = res.data.contents.quotes
            this.setState({
                quotes: results
            })
        }))
    }
    render(){
        return (
            <div className="affirmation-container">
                <div className="affirmation-button">
                    <button onClick={this.getWords}>Make Me Feel Better</button>
                </div>
                <div className="affirmation-words">
                    {this.state.quotes.map(res=>{
                        return (
                            <p key={res.id}>"{res.quote}" - {res.author}</p>
                        )
                    })}
                </div>
                <Homepage />
            </div>
        )
    }
}