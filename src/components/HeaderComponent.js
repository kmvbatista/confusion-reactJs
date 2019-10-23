import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default function Header() {
  return(
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div> 
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create an unique fusion experience.</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}