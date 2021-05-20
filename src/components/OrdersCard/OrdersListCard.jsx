import React from 'react'
import PropTypes from 'prop-types'

import { FlatListContainer } from '../../style/'
import { OrderItemCard } from './OrderItemCard'

export const OrdersListCard = ({ ordersList }) => (
  <FlatListContainer 
    data={ordersList}
    renderItem={({ item }) => (
      <OrderItemCard orderItemInfo={item} />
    )}
    keyExtractor={item => item.id.toString()}
    showsVerticalScrollIndicator={false}
  />
)

OrdersListCard.propTypes = {
  default: PropTypes.arrayOf({
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
