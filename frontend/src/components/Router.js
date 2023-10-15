import React, { useEffect, useReducer, useState, Redirect } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import ContactUs from "./ContactUs";
import Events from "./Events";
import Header from "./Header";
import Profile from "./Profile";
import Home from "./Home";
import burnoutReducer, { updateState } from "../burnoutReducer";
import PrivateRoute from "./PrivateRoute";
import useToken from "./authentication/useToken";
import { useHistory } from "react-router-dom";

const initialState = {
  loggedIn: false,
  token: null,
  snackbar: {
    open: false,
    message: "",
    severity: "",
  },
};

function Router() {
  const { saveToken, getToken, token, removeToken } = useToken();
  const history = useHistory();
  const [state, dispatch] = useReducer(burnoutReducer, initialState);
  if (!state.loggedIn) {
    let loggedInUserJWTtoken = getToken();
    if (loggedInUserJWTtoken) {
      let logInState = {
        loggedIn: true,
        token: token,
      };
      dispatch(updateState(logInState));
    }
  }
  // const { setupToken, token, removeToken  } = useToken();

  // const userHasToken = checkUserToken(false);

  // console.log(!!token)

  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn dispatch={dispatch} />
      </Route>
      <PrivateRoute state={state} dispatch={dispatch} path="/profile">
        <Profile state={state} dispatch={dispatch} />
      </PrivateRoute>
      <PrivateRoute state={state} dispatch={dispatch} path="/contactus">
        <ContactUs state={state} dispatch={dispatch} />
      </PrivateRoute>
      <PrivateRoute state={state} dispatch={dispatch} path="/events">
        <Events state={state} dispatch={dispatch} />
      </PrivateRoute>
      <PrivateRoute state={state} dispatch={dispatch} path="/">
        <Home state={state} dispatch={dispatch} />
      </PrivateRoute>
    </Switch>
  );
}

export default Router;
