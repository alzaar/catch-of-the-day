import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StorePicker from './storepicker';
import NotFound from './notfound';
import Application from './application';
import { FunName } from '../helpers';


const Router = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={Application} />
      <Route  component={NotFound} />
    </Switch>
  </BrowserRouter>
);


export default Router;
