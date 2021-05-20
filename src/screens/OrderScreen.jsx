import React from 'react'
import { useNavigation } from '@react-navigation/native'

// Redux
import { useDispatch } from 'react-redux'
import { duplicateOrder, removeOrders } from '../../store/orders/actionCreater'

// Componets
import { Alert, StatusBar, Text } from 'react-native'
import {
	AddIcon,
	TrashIcon,
	OrderDetails,
	OrdersList,
	TopRoundButton,
	BottomRoundButton,
} from '../components'

// Style
import { OrderListTitle } from '../components/OrdersList/style'
import { Container } from '../style'
import { colorWhite } from '../style/variables/colors'

export const OrderScreen = (props) => {
	const orderItemInfo = props.route.params.orderItemInfo

	const navigation = useNavigation()
	const dispatch = useDispatch()

	const deleteOrderHandler = () => {
		Alert.alert('Удалить доставку?', '', [
			{
				text: 'Да',
				onPress: () => {
					dispatch(removeOrders(orderItemInfo));
					navigation.goBack();
				},
			},
			{
				text: 'Нет',
			},
		]);
	}

	const duplicateOrderHandler = () => {
		const cloneOrder = Object.assign({}, orderItemInfo)
		dispatch(duplicateOrder(cloneOrder))
	}

	return (
		<OrdersList
			orderInfo={orderItemInfo}
			ListHeaderComponent={
				<>
					<StatusBar
						backgroundColor={colorWhite}
						barStyle='dark-content'
						hidden={false}
						translucent={true}
					/>

					<Container>
						<OrderDetails orderInfo={orderItemInfo} />

            <OrderListTitle>Доставки</OrderListTitle>
					</Container>
				</>
			}
			ListFooterComponent={
				<Container>
					<TopRoundButton
						buttonText='Дублировать заказ'
						IconComponent={AddIcon}
						onPress={duplicateOrderHandler}
					/>
					<BottomRoundButton
						buttonText='Отменить заказ'
						IconComponent={TrashIcon}
						onPress={deleteOrderHandler}
					/>
				</Container>
			}
		/>
	)
}
