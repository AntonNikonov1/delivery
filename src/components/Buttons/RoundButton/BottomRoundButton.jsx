import React from 'react'
import {
	BottomItemButton,
	ButtonContentWrpper,
	ButtonItemText,
	ButtonItemIconWrapper,
} from './style'

export const BottomRoundButton = (props) => (
	<BottomItemButton {...props}>
		<ButtonContentWrpper>
			<ButtonItemText>{props.buttonText}</ButtonItemText>
			<ButtonItemIconWrapper>
        <props.IconComponent />
      </ButtonItemIconWrapper>
		</ButtonContentWrpper>
	</BottomItemButton>
);
