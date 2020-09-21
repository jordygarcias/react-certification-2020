import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthLocalDataSource } from '../../data/datasources/auth_local.datasource';

import 'react-toastify/dist/ReactToastify.css';
import { InvalidCredentialsError } from '../../errors/AuthErrors';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const datasource = AuthLocalDataSource;
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const lastAuthState = datasource.getActiveSession();
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, [datasource]);

  const login = useCallback(
    (username, password) => {
      try {
        datasource.authenticate(username, password);
        setAuthenticated(true);
        history.push('/');
      } catch (error) {
        if (error instanceof InvalidCredentialsError) {
          toast.error('Invalid credentials. Try Again!');
        } else {
          toast.error('An error has ocurred. Try Again!');
        }
      }
    },
    [datasource, history]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    datasource.deAuthenticate();
  }, [datasource]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
      <ToastContainer closeOnClick autoClose={5000} />
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
