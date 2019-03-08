/*
  Be sure to import in all of the action types from `../actions`
*/

import { REQUEST_PENDING, REQUEST_SUCCESS } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PENDING:
    return {
      ...state,
      fetchingSmurfs: true
    }
    case REQUEST_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false
    }
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
