import {DISPLAY_SUBREDDIT, FETCH_SUBREDDIT, DISPLAY_THREAD, FETCH_THREAD} from "../actions/display_subreddit";

interface ISubreditState {
  threads: any;
}

const initialState: ISubreditState = {
  threads: null,
};

const displaySubreddit = (state = initialState, action: any) => {
  switch (action.type) {
    case DISPLAY_SUBREDDIT:
      return {...state,
        threads: action.payload.data.data.children};
    case FETCH_SUBREDDIT:
      return {...state,
        threads: []};
    case FETCH_THREAD:
      return {...state,
        original_post: [],
        thread_replies: [],
      };
    case DISPLAY_THREAD:
      return {...state,
        original_post: action.payload.data[0].data,
        thread_replies: action.payload.data[1].data.children,
      };
    default:
      return state;
  }
};

export {
  displaySubreddit,
};
