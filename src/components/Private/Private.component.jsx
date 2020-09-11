import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

const Private = ({ children, ...rest }) => {
  const { authenticated } = useAuth();

  const render = () => {
    return authenticated ? children : <Redirect to="/" />;
  };

  return <Route {...rest} render={render} />;
};

export default Private;
