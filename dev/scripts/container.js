import React from "react";
import Anxiety from "./anxiety";

// this is where users can see all landing options

export default class Container extends React.Component {
    render(){
        return (
            <div className="main-container">
                <Anxiety />
                {Square("Anxiety")}
                {Square("Anger")}
                {Square("Depression")}
                {Square("Lonliness")}
                {Square("Sadness")}
                {Square("Undescribeable Feelings")}
            </div>
        )
    }
}

const Square =(title)=> {
    return (
        <div className="emotion-block">
            <h3>{title}</h3>
        </div>
    )
}