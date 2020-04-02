import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon/Logon';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import NewIncident from './pages/newincident/NewIncident';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/incidents/new" exact component={NewIncident}/>
      </Switch>
    </BrowserRouter>
  );
}