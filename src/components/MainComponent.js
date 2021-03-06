import React, { useEffect } from 'react';
import Menu from './MenuComponent';
import About from './AboutusComponent'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetails from './DishDetailComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos, postComment, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')); },
  feedbackSubmit: (values) => dispatch(postFeedback(values)),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})

function MainComponent(props) {

  useEffect(
    () => { props.fetchDishes(); props.fetchPromos(); props.fetchComments(); props.fetchLeaders() }, []
  );

  const HomePage = () => {
    return (
      <Home
        dishesLoading={props.dishes.isLoading}
        promotionsLoading={props.promotions.isLoading}
        dishesErrorMessage={props.dishes.errorMessage}
        dish={props.dishes.dishes.filter(x => x.featured)[0]}
        leader={props.leaders.leaders.filter(x => x.featured)[0]}
        leadersErrorMessage={props.leaders.errorMessage}
        promotion={props.promotions.promotions.filter(x => x.featured)[0]}
        promotionsErrorMessage={props.promotions.errorMessage}
        leaders={props.leaders.leaders}
        leadersLoading={props.leaders.isLoading}
      >
      </Home>
    );
  }

  function DishWithId({ match }) {
    const dishId = parseInt(match.params.dishid);
    return (
      <DishDetails
        isLoading={props.dishes.isLoading}
        errorMessage={props.dishes.ErrorMessage}
        dish={props.dishes.dishes.filter(x => x.id === dishId)[0]}
        comments={props.comments.comments.filter(comment => comment.dishId === dishId)}
        addComment={props.addComment}
        postComment={props.postComment}
      >
      </DishDetails>
    );
  }

  return (
    <>
      <Header></Header>
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/menu" component={() => <Menu dishes={props.dishes}></Menu>}></Route>
            <Route path="/menu/:dishid" component={DishWithId}></Route>
            <Route path="/contactus" component={() =>
              <Contact
                resetFeedbackForm={props.resetFeedbackForm}
                postFeedback={(values) => props.feedbackSubmit(values)}
              ></Contact>}>
            </Route>
            <Route path="/aboutus" component={() => <About leaders={props.leaders}></About>}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer></Footer>
    </>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))

