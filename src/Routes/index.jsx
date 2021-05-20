import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens & Components
import {
  Home,
  Login,
  OrderScreen
} from '../screens'
import { GoBackIcon } from '../components'

import { colorWhite } from '../style/variables/colors'

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name='Login' 
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{ 
            headerShown: false,
            animationEnabled: false,
            headerLeft: ()=> null
          }}

        />
        <Stack.Screen 
          name='OrderScreen' 
          component={OrderScreen}
          options={{
            title: '',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: colorWhite,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
              elevation: 0,
              shadowOpacity: 0
            },
            backgroundColor: colorWhite,
            headerLeft: () => <GoBackIcon />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
