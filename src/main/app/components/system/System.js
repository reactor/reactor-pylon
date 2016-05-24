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
  render() {
    return (
      <div>
        <div className="heading">
          <strong>System</strong>
        </div>
        <div className="filtering">
          <Slider items={['Large', 'Medium', 'Small']}></Slider>
          <div className="search">
            <input className="input" type="text" placeholder="Find a stream" />
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="host-list">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default Host;
