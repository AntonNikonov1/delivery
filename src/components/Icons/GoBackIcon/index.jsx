import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GoBackIconWrapper, GoBackIconText } from './style'

export const GoBackIcon = ({ title = 'Назад' }) => {
  const navigation = useNavigation()

  return (
    <GoBackIconWrapper onPress={navigation.goBack}>
      <GoBackIconText>{title}</GoBackIconText>
    </GoBackIconWrapper>
  )
}