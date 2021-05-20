import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import { loginReducer } from './auth/reducer'
import { ordersReducer } from './orders/reducer'
import { loadingReducer } from './loading/reducer'

const rootReducer = combineReducers({
  loginReducer,
  ordersReducer,
  loadingReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))