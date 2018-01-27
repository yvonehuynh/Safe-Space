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
        alert("Mind cleared");
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
                <div className="ventbox-flex-container">
                    <div className="form-container">
                        <form action="" onSubmit={this.formSubmit}>
                            <textarea name="ventbox" value={this.state.ventbox} onChange={this.valueChange} autocomplete="off" placeholder="Go on, vent. We're here to listen."/>
                            <button>Clear Your Mind</button>
                        </form>
                    </div>
                    <div className="ventbox-description">
                        <h2>VentBox</h2>
                        <p>VentBox allows you to type your feelings and thoughts out, whatever they are. Some say write a letter to the person that you are angry with and then throw it away, some say to let your emotions out by writing it down. VentBox allows you to speak your mind without having to tell anyone, so you can be free with your mind and thoughts, safely.</p>
                        <p>VentBox and the Safe Space application does not save any of your data. We don't believe in holding things from the past; we believe in moving forward. VentBox is 100% anonymous as this is your safe space.</p>
                        <h3>Instructions:</h3>
                        <ol className="ventbox-instructions">
                            <li>
                                <p>
                                Write your thoughts out.
                                </p>
                            </li>
                            <li>
                                <p>
                                Clear your mind by hitting the "clear your mind" button.
                                </p>
                            </li>
                            <li>
                                <p>
                                Move forward.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
                <Homepage />
            </div>
        )
    }
}