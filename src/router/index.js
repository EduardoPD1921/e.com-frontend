import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RegisterTypeSelector from '../pages/RegisterTypeSelector';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registerTypeSelector" exact component={RegisterTypeSelector} />
      </Switch>
    </Router>
  );
};

export default Routes;