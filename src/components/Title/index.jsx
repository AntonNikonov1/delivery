import React from 'react'
import PropTypes from 'prop-types'

import { ScreenTitle } from '../../style/StyledComponents/Titles'
import { NumberOfOrders, TitleContainer } from './styled'

export const Title = ({ title, numberOfOrders }) => (
  <TitleContainer>
    <ScreenTitle>{title}</ScreenTitle>
    <NumberOfOrders>{numberOfOrders}</NumberOfOrders>
  </TitleContainer>
)

Title.propTypes = {
  title: PropTypes.string,
  numberOfOrders: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
