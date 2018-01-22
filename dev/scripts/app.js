import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from "./landingpage";
import AnxietyPage from "./anxiety-page";
import Ventbox from "./ventbox";
import Squarespace from "./squarespace";
import Racingmind from "./racingmind";

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/anxiety" component={AnxietyPage} /> 
            <Route exact path="/ventbox" component={Ventbox} /> 
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/squarespace" component={Squarespace} />
            <Route exact path="/racingmind" component={Racingmind} />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
