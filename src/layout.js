import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registro from './views/Register';
import SelectGame from './views/Select Game';
import Home from './views/Home'
import User from './views/User';
import EditUser from './views/editUser';
import Admin from './views/Admin';
import FieldsView from "./views/Select Field";
import GameReservation from "./views/GameReservation";
import Header from "./views/header";
import Footer from "./views/footer"

import injectContext from "./store/appContext";

function Layout() {
  return (
    <BrowserRouter>
    <Header />
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route path="/register" component={Registro} />
                <Route path="/selectGame" component={SelectGame} />
                <Route exact path="/user" component={User}  />
                <Route path="/user/edit" component={EditUser} />
                <Route exact path="/admin" component={Admin}  />
                <Route path="/fields" component={FieldsView}  />
                <Route path="/reservation" component={GameReservation}  />
                <Route render={()=> <h1>Not Found</h1>} />
            </Switch>
        <Footer />
    </BrowserRouter>

  );
}

export default injectContext(Layout);
