import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '~/pages/_layouts/Menu';
import Home from '~/pages/Home';
import Patients from '~/pages/Patients';

function Routes() {
  return (
    <Switch>
      <Menu>
        <Route path="/" exact component={Home} />
        <Route path="/patients" exact component={Patients} />
      </Menu>
    </Switch>
  );
}

export default Routes;
