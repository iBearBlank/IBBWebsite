import * as types from './actionTypes.js';

export function incNumber() {
  return {
    type: types.INCREMENT_NUMBER,
  };
}

export function decNumber() {
  return {
    type: types.DECREMENT_NUMBER,
  };
}
