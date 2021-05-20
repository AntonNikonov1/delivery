import styled from 'styled-components'
import { colorGrey } from '../../style/variables/colors'

export const OrderItemCardWrapper = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;

  background-color: ${colorGrey.background};
  border-radius: 6px;

  padding: 25px 17px 17px; 
  margin-bottom: 15px;
`