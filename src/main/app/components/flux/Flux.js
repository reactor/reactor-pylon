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
import Details from './details/Details';
import Slider from './../core/slider/Slider';

require('./Flux.scss');

class Flux extends React.Component {

  render() {
    var svg_options = {
      width: "400",
      row: ['otherwiseReturn', 'transform'],
      lines: ['in', 'out', 'in']
    };
    return (
      <div>
        <div className="heading">
          <strong>Flux</strong>
        </div>
        <div className="filtering">
          <Slider items={['All', 'Host', 'Stream', 'Operator']}></Slider>
          <div className="search sep">
            <input placeholder="Find a host / stream / operator" className="input" type="text" />
            <button type="button" className="btn btn-primary">Search</button>
          </div>
          <div className="links">
            <a>More filters</a> | <a>Debug</a>
          </div>
        </div>
        <div className="flux">
          <div className="flux-map">
            <svg width={svg_options.width} height="300px">
              <g>
                <rect x="1" y="1" width="99%" height="30" className="square" />
                <text x="49%" y="20" className="square-label">{svg_options.row[0]}</text>
              </g>
              {svg_options.lines.map(function(item, index){
                var l = svg_options.width / svg_options.lines.length;
                var w = (l * index) + (l / 2) - 8;
                var _out = <g key={index} transform={"translate(" + w + ",45)"}>
                  <line x1="10" y1="1" x2="10" y2="50" className="line" />
                  <polygon points="10,59 4,50 16,50" className="line-poly" />
                </g>
                var _in = <g key={index} transform={"translate(" + w + ",45)"}>
                  <line x1="10" y1="10" x2="10" y2="59" className="line" />
                  <polygon points="10,1 4,10 16,10" className="line-poly" />
                </g>
                return item == "in" ? _in : _out }, this)
              }
              <g transform="translate(0, 120)">
                <rect x="1" y="1" width="99%" height="30" className="square" />
                <text x="49%" y="20" className="square-label">{svg_options.row[1]}</text>
              </g>
            </svg>
          </div>
          <div className="flux-details">
            <Details></Details>
          </div>
        </div>
      </div>
    );
  }
}

export default Flux;
