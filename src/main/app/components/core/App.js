import React from 'react';
import {Link} from 'react-router';

require('styles/core/App.scss');

function getState() {
  return {
    pages: []
  };
}

class App extends React.Component {

  constructor(){
    super();
    this.state = getState();
  }

  render() {
    return (
      <div className={'app'}>
        <Link to="/pylon">Dashboard</Link>
        <Link to="/pylon/host">Host</Link>
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default App;
