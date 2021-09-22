import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';

function Routes() {
  const { authenticated } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/signIn" exact>
          {authenticated ? <Redirect to="/home" /> : <SignIn />}
        </Route>
        <Route path="/signUp" exact>
          {authenticated ? <Redirect to="/home" /> : <SignUp />}
        </Route>
        <Route path="/product/:id" exact> 
          <Product />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;