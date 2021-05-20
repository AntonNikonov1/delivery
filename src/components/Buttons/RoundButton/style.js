import styled from 'styled-components'

import { RowSpaceBetweenContainer } from '../../../style/StyledComponents/Container'
import { colorBlack, colorGrey } from '../../../style/variables/colors'

const ItemButton =  styled.TouchableOpacity`
  height: 60px;
  justify-content: center;

  background-color: ${colorGrey.background};
`

export const TopItemButton = styled(ItemButton)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  margin-top: 60px;
`

export const BottomItemButton = styled(ItemButton)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const ButtonContentWrpper = styled(RowSpaceBetweenContainer)`
  padding-left: 17px; 
  padding-right: 17px;
`

export const ButtonItemText = styled.Text`
  color: ${colorBlack};
  font-size: 17px;
`

export const ButtonItemIconWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 25px;
`