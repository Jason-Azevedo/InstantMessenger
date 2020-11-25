import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SecureRoute from "./Components/SecureRoute";
import "./Sass/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <SecureRoute isAuth={true} exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
