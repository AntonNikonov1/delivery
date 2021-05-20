import styled from 'styled-components'
import { ProgressBar } from 'react-native-paper'
import { colorBlack, colorGrey } from '../../style/variables/colors'

export const OrderDetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 15px;
`

export const OrderDetailsTitle = styled.Text`
  color: ${colorBlack};
  font-size: 35px;
  font-weight: 700;
`

export const OrderDetailsDiet = styled.Text`
  color: ${colorGrey.text};
  font-size: 9px;
`

export const OrderDetailsCalories = styled.Text`
  color: ${colorBlack};
  font-size: 14px;
  font-weight: 500;
`

export const OrderDetailsProgressBar = styled(ProgressBar)`
  background-color: #E9E9E9;
  border-radius: 4px;
  margin-bottom: 7px;
`

export const OrderDetailsDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const OrderDetailsDate = styled.Text`
  color: ${colorGrey.text};
  font-size: 11px;
`

export const OrderDetailsDaysLeft = styled(OrderDetailsDate)`
  color: ${colorBlack};
`