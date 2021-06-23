import * as actionTypes from './types';

const initialState = {
  data: []
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
