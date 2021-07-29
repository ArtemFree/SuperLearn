import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import AuthorPersonalCabinet from "./Page/AuthorPersonalCabinet/index";
import RegistrationError from "./Page/Errors/RegistrationError/index";
import ProjectPage from "./Page/Project/ProjectPage";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";

const history = createBrowserHistory();

export const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/cabinet" component={AuthorPersonalCabinet} />
        <Route path="/registration-error" component={RegistrationError} />
        <Route path="/project-not-found" component={RegistrationError} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
