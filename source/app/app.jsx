import React from 'react';
import 'reset-css';
import './base.css';
import Default from './pages/default';
import Admin from './pages/admin';
import Header from './components/header'
import { Switch, Route } from 'react-router-dom';

function App (){

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/capitantripa" exact component={Admin}/>
        <Route component={Default} />
      </Switch>
    </div>
  )
}

export default App;
