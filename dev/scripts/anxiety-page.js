import React from "react";
import Header from "./header";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";

export default class AnxietyPage extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="anxiety-page-container">
                <Header />
                {Square("Ventbox")}
                {Square("Squarespace")}
            </div>
        )
    }
}

const Square =(title)=>{
    return (
        <Link to={`/${title}`}>
            <p>{title}</p>
        </Link>
    )
}