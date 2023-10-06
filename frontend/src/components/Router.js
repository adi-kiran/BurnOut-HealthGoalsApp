import React, { useEffect, useReducer, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Router() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="*">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </>
  );
}

export default Router;
