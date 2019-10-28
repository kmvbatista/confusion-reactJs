import React, {useState} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav,
   NavItem, Collapse, NavbarToggler, Modal, ModalBody,
    Button, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
 
export default function Header() {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  }

  const handleLogin = (evt) => {
    console.log('kkkk')
    alert(`Name: ${document.username.value} passwor: ${document.password.value}`);
    evt.preventDefault();

  }

  return(
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => setIsCollapseOpen(!isCollapseOpen)}></NavbarToggler>
          <NavbarBrand className="mr-auto" to="/">
            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Confusion"/>
          </NavbarBrand>
          <Collapse isOpen={isCollapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <span className="fa fa-home fa-lg"></span>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span>
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span>
                  About us
                </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span>
                  Contact us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in lg">  Login</span>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div> 
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and 
                create an unique fusion experience.</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                type="text"
                id="username"
                name="username"
                innerRef={input => document.username = input}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password"
               id="password"
                name="password"
                innerRef={input => document.password = input}
              ></Input>
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="checkbox"
               name="rememberme"
              />
              Remember me
              </Label>
            </FormGroup>
            <Button onClick={toggleModal} className="btn btn-danger mr-4">Cancel</Button>
            <Button  type="submit" className="btn btn-success">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}