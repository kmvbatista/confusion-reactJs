import React, {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainComponent from './components/MainComponent';
import { commingDishes } from './shared/dishes'

function App() {
  const [dishes, setDishes] = useState(commingDishes);

  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
          </div> 
        </Navbar>
        <MainComponent></MainComponent>
    </div>
  );
}

export default App;
