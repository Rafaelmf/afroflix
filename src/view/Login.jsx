import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const { history } = props;

  return (
    <div>
      Login
      <Button
        onClick={() => {
          localStorage.setItem('user-token', 'afasf');
          history.push('/dashboard');
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default withRouter(Login);
