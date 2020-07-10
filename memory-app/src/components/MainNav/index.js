import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

class MainNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Nav.Link href="https://magusconjurer.github.io/portfolio.html">Return to Portfolio</Nav.Link>
        <Nav className="ml-auto">
          <Navbar.Text>Score: {this.props.score}</Navbar.Text><Navbar.Text>|</Navbar.Text><Navbar.Text>High Score: 0</Navbar.Text>
        </Nav>
      </Navbar>
    )
  }
  
}

export default MainNav;