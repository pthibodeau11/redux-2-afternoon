import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

//action creator
export const requestUserData = () => {
  let data = axios.get(`/auth/user-data`).then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
};

export default function reducer(state = initialState, action) {
  switch (action.payload) {
    case REQUEST_USER_DATA:
      return {
        ...state,
        email: action.payload.user.email,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName
      };

    default:
      return state;
  }
}
