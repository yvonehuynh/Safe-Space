import React from "react";


export default class Popup extends React.Component {
    render(){
        return (
            <div className="popup-container">
            <h1>Safe Space</h1>
                <h3 className="modal-title-description">About</h3>

                <p>Safe Space helps everyone express themselves, safely.
            If you are angry, sad, having anxiety, lonely, or feeling some undescribeable emotions, Safe Space is here to help you and your mind chill out.
                </p>

                <h3 className="modal-title-description">Vision Behind Safe Space</h3>
                <p>After witnessing a lot of people struggle with their mental health, Safe Space was created to allow all users to express themselves in a safe environment.</p>

                <p>Not everyone has a support system they can turn to and a lot of times, if tt is a recurring problem they are having, bugging their friends and families for the hundreth time is the last thing they want to do. </p>

                <p>This web application was inspired by Calm Harm; a mobile app that helps those who self-harm distract themselves from the urge. Safe Space is an extension of that, but for all users who are just going through something rough and need to vent it out. </p>

                <h3>Safe Space is anonymous. We do not save your data, info, or activity records. No one will know what you are thining. This is your Safe Space.</h3>

                <p>Close this window to explore the different options.</p>
            </div>
        )
    }
}