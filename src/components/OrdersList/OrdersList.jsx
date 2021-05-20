import React from 'react'
import PropTypes from 'prop-types'

import { OrderItem } from './OrderItem'
import { FlatListContainer } from '../../style'

export const OrdersList = ({
  orderInfo,
  ListHeaderComponent,
  ListFooterComponent
}) => (
  <FlatListContainer 
    data={orderInfo.deliveries}
    keyExtractor={item => item.id.toString()}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => (
      <OrderItem orderItemInfo={item} />
    )}
    ListHeaderComponent={ListHeaderComponent}
    ListFooterComponent={ListFooterComponent}
  />
)

OrdersList.propTypes = {
  client_id: PropTypes.number,
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
}