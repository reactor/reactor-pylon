import React from 'react';

require('styles/core/App.scss');
import Main from './../layout/Main';
import Navigation from './../navigation/Navigation';

class App extends React.Component {

  render() {
    return (
      <Main className={'app'}>
        <div id="application-left">
          <div className="sidebar-left">
            <div id="logo"><a href="#"><span>Reactor Console Beta</span></a></div>
            <Navigation></Navigation>
          </div>
        </div>
        <div id="application-main">
          <div className="main-content">
            <div className="content-box">
              {this.props.children}
            </div>
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
