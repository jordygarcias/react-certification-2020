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
  const [authUser, setAuthUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const lastAuthState = datasource.getActiveSession();
    const isAuthenticated = Boolean(lastAuthState);
    setAuthUser(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, [datasource]);

  const toggleFavorite = (video) => {
    const favoriteIndex = authUser.favorites.findIndex(
      (f) => f.id.videoId === video.id.videoId
    );
    if (favoriteIndex > -1) {
      authUser.favorites = authUser.favorites.splice(favoriteIndex, 1);
    } else {
      authUser.favorites.push(video);
    }
    datasource.updateFavorites(authUser);
  };

  const login = useCallback(
    async (username, password) => {
      try {
        const user = await datasource.authenticate(username, password);
        setAuthUser(user);
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
    history.push('/');
  }, [datasource, history]);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated, authUser, toggleFavorite }}
    >
      {children}
      <ToastContainer closeOnClick autoClose={5000} />
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
