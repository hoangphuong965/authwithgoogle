import React, { Component, Fragment } from "react";
import requireAuth from "./requireAuth";

class Dashboard extends Component {
  renderContent() {
    return (
      <h1 className='container text-center p-5'>WelCome to Dashboard 🐱‍🏍</h1>
    );
  }

  render() {
    return <Fragment>{this.renderContent()}</Fragment>;
  }
}

export default requireAuth(Dashboard);
