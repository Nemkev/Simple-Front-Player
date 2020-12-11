import React from "react";
import { Admin } from "./components/Admin";
import { Login } from "./components/Login";
import { Songs } from "./components/Songs";
import { Registration } from "./components/Registration";
import { Switch, Route, Redirect } from "react-router-dom";

import { Wrapper } from "./app.style";

export const Routers = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration}/>
        <Redirect from="/" to="login" />
      </Switch>
    </Wrapper>
  );
};
