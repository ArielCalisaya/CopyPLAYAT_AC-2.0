import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registro from './views/Register';
import SelectGame from './views/Select Game';
import Home from './views/Home'
import User from './views/User';
import Admin from './views/Admin';
import FieldsView from "./views/Select Field";
import GameReservation from "./views/GameReservation";
import FieldCard from "./components/FieldCard";

import injectContext from "./store/appContext";

function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/register" component={Registro} />
        <Route path="/selectGame" component={SelectGame} />
        <Route path="/user" component={User}  />
        <Route path="/admin" component={Admin}  />
        <Route path="/fields" component={FieldsView}  />
        <Route path="/reservation" component={GameReservation}  />
        <Route render={()=> <h1>Not Found</h1>} />
        </Switch>
    </BrowserRouter>

  );
}

export default injectContext(Layout);
