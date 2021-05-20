import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { HorizontalLine, ShoppingBagIcon } from '../Icons'

import { getDayOfMonth, getDayOfWeek, getStringMonth } from '../../utils/date'

import { Container, ContainerRow } from '../../style'
import {
  OrderItemContainer,
  OrderItemDate,
  OrderItemInterval
} from './style'
import { ArroRight } from '../Icons/Arrow/ArrowRight'


export const OrderItem = React.memo(({ orderItemInfo }) => {
  const { date, interval } = orderItemInfo

  return (
    <View>
      <Container>
        <OrderItemContainer>
          <ContainerRow>
            <ShoppingBagIcon />
      
            <OrderItemDate>
              {
                `${getDayOfMonth(date)} ${getStringMonth(date).replace('.', '')}, ${getDayOfWeek(date)}`
              }
            </OrderItemDate>
          </ContainerRow>

          <ContainerRow>
            <OrderItemInterval>{interval}</OrderItemInterval>
            <ArroRight />
          </ContainerRow>
        </OrderItemContainer>
      </Container>

    <HorizontalLine />
    </View>
  )
})

OrderItem.propTypes = {
  default: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    interval: PropTypes.string
  })
}
