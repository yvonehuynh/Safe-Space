import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from "./landingpage";

class App extends React.Component {
    render() {
      return (
        <div>
          <LandingPage />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
