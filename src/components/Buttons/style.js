import styled from 'styled-components'

import { colorBlue, colorWhite } from '../../style/variables/colors'

export const ButtonTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: ${colorBlue};

  padding: 20px;
  margin-top: 60px;
`

export const ButtonText = styled.Text`
  color: ${colorWhite};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`