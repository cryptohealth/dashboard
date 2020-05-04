import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '~/pages/_layouts/Menu';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Pacientes from '~/pages/Pacientes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Menu>
        <Route path="/painel" exact component={Home} />
        <Route path="/pacientes" exact component={Pacientes} />
      </Menu>
    </Switch>
  );
}

export default Routes;
