import { AsyncStorage } from "react-native"

import { GET_CURRENT_USER, GET_CURRENT_USER_BY_TOKEN } from './users.action';

const initialState = {
  currentUser: null,
};

const setUserToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    alert(JSON.stringify(error.message))
  }
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CURRENT_USER:
      setUserToken(action.token);
      return {
        ...state,
        currentUser: action.user,
      };
      case GET_CURRENT_USER_BY_TOKEN:
        return {
          ...state,
          currentUser: action.user,
        };
    default:
      return state;
  }
}

export default usersReducer;
