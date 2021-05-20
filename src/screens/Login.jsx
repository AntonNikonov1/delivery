import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/auth/middleware'

// Style
import { StyledButton, SpinnerComponent } from '../components'
import {
  SmallScreenContainer,
  ContainerCentered,
  Input,
  LoginTitle
} from '../style'
import { colorWhite } from '../style/variables/colors'

export const Login = ({ navigation }) => {
  const [loginValue, setLoginValue] = useState('admin')
  const [passwordValue, setPasswordValue] = useState('admin')

  const isLogin = useSelector(state => state.loginReducer.isLogin)
  const isLoading = useSelector(state => state.loadingReducer.isLoading)
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(login(loginValue, passwordValue))
  }

  useEffect(() => {
    isLogin ? navigation.navigate('Home') : navigation.navigate('Login')
  }, [isLogin])

  if (isLoading) return  <SpinnerComponent loading={isLoading} />

  return (
    <SmallScreenContainer>
      <StatusBar  
        backgroundColor={colorWhite}
        barStyle='dark-content'   
        hidden={false}    
        translucent = {true}  
      />  

      <ContainerCentered>
        <LoginTitle>Добро пожаловать!</LoginTitle>

        <Input 
          placeholder='Логин' 
          onChangeText={login => setLoginValue(login)}
          autoCorrect={false}
          autoCapitalize='none'
          value={loginValue}
        />
        <Input 
          placeholder='Пароль'
          onChangeText={password => setPasswordValue(password)}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          value={passwordValue}
        />

        <StyledButton 
          onPress={loginHandler} 
          title='войти'
        />
      </ContainerCentered>
    </SmallScreenContainer>
  )
}