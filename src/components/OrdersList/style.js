import styled from 'styled-components'

import { ContainerRow } from '../../style'
import { colorBlack } from '../../style/variables/colors'

export const OrderItemContainer = styled(ContainerRow)`
  position: relative;
  justify-content: space-between;

  padding: 11px 0;
`

export const OrderItemDate = styled.Text`
  color: ${colorBlack};
  font-size: 14px;
  margin-left: 12px;
`

export const OrderItemInterval = styled.Text`
  color: ${colorBlack};
  font-size: 14px;
  margin-right: 15px;
`

export const OrderListTitle = styled.Text`
  color: ${colorBlack};
  font-size: 17px;

  margin-top: 15px;
  margin-bottom: 5px;
`