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
import Dropdown from './../core/dropdown/Dropdown'
import BufferItem from './../buffer/buffer/Buffer'
import Nvd3 from './../core/chart/Nvd3';

require('./Dashboard.scss');

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropdown: false };
  }

  toggleDropdown() {
    this.setState({dropdown: !this.state.dropdown});
  };

  getDummy() {
    let c1 = [];
    for (let i = 0; i < 60; i++) {
      c1.push({x: i, y: Math.round(Math.random() * 0.9 * 100)});
    }
    return [
      { values: c1, key: 'Node', color: '#CCC' }
    ];
  }

  render() {
    let options = [
      { value: '0', label: 'All status' },
      { value: '1', label: 'Status error' },
      { value: '2', label: 'Status warning' }
    ]
    return (
      <div>
        <div className="heading heading-h2">
          <strong>Global Statistics</strong>
        </div>
        <div className="dashboard">
          <div className="row">
            <div className="gr-6">
              <h3>Lorem ipsum sit dolor</h3>
              <div>
                {
                  React.createElement(Nvd3, {
                    type:'lineChart',
                    id: "totoX2",
                    datum: this.getDummy(),
                    margin: {left: 20, bottom: 20, right: 10, top:10},
                    useInteractiveGuideline: true,
                    showYAxis: true,
                    showXAxis: true,
                    showLegend: false,
                    height: 200,
                    forceY: [0,100],
                    duration: 1
                  })
                }
              </div>
            </div>
            <div className="gr-6">
              <h3>Lorem ipsum sit dolor</h3>
              <div>
                {
                  React.createElement(Nvd3, {
                    type:'lineChart',
                    id: "totoX1",
                    datum: this.getDummy(),
                    margin: {left: 20, bottom: 20, right: 10, top:10},
                    useInteractiveGuideline: true,
                    showYAxis: true,
                    showLegend: false,
                    showXAxis: true,
                    height: 200,
                    forceY: [0,100],
                    duration: 1
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="heading heading-h2 space">
          <strong>Main Stream</strong>
          <Dropdown options={options} value={options[0]} placeholder="Select an option" />
        </div>
        <div className="view-medium">
          <div className="buffers">
            <BufferItem mode="1" />
            <BufferItem mode="1" />
            <BufferItem mode="1" />
            <BufferItem mode="1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
