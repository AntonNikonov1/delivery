export const progressGoodsDelivered = (deliveryList) => {
  const todayDate = new Date()
  const numberOfDeliveries = deliveryList.length

  const awaitingDelivery = deliveryList
    .filter(delivery => new Date(delivery.date) >= todayDate)
    .length

  const percentageOfDelivered = 100 - (100 / numberOfDeliveries * awaitingDelivery)
  
  return percentageOfDelivered
}