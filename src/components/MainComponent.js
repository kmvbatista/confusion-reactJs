import React, {useState} from 'react';
import Menu from './MenuComponent';
import { commingDishes } from '../shared/dishes';
import { Switch, Route } from 'react-router-dom'
import Home from './HomeComponent';

export default function MainComponent() {
  const [dishes, setDishes] = useState(commingDishes);

  

  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/menu" component={() =>  <Menu Dishes={dishes}></Menu>}></Route>
        </Switch>
    </div>
  );
}

 
