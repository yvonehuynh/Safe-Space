import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from "./landingpage";
import AnxietyPage from "./anxiety-page";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import Racingmind from "./racingmind";
import AngerPage from "./anger";
import Matter from "./matter";
import Breathe from "./breathe";
import Undescribeable from "./undescribeable";

import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/anxiety" component={AnxietyPage} /> 
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/ventbox" component={Ventbox} /> 
            <Route exact path="/squarespace" component={Squarespace} />
            <Route exact path="/racingmind" component={Racingmind} />
            <Route exact path="/anger" component={AngerPage} />
            <Route exact path="/matter" component={Matter} />
            <Route exact path="/breathe" component={Breathe} />
            <Route exact path="/undescribeable" component={Undescribeable} />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
