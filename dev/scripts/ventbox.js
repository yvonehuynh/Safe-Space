import React from "react";

export default class Ventbox extends React.Component {
    constructor(){
        super();
        this.state={
            ventbox: ""
        }
        this.formSubmit = this.formSubmit.bind(this)
    }
    formSubmit(e){
        e.preventDefault();
        this.setState({
            ventbox: ""
        })
    }
    render(){
        return (
            <div className="ventbox-container">
                <form action="" onSubmit={this.formSubmit}>
                    <textarea name="ventbox" />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}