import React, {useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent'
import { commingDishes } from './shared/dishes'
import DishDetail from './DishDetailComponent'

export default function MainComponent() {
  const [dishes, setDishes] = useState(commingDishes);
  const [dishSelected, setDishSelected] = useState();

  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
          </div> 
        </Navbar>
        <Menu 
          Dishes={dishes} 
          dishSelected={dishSelected}
          onClick = {() => {setDishSelected(dish)}}
        ></Menu>
        <DishDetail Dish ={dishSelected}></DishDetail>
    </div>
  );
}

 
