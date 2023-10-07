import React, { useEffect, useReducer, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import burnoutReducer, { updateState } from './burnoutReducer';
import { getWithExpiry } from './utils';

// Define all the reducers's state variables and their initial/default values here
const initialState = {
  username: '',
  loggedIn: false,
  // TO DO : Error Handling - When performing error handling, we can use a snackbar 
  // snackbar: {
  //   open: false,
  //   message: '',
  //   severity: '',
  // }
};

function Router() {
  const [state, dispatch] = useReducer(burnoutReducer, initialState);
  // Run this "effect" a single time by passing [] as dependency list
  useEffect(() => {
    let username = getWithExpiry("username");
    let loggedInState = {
      loggedIn: username?true:false,
      username: username,
    };
    dispatch(updateState(loggedInState));
  },[])

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
