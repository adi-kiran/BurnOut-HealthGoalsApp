import React, { useEffect, useReducer, useState, Redirect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ContactUs from './ContactUs';
import Events from './Events';
import Header from './Header';
import Profile from './Profile';
import useToken from './useToken';
import checkUserToken from './CheckUserToken';


function Router() {

  const { token, removeToken, setToken } = useToken();

  const userHasToken = checkUserToken(false);

  console.log(!!token)

  return (
    <Switch>
      <Route exact path="/">
        {!!token ? <Profile /> : <SignIn setToken={setToken} />}
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile" >
        {!!token ? <Profile /> : <SignIn setToken={setToken} />}
      </Route>
      <Route path="/logout">
        {!!token ? <Header token={removeToken} /> : <SignIn setToken={setToken} />}
      </Route>
      <Route path="/contactus">
        <ContactUs></ContactUs>
      </Route>
      <Route path="/events">
        <Events></Events>
      </Route>
    </Switch>
  );
}

export default Router;
