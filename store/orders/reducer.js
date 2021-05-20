import { Alert } from 'react-native'
import { DUPLICATE_ORDER, GET_ORDERS, REMOVE_ORDERS } from './actionType'

const initialState = {
  ordersList: []
}

export const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        ordersList: state.ordersList.concat(payload)
      }

    case DUPLICATE_ORDER: 
      const ordersListLength = state.ordersList.length
      const correctId = state.ordersList[ordersListLength - 1].id + 1
      payload.id = correctId

      return {
        ...state,
        ordersList: state.ordersList.concat(payload)
      }

    case REMOVE_ORDERS:  
      const removeOrder = state.ordersList
        .filter(order => payload.id === order.id)
        [0]
    
      return {
        ...state,
        ordersList: state.ordersList.filter(order => order.id !== removeOrder.id)
      }
  
    default:
      return state
  }
}