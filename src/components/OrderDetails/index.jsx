import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

// Utils
import {
  getDayOfMonth,
  getDayOfWeek,
  getHighestAndLowestDate,
  getPastDays,
  getRemainingDays
} from '../../utils/date'
import { progressGoodsDelivered } from '../../utils/progressGoodsDelivered'

// Style
import {
  OrderDetailsWrapper,
  OrderDetailsTitle,
  OrderDetailsCalories,
  OrderDetailsDiet,
  OrderDetailsProgressBar,
  OrderDetailsDateContainer,
  OrderDetailsDate,
  OrderDetailsDaysLeft
} from './style'
import { colorBlue } from '../../style/variables/colors'

export const OrderDetails = ({ orderInfo }) => {
  const {packageCalories, packageName, deliveries} = orderInfo

  const percentageOfDelivered = progressGoodsDelivered(deliveries)

  const dateList = deliveries.map(delivery => delivery.date)
  const { minDate, maxDate } = getHighestAndLowestDate(dateList)
  
  return (
    <View>
      <OrderDetailsWrapper>
        <OrderDetailsTitle>
          {`${getPastDays(minDate)} дней`}
        </OrderDetailsTitle>

        <View>
          <OrderDetailsDiet OrderDetailsDiet>{packageName}</OrderDetailsDiet>
          <OrderDetailsCalories>{packageCalories}</OrderDetailsCalories>
        </View>
      </OrderDetailsWrapper>

      <OrderDetailsProgressBar progress={percentageOfDelivered / 100} color={colorBlue} />

      <OrderDetailsDateContainer>
        <OrderDetailsDate>
          {`${getDayOfMonth(minDate)} ${getDayOfWeek(minDate, 'short')}`}
        </OrderDetailsDate>

        <OrderDetailsDaysLeft>
          {
            getRemainingDays(maxDate) 
              ? `осталось ${getRemainingDays(maxDate)} дней`
              : 'Доставок нету'
          }
        </OrderDetailsDaysLeft>

        <OrderDetailsDate>
          {`${getDayOfMonth(maxDate)} ${getDayOfWeek(maxDate, 'short')}`}
        </OrderDetailsDate>
      </OrderDetailsDateContainer>
    </View>
  )
}

OrderDetails.propTypes = {
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