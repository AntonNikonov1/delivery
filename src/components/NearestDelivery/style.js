import styled from 'styled-components'
import { colorBlack, colorBlue, colorGrey, colorWhite } from '../../style/variables/colors'

export const DateBlock = styled.View`
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 58px;

  background-color: ${colorBlue};
  border-radius: 4px;

  padding: 5px;
  margin-right: 25px;
`

export const DateBlockMonth = styled.Text`
  color: ${colorWhite};
  font-size: 11px;
  text-transform: capitalize;
`

export const DateBlockDay = styled.Text`
  color: ${colorWhite};
  font-size: 20px;
  font-weight: 700;

  margin-top: 3px;
`

export const DeliveryHeaderWrapper = styled.View`
  margin-bottom: 10px;
`

export const DeliveryHeader = styled.Text`
  color: ${colorBlack};
  font-size: 17px;
  font-weight: 700;

  width: 100%;
`

export const DeliveryHeaderBlue = styled(DeliveryHeader)`
  color: ${colorBlue};
`

export const DeliveryTime = styled.Text`
  color: ${colorBlack};
  font-size: 12px;
`

export const DeliveryAdress = styled.Text`
  color: ${colorGrey.text};
  font-size: 12px;

  margin-top: 3px;
`
