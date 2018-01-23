import React from "react";

export default class Breathe extends React.Component {
    constructor(){
        super();
        this.progress = this.progress.bind(this)
    }
    progress(){
            const elem = document.getElementById("myBar");
            let width = 1;
            const id = setInterval(frame, 50);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                    elem.innerHTML = width * 1 + '%';
                }
            }
    }
    render(){
        return (
            <div className="breathe-container">
                <div id="myProgress">
                    <div id="myBar"></div>
                </div>
                    <button onClick={this.progress}>Hello</button>
                <div>

                    <div className="breathe-box-container">
                        <div className="directions">
                            <div className="message">Inhale</div>
                            <div className="message">Hold</div>
                            <div className="message">Exhale</div>
                            <div className="message">Hold</div>
                        </div>
                        <div className="timer inhale">
                            <div className="progress"></div>
                            <div className="indicators">
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                            </div>
                        </div>
                        <div className="timer inhale-hold">
                            <div className="indicators">
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                            </div>
                        </div>
                        <div className="timer exhale">
                            <div className="indicators">
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                            </div>
                        </div>
                        <div className="timer exhale-hold">
                            <div className="indicators">
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}