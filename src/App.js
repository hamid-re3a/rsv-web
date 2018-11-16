import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
// import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
// import Introduction from './components/pages/Introduction';

import './styles/css/bootstrap.css';
import './styles/css/font-awesome.css';
import './styles/css/nexus.css';
import './styles/css/responsive.css';
import './styles/css/sb-admin-2.css';


class App extends Component {
  render() {
    return (
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />} />
        <Route path="*" component={NotFound} />
       
      </Switch>
    );
  }
}

export default App;
