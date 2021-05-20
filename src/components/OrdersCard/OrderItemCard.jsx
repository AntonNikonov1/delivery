import React from 'react'
import PropTypes from 'prop-types'

import { useNavigation } from '@react-navigation/native'

import { NearestDelivery, OrderDetails } from '..'
import { OrderItemCardWrapper } from './style'

export const OrderItemCard = React.memo(({ orderItemInfo }) => {
  const navigation = useNavigation()

  const navigatioHandler = () => {
    navigation.navigate(
      'OrderScreen',
      { orderItemInfo }
    )
  }

  return (
    <OrderItemCardWrapper onPress={navigatioHandler}>
      <OrderDetails orderInfo={orderItemInfo} />

      <NearestDelivery deliveryInfo={orderItemInfo.deliveries} />
    </OrderItemCardWrapper>
  )
})

OrderItemCard.propTypes = {
  default: PropTypes.shape({
    client_id: PropTypes.string,
    deliveries: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        interval: PropTypes.string,
      })
    ),
    id: PropTypes.number,
    packageCalories: PropTypes.string,
    packageName: PropTypes.string
  })
}
