import React from "react";
import Homepage from "./homepage-button";
import Header from "./header";

export default class Cats extends React.Component {
    render(){
        return (
            <div className="cat-container">
                <Header />
                <div className="main-container">
                <a href="https://www.youtube.com/results?search_query=funny+cats" target="_blank">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Funny Cats
                        </h3>
                    </div>
                </a>
                
                <a href="https://www.youtube.com/results?search_query=cats+and+cucumbers" target="_blank">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Cats and Cucumbers
                        </h3>
                    </div>
                </a>

                <a href="https://www.youtube.com/results?search_query=best+of+kittens" target="_blank">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Best of Kittens
                        </h3>
                    </div>
                </a>

                <a href="https://www.youtube.com/results?search_query=cat+vs+christmas+tree" target="_blank">
                    <div className="main-directory-box">
                        <h3 className="main-directory-link">
                            Cat vs. Christmas tree
                        </h3>
                    </div>
                </a>
                </div>
                <Homepage />
            </div>
        )
    }
}