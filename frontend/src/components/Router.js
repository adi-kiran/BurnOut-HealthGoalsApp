import React, { useEffect, useReducer, useState, Redirect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import ContactUs from './ContactUs';
import Events from './Events';
import Header from './Header';
import Profile from './Profile';
import Home from './Home';
import useToken from './authentication/useToken';
import checkUserToken from './authentication/CheckUserToken';
import UserCaloriesPage from './UserCaloriesPage';

function Router() {

  const { token, removeToken, setToken } = useToken();

  const userHasToken = checkUserToken(false);

  console.log(!!token)

  return (
    <Switch>
      <Route exact path="/">
        {!!token ? <Home token={removeToken}/> : <SignIn setToken={setToken} />}
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile" >
        {!!token ? <Profile token={removeToken}/> : <SignIn setToken={setToken} />}
      </Route>
      <Route path="/home">
        <UserCaloriesPage />
      </Route>
      <Route path="/contactus">
        <ContactUs token={removeToken} ></ContactUs>
      </Route>
      <Route path="/events">
        <Events token={removeToken} ></Events>
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
