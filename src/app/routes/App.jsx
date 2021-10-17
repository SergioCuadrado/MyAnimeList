import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Anime from '../containers/Anime';
import NotFound from '../containers/NotFound';

import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anime" component={Anime} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
