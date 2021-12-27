import React from "react";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Switch, Route, Link } from "react-router-dom";

//page
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
import Clock from "../pages/Clock";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/test" exact component={Clock} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
