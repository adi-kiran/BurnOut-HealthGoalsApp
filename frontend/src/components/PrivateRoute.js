import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  return props.state.loggedIn ? (
    <Route path={props.path}>{props.children}</Route>
  ) : (
    <Redirect to="/signin"/>
  );
}

export default PrivateRoute;
