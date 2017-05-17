import { SEARCH_SUBREDDITS_SUCCESS } from '../actions/index';

const initialState = {};

const subreddits = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_SUBREDDITS_SUCCESS:
      return {...state, ...action.payload.data.data.children};
    default:
      return state
  }
};

export {
  subreddits,
};