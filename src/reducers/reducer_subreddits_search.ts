import { HIDE_SEARCHPANEL, REMOVE_SAVED_SUBREDDIT, SAVE_SUBREDDIT, SEARCH_SUBREDDITS, } from '../actions/searching_page';

interface ISubreditState {
  savedSubreddits: any[];
  isVisible: boolean;
}

const initialState: ISubreditState = {
  savedSubreddits: [],
  isVisible: true,

};

const subreddits = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_SUBREDDITS:
      return { ...state, data: action.payload.data.data.children };
    case HIDE_SEARCHPANEL:
      return {...state, isVisible: action.payload};
    case SAVE_SUBREDDIT:
      return {
        ...state,
        savedSubreddits: [...state.savedSubreddits, action.payload]
      };
    case REMOVE_SAVED_SUBREDDIT:
      var index = state.savedSubreddits.indexOf(action.payload);
      state.savedSubreddits.splice(index, 1);
      return {
        ...state,
        savedSubreddits: [...state.savedSubreddits]
      };
    default:
      return state;
  }
};


export {
  subreddits,
};
