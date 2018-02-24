import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../App';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    );
  }
}

export default Routes;
