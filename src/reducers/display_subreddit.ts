import {DISPLAY_SUBREDDIT} from "../actions/display_subreddit";

interface ISubreditState {
  threads: any;
}

const initialState: ISubreditState = {
  threads: [],
};

const displaySubreddit = (state = initialState, action: any) => {
  switch (action.type) {
    case DISPLAY_SUBREDDIT:
      return {...state, threads: action.payload.data.data.children};
    default:
      return state;
  }
};


export {
  displaySubreddit,
};
