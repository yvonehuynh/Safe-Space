import React from "react";
import Homepage from "./homepage-button";

export default class Accomplishments extends React.Component {
    render(){
        return (
            <div className="accomplishment-container">
            <form>
                <p>Name 3 things you accomplished today</p>
                <ol>
                        <li><input type="text" autocomplete="off"/></li>
                        <li><input type="text" autocomplete="off"/></li>
                        <li><input type="text" autocomplete="off"/></li>
                </ol>
                <p>Name 3 things you want to accomplish tomorrow</p>
                <ol>
                        <li><input type="text" autocomplete="off"/></li>
                        <li><input type="text" autocomplete="off"/></li>
                        <li><input type="text" autocomplete="off"/></li>
                </ol>
                <input type="submit"/>
                </form>
                <Homepage />
            </div>
        )
    }
}