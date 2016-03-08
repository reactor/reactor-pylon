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

class Details extends React.Component {

  render() {
    return (
      <div>
        <div className="title">
          /Processors/async-1
          <a className="close-sm"></a>
        </div>
        <div className="chart">
          <div className="chart-title">Reactor Evolution Indicators</div>
          {
            React.createElement(Nvd3, {
              type:'lineChart',
              id: "toto1",
              datum: this.getDummy(),
              margin: {left: 20, bottom: 20, right: 10, top:5},
              useInteractiveGuideline: true,
              showYAxis: true,
              showLegend: false,
              showXAxis: true,
              forceY: [0,100],
              duration: 1
            })
          }
          <div className="chart-legend">
            <span className="color1">- Node</span> / <span className="color2">- Stream</span> / <span className="color3">- Connections</span>
          </div>
        </div>
      </div>
    );
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
}

export default Details;
