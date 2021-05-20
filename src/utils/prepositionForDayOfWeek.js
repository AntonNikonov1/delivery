export const prepositionForDayOfWeek = (dayOfWeek, preposition) => {
  if(preposition.toLowerCase() === 'в') {
    switch (dayOfWeek) {
      case 'понедельник':
        return 'в понедельник'

      case 'вторник':
        return 'во вторник'

      case 'среда':
        return 'в среду'  

      case 'четверг':
        return 'в четверг'

      case 'пятница':
        return 'в пятницу'

      case 'суббота':
        return 'в субботу'

      case 'воскресение':
        return 'в воскресение'
    
      default:
        return null
    }
  }
}
