import React from "react";
import "antd/dist/antd.css";
import "./Asset/Style/App.css";
import HomePage from "./Pages/HomePage";
import CheckSalakByCIDPage from "./Pages/CheckSalakByCIDPage";
import CheckSalakBySelfPage from "./Pages/CheckSalakBySelfPage";
import NewsPage from './Pages/NewsPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cid" component={CheckSalakByCIDPage} />
          <Route path="/self" component={CheckSalakBySelfPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
