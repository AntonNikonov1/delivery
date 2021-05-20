import { LOG_IN } from './actionType'

const initialState = {
  isLogin: false
}

export const loginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        isLogin: payload
      }
  
    default:
      return state;
  }
}