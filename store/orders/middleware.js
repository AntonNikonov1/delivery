import { Alert } from 'react-native'
import { startLoading, stopLoading } from '../loading/actionCreater'

import { getOrdersListCreater } from './actionCreater'
const ordersData = import('../../server/orders.json')

export const getOrders = () => dispatch => {
  dispatch(startLoading())
  setTimeout(() => {
    ordersData
      .then(data => {
        dispatch(getOrdersListCreater(data.default))
        dispatch(stopLoading())
      })
      .catch(err => {
        Alert.alert('Ошибка загрузки товаров')
        console.log(err)
      })
  }, 1000)
}
