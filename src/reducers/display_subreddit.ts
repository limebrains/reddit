import {DISPLAY_SUBREDDIT, FETCH_SUBREDDIT, DISPLAY_THREAD} from "../actions/display_subreddit";
import {SAVE_SUBREDDIT} from "../actions/searching_page";

interface ISubreditState {
  threads: any;
}

const initialState: ISubreditState = {
  threads: null,
};

const displaySubreddit = (state = initialState, action: any) => {
  switch (action.type) {
    case DISPLAY_SUBREDDIT:
      return {...state, threads: action.payload.data.data.children};
    case FETCH_SUBREDDIT:
      return {...state, threads: []};
    case DISPLAY_THREAD:
      return {...state, thread: action.payload.data[1].data.children};
    default:
      return state;
  }
};


export {
  displaySubreddit,
};
