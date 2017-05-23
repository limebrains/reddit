import { HIDE_SEARCHPANEL, SAVE_SUBREDDIT, SEARCH_SUBREDDITS, } from '../actions/searching_page';

interface ISubreditState {
  savedSubreddits: Object;
}

const initialState: ISubreditState = {
  savedSubreddits: {}
};

const subreddits = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_SUBREDDITS:
      return { ...state, data: action.payload.data.data.children };
    case HIDE_SEARCHPANEL:
      return {...state};
    case SAVE_SUBREDDIT:
      console.log('SAVE_SUBREDDIT', state);
      return {
        ...state,
        savedSubreddits: {
          ...state.savedSubreddits,
          [action.payload.display_name]: action.payload
        }
      };
    default:
      return state;
  }
};


export {
  subreddits,
};

//       return {...state, ...action.payload.data.data.children};
