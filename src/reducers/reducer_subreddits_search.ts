import {HIDE_SEARCHPANEL, REMOVE_SAVED_SUBREDDIT, SAVE_SUBREDDIT, SEARCH_SUBREDDITS,} from '../actions/searching_page';
const localStorage = require('local-storage-fallback').default;

interface ISubreditState {
  savedSubreddits: any[];
  isVisible: boolean;
}

export const LOCAL_STORAGE_SAVED_SUBREDDITS_ID = "saved_subreddits";

export const getSavedSubreddits = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SAVED_SUBREDDITS_ID)) || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const saveLocalSubreddits = (savedSubreddits: any[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_SAVED_SUBREDDITS_ID, JSON.stringify(savedSubreddits));
  } catch (e) {
    console.log(e);
  }
};

const initialState: ISubreditState = {
  savedSubreddits: getSavedSubreddits(),
  isVisible: true,

};

const subreddits = (state = initialState, action: any) => {
  let savedSubreddits = [];
  switch (action.type) {
    case SEARCH_SUBREDDITS:
      return {...state, data: action.payload.data.data.children};
    case HIDE_SEARCHPANEL:
      return {...state, isVisible: action.payload};
    case SAVE_SUBREDDIT:
      savedSubreddits = [...state.savedSubreddits, action.payload];
      saveLocalSubreddits(savedSubreddits);
      return {
        ...state,
        savedSubreddits,
      };
    case REMOVE_SAVED_SUBREDDIT:
      const index = state.savedSubreddits.indexOf(action.payload);
      savedSubreddits = [
        ...state.savedSubreddits.slice(0, index),
        ...state.savedSubreddits.slice(index + 1, state.savedSubreddits.length),
      ];
      saveLocalSubreddits(savedSubreddits);
      return {
        ...state,
        savedSubreddits,
      };
    default:
      return state;
  }
};


export {
  subreddits,
};
