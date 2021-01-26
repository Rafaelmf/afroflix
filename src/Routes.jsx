import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './view/Login';
import DashBoardLayout from './layout/DashBoardLayout';

const Routes = () => {
  const PrivateRoute = ({ path, children }) => {
    return (
      <Route
        exact
        path={path}
        render={() => {
          return localStorage.getItem('token') ? (
            children
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  };
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
