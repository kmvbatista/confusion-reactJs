import * as ActionTypes from './ActionTypes';
import baseUrl from '../shared/baseurl';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment
  }
});

export const fetchDishes = () => dispatch => {
  debugger;
  dispatch(dishesLoading());
  fetch(`${baseUrl}/dishes`).then(resp => resp.json())
  .then(dishes => {
    debugger;
    const action =addDishes(dishes); 
    debugger;
    dispatch(action);
  });
}
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const dishesFailed = (errorMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMessage
});

export const fetchComments = () => dispatch => {
  debugger;
  dispatch(commentsLoading());
  fetch(`${baseUrl}/comments`).then(resp => resp.json())
  .then(comments => dispatch(addComments(comments)))
}

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const commentsFailed = (errorMessage) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errorMessage
});

export const fetchPromos = () => dispatch => {
  debugger;
  dispatch(promosLoading());
  fetch(`${baseUrl}/promotions`).then(resp => resp.json())
  .then(promotions => dispatch(addPromos(promotions)))
}

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

export const promosFailed = (errorMessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errorMessage
});

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});