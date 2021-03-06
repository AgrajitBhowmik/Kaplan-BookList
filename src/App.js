import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBookForm from "./components/CreateBookForm";
import NotFound from "./components/NotFound";
import MainComponent from "./components/MainComponent";

const App = withRouter(({ location }) => {
  return (
    <React.Fragment>
      <NavbarComponent loc={location} />
      <main>
        <Switch>
          <Route path="/books" component={MainComponent}></Route>
          <Route path="/form/new" component={CreateBookForm}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/books" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
});

export default App;
