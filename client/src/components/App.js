import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../bootstrap.min.css";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import About from "./About";
import NotLogin from "./NotLogin";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/notlogin' component={NotLogin} />
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
