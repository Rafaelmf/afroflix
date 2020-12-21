import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './view/Login';
import DashBoardLayout from './layout/DashBoardLayout';

const Routes = () => {
  const PrivateRoute = ({ path, children }) => {
    return (
      <Route
        path={path}
        render={() => {
          return localStorage.getItem('token') ? children : <Redirect to="/" />;
        }}
      />
    );
  };
  return (
    <Switch>
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
