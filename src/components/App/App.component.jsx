import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import Layout from '../Layout';

import NotFound from '../../pages/NotFound';
import Home from '../../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route paht="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
