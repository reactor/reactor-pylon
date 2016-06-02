import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {

  render() {
    return (
      <ul>
        <li><Link activeClassName="active" to="/pylon/dashboard">Dashboard</Link></li>
        <li className="hide"><Link activeClassName="active" to="/pylon/metric">Metrics</Link></li>
        <li><Link activeClassName="active" to="/pylon/flux">Flux</Link></li>
        <li><Link activeClassName="active" to="/pylon/buffer">Buffers</Link></li>
        <li><Link activeClassName="active" to="/pylon/system">System</Link></li>
        <li><Link activeClassName="active" to="/pylon/log">Logs</Link></li>
      </ul>
    );
  }

}

export default Navigation;
