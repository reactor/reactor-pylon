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

import App from './core/App';
import Dashboard from './dashboard/Dashboard';
import Host from './host/Host';
import NotFound from './core/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={App} path="pylon">
      <IndexRoute component={Dashboard} />
      <Route component={Host} path="host"/>
      <Route component={NotFound} path="*" />
    </Route>
  </Router>
);
