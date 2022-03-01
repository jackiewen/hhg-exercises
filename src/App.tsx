import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/counter" />
      </Route>
      <Route path="/" render={(props) => <Layout {...props} />} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
