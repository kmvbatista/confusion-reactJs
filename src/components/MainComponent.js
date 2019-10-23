import React, {useState} from 'react';
import Menu from './MenuComponent';
import { commingDishes } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';

export default function MainComponent() {
  const [dishes, setDishes] = useState(commingDishes);
  const [dishSelected, setDishSelected] = useState();

  

  return (
    <div>
        <Header></Header>
        <Menu 
          Dishes={dishes} 
          dishSelected={dishSelected}
          setDishSelected = {setDishSelected}
        ></Menu>
        <DishDetail Dish ={dishSelected}></DishDetail>
    </div>
  );
}

 
