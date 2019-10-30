import { COMMENTS } from '../../shared/comments';
import * as ActionTypes from '../ActionTypes';

const comments = (state= {
  errMess: null,
  comments: []
}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_COMMENTS: 
      return({...state, isLoading: false, comments: action.payload, errorMessage: null});
    case ActionTypes.COMMENTS_FAILED:
      return {...state, isLoading: false, comments: [], errorMessage: action.payload}
    case ActionTypes.COMMENTS_LOADING:
      return {...state, isLoading: true, comments: [], errorMessage: null}
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return {...state, comments: state.comments.concat(comment)};
    default:
      return state;
  }
}

export default comments;