import {DISPLAY_SUBREDDIT, FETCH_SUBREDDIT} from "../actions/display_subreddit";

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
    default:
      return state;
  }
};


export {
  displaySubreddit,
};
