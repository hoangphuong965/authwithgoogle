import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <div className='p-5'>
          <h4>Authenticate with Google</h4>
          <p>
            <b>Version</b>: 0.0.1
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
