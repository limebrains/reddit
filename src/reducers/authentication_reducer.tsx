import {AUTH} from "../actions/authentication";

interface IauthState {
  token?: string;
}

const initialState: IauthState = {
  token: null
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH:
      console.log(action.payload);
      return {...state, token: action.payload.data};
    default:
      return state;

  }
}

export {
  authReducer,
};
