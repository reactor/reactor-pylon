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
import { Link } from 'react-router';

require('./Replay.scss');

class Replay extends React.Component {
  render() {
    return (
      <div id="replay" className="modal-overlay">
        <div className="content form">
          <div className="container">
            <h1>Replay a story <Link className="close right" to="/pylon/dashboard"></Link></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <textarea className="input" rows="20" placeholder="Past a JSON or Drag&Drop a JSON File"></textarea>
            <div className="control center">
              <button type="button" className="btn btn-primary btn-lg">Play this story</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Replay;
