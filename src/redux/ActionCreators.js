import * as ActionTypes from './ActionTypes';
import baseUrl from '../shared/baseurl';

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading());
  fetch(`${baseUrl}/dishes`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw new Error(error.message);
      })
    .then(response => response.json())
    .then(dishes => { dispatch(addDishes(dishes)) })
    .catch(error => dispatch({
      type: ActionTypes.DISHES_FAILED,
      payload: error.message
    }));
};

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
  dispatch(commentsLoading());
  fetch(`${baseUrl}/comments`)//.then(resp => resp.json())
    //.then(comments => {dispatch(addComments(comments))})
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw new Error(error.message);
      })
    .then(response => response.json())
    .then(comments => { dispatch(addComments(comments)) })
    .catch(error => dispatch({
      type: ActionTypes.COMMENTS_FAILED,
      payload: error.message
    }));
};

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
  dispatch(promosLoading());
  fetch(`${baseUrl}/promotions`)//.then(resp => resp.json())
    // .then(promotions => dispatch(addPromos(promotions)))
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch({
      type: ActionTypes.PROMOS_FAILED,
      payload: error.message
    }));
};

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

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + '/comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw new Error(error.message);
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};

export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading());
  fetch(`${baseUrl}/leaders`).then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
    error => {
      throw new Error(error.message);
    })
    .then(response => response.json())
    .then(response => { dispatch(addLeaders(response)) })
    .catch(error => {console.log('checgou'); dispatch({ type: ActionTypes.LEADERS_FAILED, payload: error.message }) });
};

export const addLeaders = (leaders) => ({
  type: ActionTypes.FETCH_LEADERS,
  payload: leaders
});

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const postFeedback = (values) => (dispatch) => {

  const newFeedback = {
    firstname: values.firstname,
    telNumber: values.telNumber,
    agree: values.agree,
    message: values.message,
    contactType: values.contactType,
    lastname: values.lastname,
    date: new Date().toISOString()
  }

  alert(JSON.stringify(newFeedback))
  return fetch(`${baseUrl}/feedback`, {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw new Error(error.message);
      })
    .then(response => response.json())
    .then(createdFeedback => {
      dispatch(addFeedback(createdFeedback));
      console.log(createdFeedback);
      alert(JSON.stringify(createdFeedback))
    })
    .catch(error => {
      console.log('post comments', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    });
};
const addFeedback = (createdFeedback) => ({ type: ActionTypes.LEADERS_LOADING, payload: createdFeedback });