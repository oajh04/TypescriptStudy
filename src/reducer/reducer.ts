import { Action } from '../Interfaces/Count';
import { PLUS, MINUS } from './actionTypes';

const initialState = {
    count: 0,
};
  
function reducer(state = initialState, action: Action) {
    switch(action.type) {
      case PLUS:
        return { ...state, count: state.count + 1 };
      case MINUS:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
}
  
export default reducer;