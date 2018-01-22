import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from "./landingpage";
import AnxietyPage from "./anxiety-page";
import Ventbox from "./ventbox";

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
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
