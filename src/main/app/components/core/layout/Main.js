import React from 'react';
import Status from "./../status/Status"

class Main extends React.Component {

  render() {
    return (
      <div id="application">
        <Status></Status>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
