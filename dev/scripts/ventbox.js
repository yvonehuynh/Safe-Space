import React from "react";
import Header from "./header";
import Homepage from "./homepage-button";

export default class Ventbox extends React.Component {
    constructor(){
        super();
        this.state={
            ventbox: ""
        }
        this.formSubmit = this.formSubmit.bind(this)
        this.valueChange = this.valueChange.bind(this)
    }
    formSubmit(e){
        e.preventDefault();
        this.setState({
            ventbox: ""
        })
    }
    valueChange(e){
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div className="ventbox-container">
                <Header />
                <form action="" onSubmit={this.formSubmit}>
                    <input type="text" name="ventbox" value={this.state.ventbox} onChange={this.valueChange} autocomplete="off"/>
                    <input type="submit" value="clear your mind"/>
                </form>
                <Homepage />
            </div>
        )
    }
}