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

import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from './core/app/App';
import Dashboard from './dashboard/Dashboard';
import Connection from './connection/Connection';
import Metric from './metric/Metric';
import Flux from './flux/Flux';
import Host from './host/Host';
import Buffer from './buffer/Buffer';
import System from './system/System';
import Log from './log/Log';
import NotFound from './core/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path="pylon">
      <IndexRoute component={Connection} />
      <Route component={Dashboard} path="dashboard"/>
      <Route component={Metric} path="metric"/>
      <Route component={Flux} path="flux"/>
      <Route component={Host} path="host"/>
      <Route component={Buffer} path="buffer"/>
      <Route component={System} path="system"/>
      <Route component={Log} path="log"/>
      <Route component={NotFound} path="*" />
    </Route>
  </Router>
);
