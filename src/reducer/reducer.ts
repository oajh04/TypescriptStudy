import { Action } from '../Interfaces/Count';
import { PLUS, MINUS, CUSTOM, ZERO } from './actionTypes';

const initialState = {
    count: 0,
};
  
function reducer(state = initialState, action: Action) {
    switch(action.type) {
      case PLUS:
        return { ...state, count: state.count + 1 };
      case MINUS:
        return { ...state, count: state.count - 1 };
      case CUSTOM:
        return { ...state, count: state.count + action.payload };
      case ZERO:
        return { ...state, count: 0};
      default:
        return state;
    }
}
  
export default reducer;