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
        <Route exact path="/anime" component={Anime} />
        <Route exact path="/anime/:id" component={DescriptionAnime} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
