import React, { Component } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavLink href='/auth/google' className='nav-link'>
            <i className='fa fa-google'></i> Google Login
          </NavLink>
        );
      default:
        return [
          <NavLink key='1' href='/api/logout' className='nav-link'>
            <i className='fa fa-sign-out'></i> Logout
          </NavLink>,
        ];
    }
  }
  render() {
    return (
      <header>
        <Navbar bg='primary' expand='lg' variant='dark' collapseOnSelect>
          <Container>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Navbar.Brand>Auth Google</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </Nav>
              {this.props.auth && (
                <Nav className='mr-auto'>
                  <Link to='/dashboard' className='nav-link'>
                    Dashboard
                  </Link>
                </Nav>
              )}
            </Navbar.Collapse>
            <Navbar.Collapse className='justify-content-end'>
              <Nav className='mr-auto'>{this.renderContent()}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {})(Header);
