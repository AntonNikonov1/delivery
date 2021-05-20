import React from 'react'
import { StatusBar } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import { SmallScreenContainer } from '../../../style'
import { colorBlack, colorWhite } from '../../../style/variables/colors'

export const SpinnerComponent = ({ loading }) => (
  <SmallScreenContainer>
    <StatusBar  
      backgroundColor={colorWhite}
      barStyle='dark-content'   
      hidden={false}    
      translucent = {true}  
    />  

    <Spinner
      visible={loading}
      textContent='Loading...'
      overlayColor={colorWhite}
      animation='fade'
      color={colorBlack}
    />
  </SmallScreenContainer>
)
