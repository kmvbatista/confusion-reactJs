import { DISHES } from '../../shared/dishes'


const Dishes = (state= DISHES, action) => {
  debugger;
  switch(action.type) {
    case 'kakakak':
      debugger;
      console.log('sim');
    default:
      return state;
  }
}

export default Dishes;