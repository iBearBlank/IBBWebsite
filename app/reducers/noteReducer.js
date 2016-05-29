import * as types from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_NUMBER:
      return state + 1;
    case types.DECREMENT_NUMBER:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
