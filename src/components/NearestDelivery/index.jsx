import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

// Utils
import { getNearestDelivery } from '../../utils/getNearestDelivery'
import { getDayOfMonth, getDayOfWeek, getStringMonth } from '../../utils/date'
import { cutString } from '../../utils/cutString'
import { prepositionForDayOfWeek } from '../../utils/prepositionForDayOfWeek'

// Style
import { ContainerRow } from '../../style/StyledComponents/Container'
import {
  DateBlock,
  DateBlockDay,
  DateBlockMonth,
  DeliveryAdress,
  DeliveryHeader,
  DeliveryHeaderBlue,
  DeliveryHeaderWrapper,
  DeliveryTime
} from './style'

export const NearestDelivery = ({ deliveryInfo }) => {
  const { futureDeliveryDate, deliveryIsOver } = getNearestDelivery(deliveryInfo)
  const { date, interval, address } = futureDeliveryDate

  const month = getStringMonth(date)
  const dayOfMonth = getDayOfMonth(date)
  const dayOfWeek = getDayOfWeek(date)

  const verifiedAddress = cutString(address, 10)
  const verifiedInterval = `с ${interval.replace(' - ', ' до ')}`

  return (
    <ContainerRow>
      <DateBlock>
        <DateBlockMonth>{month}</DateBlockMonth>
        <DateBlockDay>{dayOfMonth}</DateBlockDay>
      </DateBlock>

      <View>
        <DeliveryHeaderWrapper>
          <DeliveryHeader numberOfLines={1}>
            {deliveryIsOver ? 'Ближайшая доставка' :'Последняя доставка'}
          </DeliveryHeader>
          <DeliveryHeaderBlue>
            {`${prepositionForDayOfWeek(dayOfWeek, 'в')} -`}
          </DeliveryHeaderBlue>
        </DeliveryHeaderWrapper>

        <View>
          <DeliveryTime>{verifiedInterval}</DeliveryTime>
          <DeliveryAdress>{verifiedAddress}</DeliveryAdress>
        </View>
      </View>
    </ContainerRow>
  )
}

NearestDelivery.propTypes = {
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
