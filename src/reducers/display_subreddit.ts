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
      console.log(action.payload.data.data.children);
      return {...state, threads: action.payload.data.data.children};
    case FETCH_SUBREDDIT:
      return {...state, threads: []};
    case DISPLAY_THREAD:

      console.log('OP:',
        action.payload.data[0].data,
        'TR: ', action.payload.data[1],
      );

      return {...state,
        original_post: action.payload.data[0].data,
        thread_replies: action.payload.data[1].data.children
      };
    default:
      return state;
  }
};


export {
  displaySubreddit,
};
