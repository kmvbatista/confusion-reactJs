import React, {useState} from 'react';
import Menu from './MenuComponent';
import { Switch, Route } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions'

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

  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/menu" component={() =>  <Menu Dishes={DISHES}></Menu>}></Route>
          <Route path="/contactus" component={Contact}></Route>
        </Switch>
    </div>
  );
}

 
