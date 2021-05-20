import React from 'react'
import { HorizontalLine } from '../../Icons'
import {
	ItemButton,
	ButtonContentWrpper,
	ButtonItemText,
	ButtonItemIconWrapper,
} from './style'

export const CenterRoundButton = (props) => (
	<ItemButton {...props}>
		<ButtonContentWrpper>
			<ButtonItemText>{props?.buttonText}</ButtonItemText>
			<ButtonItemIconWrapper>
        <props.IconComponent />
      </ButtonItemIconWrapper>
		</ButtonContentWrpper>

    <HorizontalLine />
	</ItemButton>
);
