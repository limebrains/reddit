import { HIDE_SEARCHPANEL, SEARCH_SUBREDDITS } from '../actions/searching_page';


const initialState = {};

const subreddits = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_SUBREDDITS:
      return { ...state, data: action.payload.data.data.children };
    case HIDE_SEARCHPANEL:
      return {...state};
    default:
      return state;
  }
};

export {
  subreddits,
};

//       return {...state, ...action.payload.data.data.children};
