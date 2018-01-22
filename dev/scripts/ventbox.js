import React from "react";

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
                <form action="" onSubmit={this.formSubmit}>
                    <input type="text" name="ventbox" onChange={this.valueChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}