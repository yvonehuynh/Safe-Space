import React from "react";
import AnxietyPage from "./anxiety-page";

// this is the component of squares

export default class Anxiety extends React.Component {
    constructor(){
        super();

    }
    render(){
        return (
            <div className="anxiety-container">
                <AnxietyPage />
            </div>
        )
    }
}