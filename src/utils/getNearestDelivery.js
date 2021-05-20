export const getNearestDelivery = deliveriesList => {
  const todayDate = new Date()
  const sortByMinDate = deliveriesList.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  
  const firstFutureDate = sortByMinDate
    .filter(deliveryItem => Date.parse(deliveryItem.date) > Date.parse(todayDate))
    [0]

  return {
    futureDeliveryDate: firstFutureDate ? firstFutureDate : sortByMinDate[sortByMinDate.length - 1],
    deliveryIsOver: Boolean(firstFutureDate)
  }
}