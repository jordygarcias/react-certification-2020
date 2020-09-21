import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';

import NotFoundPage from '../../pages/NotFound';
import HomePage from '../../pages/Home';
import AuthPage from '../../pages/Auth';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoritesPage from '../../pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/play/:id" component={VideoDetailPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
