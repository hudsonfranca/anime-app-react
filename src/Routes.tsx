import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { History } from './pages/History';
import { MyList } from './pages/MyList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/create-account" exact component={CreateAccount} />
      <Route path="/history" exact component={History} />
      <Route path="/my-list" exact component={MyList} />
    </Switch>
  );
};

export default Routes;
