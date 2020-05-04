import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '~/pages/_layouts/Menu';
import Patients from '~/pages/Patients';

function Routes() {
  return (
    <Switch>
      <Menu>
        <Route path="/" exact component={Patients} />
      </Menu>
    </Switch>
  );
}

export default Routes;
