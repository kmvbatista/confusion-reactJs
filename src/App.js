import React, {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
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
        <Menu Dishes={dishes}></Menu>
    </div>
  );
}

export default App;
