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
        e.target.style.border= "1px solid black";
        e.target.innerHTML = "breathe";
    }
    resetPage(){
        document.location.reload(true)
    }
    render(){
        return (
            <div className="squarespace-container">
            <Header />
                <div className="mini-square-container">
                <h3>Squarespace Instructions</h3>
                <ol>
                    <li>
                        <p>Click on each square to turn it white.</p>
                    </li>
                    <li>
                        <p>Remember to breathe each time you click on a square. Don't worry, we'll remind you.</p>
                    </li>
                </ol>
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
                <div className="button-flex">
                    <Homepage />
                    <button onClick={this.resetPage}>Rest</button>
                </div>
            </div>
        )
    }
}