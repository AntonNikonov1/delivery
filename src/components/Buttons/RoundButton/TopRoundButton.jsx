import React from 'react'
import { HorizontalLine } from '../../Icons'
import {
	TopItemButton,
	ButtonContentWrpper,
	ButtonItemText,
	ButtonItemIconWrapper,
} from './style'

export const TopRoundButton = (props) => (
	<TopItemButton {...props}>
		<ButtonContentWrpper>
			<ButtonItemText>{props?.buttonText}</ButtonItemText>
			<ButtonItemIconWrapper>
				<props.IconComponent />
			</ButtonItemIconWrapper>
		</ButtonContentWrpper>

    <HorizontalLine />
	</TopItemButton>
)
