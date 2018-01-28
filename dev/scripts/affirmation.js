import React from "react";
import axios from "axios";
import Homepage from "./homepage-button";
import Header from "./header";

export default class Affirmation extends React.Component {
    constructor(){
        super();
        this.state={
            quotes: []
        }
        this.getWords = this.getWords.bind(this)
    }
    getWords(){
        axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            params: {
                reqUrl: '"https://quotes.rest/qod.json?category=funny"',
                proxyHeaders: {
                    'header_params': 'value'
                },
                xmlToJSON: false
            }.then(function (res) {
                const results = res.data.contents.quotes
                this.setState({
                    quotes: results
                })
            }
            )})
    }
    render(){
        return (
            <div className="affirmation-container">
                <Header />
                <p>Get a random quote of the day. Maybe, you'll feel inspired enough to creatively express yourself.</p>
                <div className="affirmation-words">
                    {this.state.quotes.map(res=>{
                        return (
                            <p key={res.id}>"{res.quote}" - {res.author}</p>
                            )
                        })}
                </div>
                <div className="affirmation-button">
                    <button onClick={this.getWords}>Make Me Feel Better</button>
                </div>
                <Homepage />
            </div>
        )
    }
}