/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import Item from "./host/host";
import Slider from './../core/slider/Slider';

require('./System.scss');

class Host extends React.Component {

  constructor(props) {
    super(props);
    this.state = { view: 0 };
  }

  viewChange(view) {
    if (this.state.view != view) {
      this.setState({view: view});
    }
  }

  render() {
    var classView;
    switch (this.state.view) {
      case 0: classView = 'view-large'; break;
      case 1: classView = 'view-small'; break;
    }

    var dummy = [
      {id: 1, name: 'Server #1', ip: '12.2.204.201'},
      {id: 2, name: 'Server #2', ip: '12.2.204.202'},
      {id: 3, name: 'Server #3', ip: '12.2.204.203'}
    ];

    return (
      <div className={classView}>
        <div className="heading">
          <strong>System</strong>
        </div>
        <div className="filtering">
          <Slider onChange={this.viewChange.bind(this)} items={['Large', 'Small']}></Slider>
          <div className="search">
            <input className="input" type="text" placeholder="Find a stream" />
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="host-list">
          {dummy.map(function(item){
            return <Item key={item.id} host={item} mode={this.state.view} />
          }, this)}
        </div>
      </div>
    );
  }
}

export default Host;
