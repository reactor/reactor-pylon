import React from 'react';
import {Link} from 'react-router';

class Server extends React.Component {

    render() {
        return (
            <div className="sidebar-server">
                <span className="ip">Server: <strong>12.12.12.12</strong></span>
                <a><i className="fa fa-edit"></i></a>
            </div>
        );
    }

}

export default Server;
