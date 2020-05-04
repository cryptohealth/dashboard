import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '~/pages/_layouts/Menu';
import Patients from '~/pages/Patients';
import Login from '~/pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Menu>
        <Route path="/patients" exact component={Patients} />
      </Menu>
    </Switch>
  );
}

export default Routes;
