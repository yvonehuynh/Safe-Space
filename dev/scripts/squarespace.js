import React from "react";
import Header from "./header";
import Homepage from "./homepage-button";

export default class Squarespace extends React.Component {
    constructor(){
        super();
        this.changeColour = this.changeColour.bind(this)
    }
    changeColour(e){
        e.target.style.backgroundColor = "red";
    }
    render(){
        return (
            <div className="squarespace-container">
            <Header />
                <p>Click on each white square to turn it red.</p>
                <div className="mini-square-container">
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                </div>
                <Homepage />
            </div>
        )
    }
}