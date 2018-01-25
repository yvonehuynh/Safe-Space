import React from "react";
import axios from "axios";

export default class Memes extends React.Component {
    constructor(){
        super();
        this.state={
            memes: []
        }
        this.getMemes = this.getMemes.bind(this)
    }
    getMemes(){
        axios.get('https://api.imgflip.com/get_memes', {
            params: {
                queryParam: 'value'
            }
        }).then(res => {
            const results = res.data.data.memes;
            this.setState({
                memes: results
            })
           
        })
    }

    render(){
        return (
            <div className="meme-container">
                <div className="meme">
                   {this.state.memes.map(res=>{
                      return (
                          <img src={res.url} alt=""/>
                      )
                   })}
                </div>
                <button onClick={this.getMemes}>Get Memes</button>
            </div>
        )
    }
}