import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';
import * as ROUTES from './constants/routes';
import  { IsUserRedirect, ProtectedRoute }  from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {

  const { user } = useAuthListener();

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
          exact
          >
          <Signup />
          </IsUserRedirect>
        </Route>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user}
         loggedInPath= {ROUTES.BROWSE}
          path={ROUTES.HOME} 
          exact>
          <Home />
        </IsUserRedirect>    
    </Router>
   );
}

