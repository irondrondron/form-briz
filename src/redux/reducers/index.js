import { combineReducers } from 'redux';

import modal from './modal'
import object from './object'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  modal,
  object,
  data: dataReducer
});

export default rootReducer;