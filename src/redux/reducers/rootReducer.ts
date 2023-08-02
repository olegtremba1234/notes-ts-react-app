import { combineReducers } from 'redux';
import noteReducer from './noteReducer';

const rootReducer = combineReducers({
  note: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
