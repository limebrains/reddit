import {GET_USERNAME} from "../actions/account";

interface IauthState {
  userName?: string;
}

const initialState: IauthState = {
  userName: null
};

const accountReducer = (state = initialState, action: any ) => {
    switch (action.type) {
    case GET_USERNAME:
      console.log(action.payload);
      return {
        ...state,
        userName: action.payload.data.name
      };
    default:
      return state;
  }
};

export {
  accountReducer
};
