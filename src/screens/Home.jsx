import React, { useEffect } from 'react'

// Components
import { StatusBar } from 'react-native'
import { OrdersListCard, Title } from '../components'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/orders/middleware'

// Style
import { ScreenContainer, Container } from '../style'
import { colorWhite } from '../style/variables/colors'
import { SpinnerComponent } from '../components'

export const Home = () => {
  const ordersList = useSelector(state => state.ordersReducer.ordersList)
  const isLoading = useSelector(state => state.loadingReducer.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  if(isLoading) return  <SpinnerComponent loading={isLoading} />

  return (
    <ScreenContainer>
      <StatusBar  
        backgroundColor={colorWhite}
        barStyle='dark-content'   
        hidden={false}    
        translucent = {true}  
      />  

      <Container>
        <Title 
          title='Мои заказы'
          numberOfOrders={ordersList.length}
        />

        <OrdersListCard ordersList={ordersList} />
      </Container>
    </ScreenContainer>
  )
}
