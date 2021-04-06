import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="App">
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">about us</Nav.Link>
      <Nav.Link href="#link">Products</Nav.Link>
      <NavDropdown title="Activity" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


<Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
<div className="Carouselitem">

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="img/kairouan.png"
      alt="Kairouan"
    />
    <Carousel.Caption>
      <h3>Kairouan </h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="img/bizerte.png"
      alt="Bizerte"
    />

    <Carousel.Caption>
      <h3>BIZERTE </h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="img/sbeitla.png"
      alt="sbeitla"
    />

    <Carousel.Caption>
      <h3>SBEITLA</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
</div>
        </div>
  );
}

export default App;
