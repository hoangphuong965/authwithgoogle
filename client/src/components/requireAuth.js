/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import React, { Component } from "react";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway = async () => {
      const res = await axios.get("/api/current_user");
      if (!res.data) {
        return this.props.history.push("/notlogin");
      } else {
        return;
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};
