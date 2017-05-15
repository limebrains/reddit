import { SEARCH_SUBREDDITS} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_SUBREDDITS:
      console.log(action.payload.data);
      return [action.payload.data, ...state];

  }

  return state;
}