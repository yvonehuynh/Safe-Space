import React from "react";
import Header from "./header";
import Homepage from "./homepage-button";

export default class Squarespace extends React.Component {
    constructor(){
        super();
        this.changeColour = this.changeColour.bind(this);
        this.resetPage = this.resetPage.bind(this)
    }
    changeColour(e){
        e.target.style.backgroundColor = "white";
        e.target.innerHTML = "breathe";
    }
    resetPage(){
        document.location.reload(true)
    }
    render(){
        return (
            <div className="squarespace-container">
            <Header />
                <p>Click on each white square to turn it white.</p>
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
                    <div className="mini-square" onClick={this.changeColour}></div>
                    <div className="mini-square" onClick={this.changeColour}></div>
                </div>
                <Homepage />
                <button onClick={this.resetPage}>Rest</button>
            </div>
        )
    }
}