import { combineReducers } from 'redux';

// Reducers
import noteReducer from './noteReducer';

// Combine Reducers
const reducers = combineReducers({
  noteState: noteReducer,
});

export default reducers;
