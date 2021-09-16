import React, { Component } from "react";
import { Container } from "react-bootstrap";

class NotLogin extends Component {
  render() {
    return (
      <Container className='text-center p-5'>
        <h3>Let's login before 🍻</h3>
      </Container>
    );
  }
}

export default NotLogin;
