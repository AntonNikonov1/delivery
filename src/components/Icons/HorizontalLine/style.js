import styled from 'styled-components'
import { colorGrey } from '../../../style/variables/colors'

export const StyledHorizontalLine = styled.View`
  position: absolute;
  bottom: ${props => props.bottom ? props.bottom : '0'};
  left: ${props => props.left ? props.left : '0'};

  width: 100%;
  height: 1px;

  background-color: ${props => props.bgc ? props.bgc : colorGrey.text};
`