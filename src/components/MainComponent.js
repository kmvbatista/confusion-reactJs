import React, { useState } from 'react';
import Menu from './MenuComponent';
import About from './AboutusComponent'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetails from './DishDetailComponent';
import { connect } from 'react-redux';
import  { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
};

const mapDispatchToProps = dispatch =>({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

function MainComponent(props) {
  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.filter(x => x.featured)[0]}
        leader={props.leaders.filter(x => x.featured)[0]}
        promotion={props.promotions.filter(x => x.featured)[0]}
      >
      </Home>
    );
  }

  function DishWithId({ match }) {
    const dishId = parseInt(match.params.dishid);
    return (
      <DishDetails
        dish={props.dishes.filter(x => x.id === dishId)[0]}
        comments={props.comments.filter(comment => comment.dishId === dishId)}
        addComment ={props.addComment}
      >
      </DishDetails>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/menu" component={() => <Menu Dishes={props.dishes}></Menu>}></Route>
        <Route path="/menu/:dishid" component={DishWithId}></Route>
        <Route path="/contactus" component={Contact}></Route>
        <Route path="/aboutus" component={() => <About leaders={props.leaders}></About>}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))

