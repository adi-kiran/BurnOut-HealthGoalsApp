import React, { useEffect, useReducer, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ContactUs from './ContactUs';
import Events from './Events';

function Router() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/contactus">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <Events></Events>
        </Route>
      </Switch>
    </>
  );
}

export default Router;
