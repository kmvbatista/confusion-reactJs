import { createStore, combineReducers } from 'redux';
import Comments from './reducers/comments'
import Leaders from './reducers/leaders'
import Dishes from './reducers/dishes'
import Promotions from './reducers/promotions'

export const ConfigureStore =() => {
  return createStore(
    combineReducers({
      comments: Comments,
      promotions: Promotions,
      dishes: Dishes,
      leaders: Leaders
    })
  );
}