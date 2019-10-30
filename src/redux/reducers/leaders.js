import * as ActionTypes from '../ActionTypes';

const Leaders = (state= { isLoading: false, leaders: [], errorMessage: null, }, action) => {
  switch(action.type) {
    case ActionTypes.LEADERS_LOADING:
      return {...state, isLoading: true, leaders: [], errorMessage: null}
    case ActionTypes.FETCH_LEADERS:
      return {...state, isLoading: false ,leaders: action.payload, errorMessage: null}
    case ActionTypes.LEADERS_FAILED: 
      return {...state, isLoading: false, leaders: [], errorMessage: action.payload}
    default:
      return state;
  }
}
export default Leaders;