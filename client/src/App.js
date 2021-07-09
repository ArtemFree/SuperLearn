import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import AuthorPersonalCabinet from "./Page/AuthorPersonalCabinet/index";
import RegistrationError from "./Page/Errors/RegistrationError/index";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/cabinet" component={AuthorPersonalCabinet} />
        <Route path="/registration-error" component={RegistrationError} />
      </Switch>
    </Router>
  );
}

export default App;
