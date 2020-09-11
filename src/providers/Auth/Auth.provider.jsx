import React, { useState, useEffect, useContext, useCallback } from 'react';
import { AuthLocalDataSource } from '../../data/datasources/auth_local.datasource';
import { YoutubeDataSource } from '../../data/datasources/youtube.datasource';

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

  useEffect(() => {
    const lastAuthState = datasource.getActiveSession();
    const isAuthenticated = Boolean(lastAuthState);

    YoutubeDataSource.getVideos();

    setAuthenticated(isAuthenticated);
  }, [datasource]);

  const login = useCallback(
    (username, password) => {
      try {
        datasource.authenticate(username, password);
        setAuthenticated(true);
      } catch (error) {
        // TODO add toast error
      }
    },
    [datasource]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    datasource.deAuthenticate();
  }, [datasource]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
