import { createStore, combineReducers, applyMiddleware } from 'redux';
import Comments from './reducers/comments'
import Leaders from './reducers/leaders'
import Dishes from './reducers/dishes'
import Promotions from './reducers/promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore =() => {
  return createStore(
    combineReducers({
      comments: Comments,
      promotions: Promotions,
      dishes: Dishes,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
}