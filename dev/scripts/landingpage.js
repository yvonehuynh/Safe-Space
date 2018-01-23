import React from "react";
import Header from "./header";
import Popup from "./popup";
import Container from "./container";
import Breathe from "./breathe";

export default class LandingPage extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Popup />
                <Container />
                <Breathe />
            </div>
        )
    }
}

