import React from "react";
import Homepage from "./homepage-button";

export default class Cats extends React.Component {
    render(){
        return (
            <div className="cat-container">
                <a href="https://www.youtube.com/results?search_query=funny+cats" target="_blank">Funny Cats</a>
                <a href="https://www.youtube.com/results?search_query=cats+and+cucumbers" target="_blank">Cats and Cucumbers</a>
                <a href="https://www.youtube.com/results?search_query=best+of+kittens" target="_blank">Best of Kittens</a>
                <a href="https://www.youtube.com/results?search_query=cat+vs+christmas+tree" target="_blank">Cat vs. Christmas tree</a>
                <Homepage />
            </div>
        )
    }
}