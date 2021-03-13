import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';
import * as ROUTES from './constants/routes';
import  { IsUserRedirect }  from './helpers/routes';

export default function App() {

  const user = {};

  return (
    <Router>
        <Route exact path="/signin">
          <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.BROWSE} 
            path= {ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
        </Route>
        <Route exact path="/signup">
          <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          >
          <Signup />
          </IsUserRedirect>
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
    </Router>
   );
}

