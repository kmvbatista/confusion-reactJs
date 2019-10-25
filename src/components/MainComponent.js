import React, {useState} from 'react';
import Menu from './MenuComponent';
import { Switch, Route } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions'
import DishDetails from './DishDetailComponent';

export default function MainComponent() {

  const HomePage = () => {
    return(
      <Home 
        dish={DISHES.filter( x => x.featured)[0]}
        leader = {LEADERS.filter(x => x.featured)[0]}
        promotion = {PROMOTIONS.filter(x => x.featured)[0]}
      >
      </Home>
    );
  }

  function DishWithId({match}) {
      const dishId = parseInt(match.params.dishid);
      debugger;
      return(
      <DishDetails 
        dish={DISHES.filter(x => x.id === dishId)[0]}
        comments = {COMMENTS.filter(comment => comment.dishId===dishId)}
      >
      </DishDetails>
      );
  }

  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/menu" component={() =>  <Menu Dishes={DISHES}></Menu>}></Route>
          <Route path="/menu/:dishid" component={DishWithId}></Route>
          <Route path="/contactus" component={Contact}></Route>
        </Switch>
    </div>
  );
}

 
