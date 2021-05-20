import { GET_ORDERS, REMOVE_ORDERS, DUPLICATE_ORDER } from './actionType'

export const getOrdersListCreater = payload => ({type: GET_ORDERS, payload})
export const duplicateOrder = payload => ({type: DUPLICATE_ORDER, payload})
export const removeOrders = payload => ({type: REMOVE_ORDERS, payload})