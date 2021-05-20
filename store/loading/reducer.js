import { START_LOADING, STOP_LOADING } from "./actionType"

const inititalState = {
  isLoading: false
}

export const loadingReducer = (state = inititalState, { type }) => {
  switch (type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
  
    default:
      return state
  }
}