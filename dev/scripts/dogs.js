import React from "react";
import Homepage from "./homepage-button";
import Header from "./header";

export default class Dogs extends React.Component {
    render(){
        return (
            <div className="dog-container">
                <Header />
                <div className="main-container">
                    <a href="https://www.youtube.com/results?search_query=funny+dogs+compilation" target="_blank">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">
                                Find Funny Dogs Compilation
                            </h3>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/results?search_query=happy+puppies" target="_blank">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">
                                Happy Puppies Compilation
                            </h3>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/results?search_query=funny+pugs" target="_blank">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">
                                Best of Pugs
                            </h3>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/results?search_query=dogs+and+lemons" target="_blank">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">
                                Dogs with Lemons
                            </h3>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/results?search_query=funny+dogs+with+cones" target="_blank">
                        <div className="main-directory-box">
                            <h3 className="main-directory-link">
                                Funny Dogs with Cones
                            </h3>
                        </div>
                    </a>

                </div>
                <Homepage />
            </div>
        )
    }
}