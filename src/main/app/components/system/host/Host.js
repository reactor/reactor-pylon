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
import Nvd3 from './../../core/chart/Nvd3';

class Host extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var name = <div className="host-label">Server #1: <strong>12.2.204.201</strong></div>;
    var info = <ul>
      <li>OS: <strong>Debian OS</strong></li>
      <li>Version: <strong>12.1</strong></li>
      <li>Status: <strong>pending</strong></li>
      <li>Memory: <strong>2Go / 20Go</strong></li>
      <li>CPU: <strong>Intel Core 4Q</strong></li>
    </ul>;

    var result = null;
    if (this.props.mode == 0) {
      result = (
          <div className="host">
            <div className="host-container">
              {name}
              <div className="row host-general">
                <div className="gr-4">
                  <div className="donut-chart">
                    {
                      React.createElement(Nvd3, {
                        id: "toto2",
                        type:'pieChart',
                        datum: this.getDummy2(),
                        showLegend: false,
                        showLabels: false,
                        margin: {top:0,left:10,right:0,bottom:0},
                        duration: 1,
                        x:"key",
                        y:"y",
                        donut: true,
                        donutRatio: 0.6
                      })
                    }
                    <div className="label">CPU usage</div>
                    <div className="percent">80%</div>
                  </div>
                </div>
                <div className="gr-8 host-infos">
                  <img src="/images/host/linux.png" width="60px" />
                  {info}
                </div>
              </div>
              <div>
                {
                  React.createElement(Nvd3, {
                    type:'lineChart',
                    id: "toto1",
                    datum: this.getDummy(),
                    margin: {left: 20, bottom: 20, right: 10, top:0},
                    useInteractiveGuideline: true,
                    showYAxis: true,
                    showXAxis: true,
                    forceY: [0,100],
                    duration: 1
                  })
                }
              </div>
            </div>
          </div>
      )
    } else {
      result = <div className="host-small">
        <div className="left">
          {name}
          {info}
        </div>
        <div className="right">
          <div className="progress"><div style={{width:'40%'}} className="value green"></div></div>
          <div className="progress"><div style={{width:'66%'}} className="value blue"></div></div>
          <div className="progress"><div style={{width:'32%'}} className="value red"></div></div>
        </div>
      </div>
    }

    return result
  }

  getDummy() {
    var c1 = [],c2 = [], c3 = [];
    for (var i = 0; i < 60; i++) {
      c1.push({x: i, y: Math.round(Math.random() * 0.9 * 100)});
      c2.push({x: i, y: Math.round(Math.random() * 0.5 * 100)});
      c3.push({x: i, y: Math.round(Math.random() * 0.2 * 100)});
    }
    return [
      { values: c1, key: 'CPU', color: '#60b124' },
      { values: c2, key: 'Memory', color: '#40a7ff' },
      { values: c3, key: 'In flight', color: '#ff5240' }
    ];
  }

  getDummy2() {
    return [
      {key: "One", y: 80, color: "#60b124"},
      {key: "Two", y: 20, color: "#e5e5e5"},
    ];
  }

}

export default Host;
