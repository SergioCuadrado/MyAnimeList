import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Anime from '../containers/Anime';
import DescriptionAnime from '../containers/DescriptionAnime';
import NotFound from '../containers/NotFound';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';

import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anime" component={Anime} />
        <Route path="/anime/:id" component={DescriptionAnime} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
