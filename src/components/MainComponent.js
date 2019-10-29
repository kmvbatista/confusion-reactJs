import React, { useEffect } from 'react';
import Menu from './MenuComponent';
import About from './AboutusComponent'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetails from './DishDetailComponent';
import { connect } from 'react-redux';
import  { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
};

const mapDispatchToProps = dispatch =>({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm : () => { dispatch(actions.reset('feedback')); }
})

function MainComponent(props) {

  useEffect(
    () => { props.fetchDishes()}, []
  );

  const HomePage = () => {
    return (
      <Home
        dishesLoading = {props.dishes.isLoading}
        dishesErrorMessage = {props.dishes.ErrorMessage}
        dish={props.dishes.dishes.filter(x => x.featured)[0]}
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
        isLoading = {props.dishes.isLoading}
        errorMessage = {props.dishes.ErrorMessage}
        dish={props.dishes.dishes.filter(x => x.id === dishId)[0]}
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
        <Route exact path="/menu" component={() => <Menu dishes={props.dishes}></Menu>}></Route>
        <Route path="/menu/:dishid" component={DishWithId}></Route>
        <Route path="/contactus" component={() => <Contact resetFeedbackForm={props.resetFeedbackForm}></Contact>}></Route>
        <Route path="/aboutus" component={() => <About leaders={props.leaders}></About>}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))

