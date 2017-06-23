import {
  DISPLAY_SUBREDDIT, FETCH_SUBREDDIT, DISPLAY_THREAD, FETCH_THREAD,
  LOAD_NEW_PAGE, OPEN_NEW_PAGE
} from "../actions/display_subreddit";

interface ISubreditState {
  threads: any;
  pageNumber: number;
}

const initialState: ISubreditState = {
  threads: null,
  pageNumber: 1,
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
    case LOAD_NEW_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case OPEN_NEW_PAGE:
      return {...state,
        threads: [...state.threads, ...action.payload.data.data.children]
      };
    default:
      return state;
  }
};

export {
  displaySubreddit,
};
