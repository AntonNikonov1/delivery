import React from 'react'
import { ButtonTouchableOpacity, ButtonText } from './style'

export const StyledButton = (props) => (
  <ButtonTouchableOpacity {...props}>
    <ButtonText>{props.title}</ButtonText>
  </ButtonTouchableOpacity>
)
