import React from "react";
import Homepage from "./homepage-button";

export default class Dogs extends React.Component {
    render(){
        return (
            <div className="dog-container">
                <a href="https://www.youtube.com/results?search_query=funny+dogs+compilation" target="_blank">Find Funny Dogs Compilation</a>

                <a href="https://www.youtube.com/results?search_query=happy+puppies" target="_blank">Happy Puppies Compilation</a>

                <a href="https://www.youtube.com/results?search_query=funny+pugs" target="_blank">Best of Pugs</a>

                <a href="https://www.youtube.com/results?search_query=dogs+and+lemons" target="_blank">Dogs with Lemons</a>

                <a href="https://www.youtube.com/results?search_query=funny+dogs+with+cones" target="_blank">Funny Dogs with Cones</a>
                <Homepage />
            </div>
        )
    }
}