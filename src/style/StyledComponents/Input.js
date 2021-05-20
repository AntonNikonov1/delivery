import styled from 'styled-components'
import { colorBlack, colorBlue } from '../variables/colors'

export const Input = styled.TextInput
  .attrs({
    placeholderTextColor: colorBlack
  })`
  font-size: 18px;
  color: ${colorBlack};

  width: 100%;
  border: 2px solid ${colorBlue};

  padding: 17px 11px;
  margin-bottom: 10px;
`