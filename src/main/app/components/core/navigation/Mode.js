import React from 'react';
import {Link} from 'react-router';

class Mode extends React.Component {

  render() {
    return (
      <div className="sidebar-mode">
        <div className="options">
          <div className="btn-group">
            <a className="btn btn-primary"><span className="fa fa-play"></span> Live</a>
            <Link className="btn btn-default" to="/pylon/replay"><span className="fa fa-refresh"></span> Replay</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default Mode;
