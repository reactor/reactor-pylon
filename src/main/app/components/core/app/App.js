import React from 'react';

import Main from './../layout/Main';
import Navigation from './../navigation/Navigation';
import Mode from './../navigation/Mode';
import Server from './../navigation/Server';
import Dropdown from './../dropdown/Dropdown'

class App extends React.Component {

  render() {

    let options = [
      { value: '0', label: 'All application' },
      { value: '1', label: 'Application 1' },
      { value: '2', label: 'Application 2' }
    ]
    let options1 = [
      { value: '0', label: 'All server' },
      { value: '1', label: 'Server 1' },
      { value: '2', label: 'Server 2' }
    ]
    let options2 = [
      { value: '0', label: 'All CPU' },
      { value: '1', label: 'CPU 1' },
      { value: '2', label: 'CPU 2' }
    ]

    return (
      <Main className="app">
        <div id="application-left">
          <div className="sidebar-left">
            <div id="logo"><a href="#"><span>Reactor Console Beta</span></a></div>
            <Navigation></Navigation>
            <Server></Server>
            <Mode></Mode>
          </div>
        </div>
        <div id="application-main">
          <div className="main-content">
            <div className="content-box">
              {this.props.children}
            </div>
          </div>
        </div>
        <div id="application-right">
          <div className="sidebar-right">
            <h2 className="first">
              <strong>Console:</strong>
              <Dropdown options={options} value={options[0]} placeholder="Select an option" />
            </h2>
            <div className="">
              Test
            </div>

            <h2>
              <strong>Server:</strong>
              <Dropdown options={options1} value={options1[0]} placeholder="Select an option" />
              <Dropdown options={options2} value={options2[0]} placeholder="Select an option" />
            </h2>

          </div>
        </div>
      </Main>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default App;
