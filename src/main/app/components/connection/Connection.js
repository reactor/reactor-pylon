import React from 'react';
require('./Connection.scss');

class Connection extends React.Component {

  render() {
    return (
      <div id="connection" className="modal-overlay">
        <div className="content form">
          <div className="container">
            <h1>Connect</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              <strong>Connect to the Nexus API to start monitoring a Reactor System.</strong></p>

            <div className="control">
              <input className="input" placeholder="Host path: http://hostname:port" />
            </div>

            <div className="control">
              <div className="row">
                <div className="gr-1">
                  &nbsp;
                </div>
                <div className="gr-2">
                  <label className="checkbox" onclick="">
                    <input type="checkbox" />
                    <span className="check"></span>
                    Graph Stream
                  </label>
                </div>
                <div className="gr-3">
                  <label className="checkbox" onclick="">
                    <input type="checkbox" />
                    <span className="check"></span>
                    System Stats Stream
                  </label>
                </div>
                <div className="gr-2">
                  <label className="checkbox" onclick="">
                    <input type="checkbox" />
                    <span className="check"></span>
                    Log Stream
                  </label>
                </div>
                <div className="gr-2">
                  <label className="checkbox" onclick="">
                    <input type="checkbox" />
                    <span className="check"></span>
                    Metrics Stream
                  </label>
                </div>
                <div className="gr-1">
                  &nbsp;
                </div>
              </div>
            </div>

            <div className="control center">
              <button type="button" className="btn btn-primary btn-lg">Connect</button>
              <button type="button" className="btn btn-default btn-lg-md">Replay a story</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Connection;
