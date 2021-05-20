import { differenceInDays, format, isFuture, isPast, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

export const getStringMonth = date => format(
  new Date(date),
  'LLL',
  { locale: ru }
)

export const getDayOfMonth = date => format(
  new Date(date),
  'dd'
)

export const getDayOfWeek = (date, isShort) => format(
  new Date(date),
  isShort ? 'EEE' : 'EEEE',
  { locale: ru },
)

export const getHighestAndLowestDate = dateList => {
  const sortDate = dateList.sort((a, b) => new Date(a) - new Date(b))

  const minDate = sortDate[0]
  const maxDate = sortDate[sortDate.length - 1]

  return {
    minDate,
    maxDate
  }
}

export const getRemainingDays = date => {
  const todayDate = new Date()
  const dateIsFuture = isFuture(parseISO(date))

  if (dateIsFuture) {
    return differenceInDays(parseISO(date), todayDate)
  }

  return null
}

export const getPastDays = date => {
  const todayDate = new Date()
  const dateIsPast = isPast(parseISO(date))

  if (dateIsPast) {
    return differenceInDays(todayDate, parseISO(date))
  }
  
  return null
}